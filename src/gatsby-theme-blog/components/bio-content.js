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
    <Styled.h4>Quality assurance and Test engineering</Styled.h4>
  </Fragment>
)
