import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"

/**
 * Shadow me to add your own bio content
 */

export default () => (
  <Fragment>
    <Styled.h2
      css={css({
        mb: 10,
        color: `homeheadline`,
      })}
    >Quality engineering</Styled.h2>
    <h3><code class="css-fa1w8j">Quality assurance</code> and <code class="css-fa1w8j">Test engineering</code></h3>
  </Fragment>
)
