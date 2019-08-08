import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"

import Layout from "../components/layout"
import Footer from "../components/home-footer"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
      <Styled.div><a href="https://jaffamonkey.netlify.com/theclients"><img Hspace="5" width="45" src="./images/clients/nike.jpg" alt="Nike" /><img Hspace="5" width="45" src="./images/clients/tele2.jpg" alt="Nike" />
  <img Hspace="5" width="45" src="./images/clients/disney.jpg" alt="Nike" /><img Hspace="5" width="45" src="./images/clients/engine.jpg" alt="Nike" /><img Hspace="5" width="45" src="./images/clients/sonyplaystation.jpg" alt="Nike" /><img Hspace="5" width="45" src="./images/clients/o2.jpg" alt="o2" /><img Hspace="5" width="45" src="./images/clients/citibank.jpg" alt="Nike" /><img Hspace="5" width="45" src="./images/clients/digitas.jpg" alt="Nike" /><img Hspace="5" width="45" src="./images/clients/incisivemedia.jpg" alt="Nike" /></a><img Hspace="5" width="45" src="./images/clients/wowcher.jpg" alt="Nike" /><img Hspace="5" width="45" src="./images/clients/bbc.jpg" alt="Nike" /><img Hspace="5" width="45" src="./images/clients/pearson.jpg" alt="Nike" />
  <br /><br /><br /></Styled.div>
    <main>
      {posts.slice(0, 5).map(({ node }) => {
        const title = node.title || node.slug
        return (
          <Fragment key={node.slug}>
            <div>
              <Styled.h2
                css={css({
                  mb: 1,
                })}
              >
                <Styled.a
                  as={Link}
                  css={{
                    textDecoration: `none`,
                  }}
                  to={node.slug}
                >
                  {title}
                </Styled.a>
              </Styled.h2>
              <small>{node.date}</small>
              <Styled.p>{node.excerpt}</Styled.p>
            </div>
          </Fragment>
        )
      })}
    </main><br />
    <Footer socialLinks={socialLinks} />
  </Layout>
)

export default Posts
