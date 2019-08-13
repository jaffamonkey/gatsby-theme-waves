module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `jaffamonkey`,
    // Used to provide alt text for your avatar
    author: `Paul Littlebury`,
    // Used for SEO
    description: `quality engineering`,
    // Used for social links in the root footer
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/jaffamonkey`,
      },
      {
        name: `github`,
        url: `https://github.com/jaffamonkey`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/jaffamonkey`,
      },
      {
        name: `sms`,
        url: `sms:+447739670315`,
        image: ``
      },
      {
        name: `call`,
        url: `tel:+447739670315`,
      },
      {
        name: `email (if you must)`,
        url: `mailto:paullittlebury@gmail.com`,
      }
    ],
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-sharp`,
    "gatsby-theme-waves",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
        contentPath: `blog/posts`,
        assetsPath: `blog/assets`,
        mdx: false,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-theme-mdx-deck",
      options: { mdx: false, basePath: "decks" },
    },
  ],
}
