module.exports = {
  siteMetadata: {
    title: `Propel School Blog`,
    name: `Propel School`,
    siteUrl: `https://blog.propel.school`,
    description: `The Propel School. Learn and be inspired!`,
    hero: {
      heading: `Learn and be inspired!`,
      maxWidth: 652,
    },
    social: [
      {
        name: `facebook`,
        url: `https://facebook.com/propelschool`,
      },
      {
        name: `youtube`,
        url: `https://www.youtube.com/channel/UC3E2xuKUE6ixP6dfsYtGU3w`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Propel School Blog`,
        short_name: `Propel School`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
