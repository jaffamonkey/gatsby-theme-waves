import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    {socialLinks.map((platform, i, arr) => (
      <Fragment key={platform.url}>
        <Styled.a href={platform.url} target="_blank" rel="noopener noreferrer">
          {platform.name}
        </Styled.a>
        {arr.length - 1 !== i && (
          <Fragment>
            {` `}&bull;{` `}
          </Fragment>
        )}
      </Fragment>
    ))}
    <Fragment>
      <br /><br />
      <Styled.h1><img class ="gatsby-image-wrapper" src="./images/code/java.svg" width="40"/><img class ="gatsby-image-wrapper" src="./images/code/js.svg" width="40" /><img class ="gatsby-image-wrapper" src="./images/code/php.svg" width="40" /><img class ="gatsby-image-wrapper" src="./images/code/python.svg" width="40" /><img class ="gatsby-image-wrapper" src="./images/code/swift.svg" width="40" /></Styled.h1>
      <br /><br />
      <Styled.h5>© 2019 jaffamonkey B.V. (KVK 71855157) Vestigingsnr: 1012 RP Amsterdam</Styled.h5>
    </Fragment>

  </footer>
)
export default Footer
