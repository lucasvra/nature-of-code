import * as React from 'react';
import { graphql, navigate } from 'gatsby';

import BaseLayout from '../layouts/BaseLayout';
import { getRandomItem } from '../utils';

export default function NotFoundPage({ data }) {
  const [sketch, setSketch] = React.useState(null);
  const navigateToRandomChapter = () => {
    const {
      node: { slug },
    } = getRandomItem(data.allBookSection.edges);
    navigate(`/${slug}/`);
  };

  React.useEffect(() => {
    const getSketches = async () => {
      const sketches = await import('/static/404_sketches.json');
      setSketch(sketches?.[0] && getRandomItem(sketches));
    };

    getSketches();
  }, []);

  return (
    <BaseLayout>
      <div className="mx-auto my-8 flex max-w-6xl flex-col items-center">
        <h1 className="text-2xl font-bold">404 — Página não encontrada</h1>

        {sketch && (
          <>
            <iframe
              title="Esboço p5.js incorporado"
              src={sketch.url}
              height={644}
              width={802}
              className="mt-10 h-[644px] w-[802px] overflow-hidden rounded-xl border border-noc-200"
            ></iframe>
            <p className="mt-2">
              <span>por </span>
              {sketch.name && <span>{sketch.name}</span>}
              {sketch.socialMedia && (
                <>
                  <span className="mx-2 text-gray-400">|</span>
                  <a
                    href={sketch.socialMedia.url}
                    className="text-noc-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {sketch.socialMedia.handle}
                  </a>
                </>
              )}
            </p>
          </>
        )}

        <button
          className="mt-12 rounded-xl bg-noc-400 px-4 py-2 text-sm font-medium text-white"
          onClick={navigateToRandomChapter}
        >
          Leve-me a um capítulo aleatório!
        </button>
      </div>
    </BaseLayout>
  );
}

export const query = graphql`
  query QueryTargetCapítulos {
    allBookSection(filter: { type: { eq: "chapter" } }) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;
