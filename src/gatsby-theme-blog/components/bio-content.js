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
      >quality engineering</Styled.h2>
    <strong>quality</strong><em> assurance and test </em><strong>engineering</strong>
  </Fragment>
)
