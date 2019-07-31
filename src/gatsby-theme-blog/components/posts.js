import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"

import Layout from "../components/layout"
import Footer from "../components/home-footer"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <main>
      {posts.slice(0, 3).map(({ node }) => {
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
    <Styled.div><a href="https://infallible-archimedes-b888a8.netlify.com/theclients"><img Hspace="5" width="50" src="./images/clients/nike.jpg" /><img Hspace="5" width="50" src="./images/clients/tele2.jpg" />
          <img Hspace="5" width="50" src="./images/clients/disney.jpg" /><img Hspace="5" width="50" src="./images/clients/engine.jpg" /><img Hspace="5" width="50" src="./images/clients/sonyplaystation.jpg" /><img Hspace="5" width="50" src="./images/clients/citibank.jpg" /><img Hspace="5" width="50" src="./images/clients/digitas.jpg" /><img Hspace="5" width="50" src="./images/clients/incisivemedia.jpg" /></a><img Hspace="5" width="50" src="./images/clients/wowcher.jpg" /><img Hspace="5" width="50" src="./images/clients/bbc.jpg" /><img Hspace="5" width="50" src="./images/clients/pearson.jpg" />
          </Styled.div>

    <Footer socialLinks={socialLinks} />
  </Layout>
)

export default Posts
