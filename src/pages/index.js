import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Carousel from '../components/Carousel';
import SideNavLayout from '../layouts/SideNavLayout';
import { ComprarDirectButton } from '../components/PurchaseButtons';

const links = [
  { href: 'https://nostarch.com/nature-code', label: 'No Starch' },
  {
    href: 'https://bookshop.org/p/books/the-nature-of-code-daniel-shiffman/20597363?ean=9781718503700',
    label: 'Bookshop.org',
  },
  {
    href: 'https://amzn.to/4e3243y',
    label: 'Amazon',
  },
  {
    href: 'https://www.barnesandnoble.com/w/the-nature-of-code-daniel-shiffman/1114086024',
    label: 'Barnes & Noble',
  },
  {
    href: 'https://github.com/nature-of-code/buyers-guide',
    label: 'Lojas internacionais',
  },
];

export default function IndexPage() {
  return (
    <SideNavLayout>
      <Carousel>
        <StaticImage
          src="../images/gallery/0.jpg"
          width={1600}
          alt="capa da frente do livro A Natureza do Código"
        />
        <StaticImage
          src="../images/gallery/1.jpg"
          width={1600}
          alt="capa rosa-vivo com texto branco e padrões ondulados sutis"
        />
        <StaticImage
          src="../images/gallery/2.jpg"
          width={1600}
          alt="contracapa do livro A Natureza do Código"
        />
        <StaticImage
          src="../images/gallery/3.jpg"
          width={1600}
          alt="livro aberto, segurado com as duas mãos, exibindo páginas de A Natureza do Código"
        />
        <StaticImage
          src="../images/gallery/4.jpg"
          width={1600}
          alt="livro aberto com um exemplo de programação sobre atrito em JavaScript (p5.js) e uma captura do esboço em movimento"
        />
        <video playsInline muted className="m-0 aspect-video">
          <source src="/flipping.mp4" type="video/mp4" />
        </video>
      </Carousel>

      <div className="my-6">
        Olá! Boas-vindas! Você pode ler o livro inteiro aqui — graças ao
        Creative Commons. Se este projeto despertar sua curiosidade e você
        quiser apoiá-lo, pode{' '}
        <a href="https://github.com/sponsors/CodingTrain">
          patrocinar no GitHub
        </a>{' '}
        ou adquirir comigo uma cópia impressa do livro{' '}
        <a href="https://store.natureofcode.com/products/the-nature-of-code">
          diretamente na loja
        </a>
        !
      </div>

      <StaticImage
        className="float-right"
        src="../images/bookmark-pink-bg.png"
        width={150}
        alt="uma mão segurando um marcador de páginas e um adesivo"
      />
      <div className="my-6">
        <b>Opções de compra</b>

        {/* Compra direta */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          <ComprarDirectButton />
          <p className="my-0 text-sm">
            *inclui marcador de páginas e adesivo exclusivos!
          </p>
        </div>

        {/* Outras opções */}
        <div className="mt-4 flex flex-wrap gap-2">
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              <button
                key={link.href}
                className="rounded-xl border border-noc-200 px-3 py-[7px] text-sm text-noc-500"
              >
                {link.label}
              </button>
            </a>
          ))}
        </div>
      </div>
    </SideNavLayout>
  );
}
