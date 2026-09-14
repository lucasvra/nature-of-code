module.exports = {
  siteMetadata: {
    title: `A Natureza do Código`,
    siteUrl: `https://natureofcode.com`,
    description: `Simulando sistemas naturais com JavaScript`,
    customNavLinks: [
      {
        slug: 'credits',
        title: 'Créditos',
      },
      {
        slug: 'examples',
        title: 'Exemplos',
      },
      {
        slug: 'exercises',
        title: 'Exercícios',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: 'BookSection',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `A Natureza do Código`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: [
          'SHOPIFY_DOMAIN',
          'SHOPIFY_ACCESS_TOKEN',
          'SHOPIFY_PRODUCT_ID',
        ],
      },
    },
  ],
};
