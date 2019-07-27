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
      <Styled.div><img class ="gatsby-image-wrapper" src="./images/code/java-plain.png" width="40"/><img class ="gatsby-image-wrapper" src="./images/code/javascript-plain.png" width="40" /><img class ="gatsby-image-wrapper" src="./images/code/php-plain.png" width="40" /><img class ="gatsby-image-wrapper" src="./images/code/python-plain.png" width="40" /><img class ="gatsby-image-wrapper" src="./images/code/swift-plain.png" width="40" /></Styled.div>
      <br /><br />
      <Styled.h6>© 2019 jaffamonkey B.V. (KVK 71855157) Vestigingsnr: 1012 RP Amsterdam</Styled.h6>
    </Fragment>

  </footer>
)
export default Footer
