const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-theme-blog-src-templates-post-js": hot(preferDefault(require("/home/pablo/github/gatsby-theme-waves/node_modules/gatsby-theme-blog/src/templates/post.js"))),
  "component---node-modules-gatsby-theme-blog-src-templates-posts-js": hot(preferDefault(require("/home/pablo/github/gatsby-theme-waves/node_modules/gatsby-theme-blog/src/templates/posts.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/pablo/github/gatsby-theme-waves/.cache/dev-404-page.js")))
}

