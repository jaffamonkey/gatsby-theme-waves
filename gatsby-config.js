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
      {
        name: `email`,
        url: `mailto:paullittlebury@gmail.com`,
      }
    ],
  },
  plugins: [
    `gatsby-theme-blog`, `gatsby-theme-waves`]
};
