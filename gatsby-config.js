module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `jaffamonkey`,
    // Used to provide alt text for your avatar
    author: `Paul Littlebury`,
    // Used for SEO
    description: `Quality`,
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
    ],
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-sharp`,
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
    "gatsby-theme-waves",
  ],
}
