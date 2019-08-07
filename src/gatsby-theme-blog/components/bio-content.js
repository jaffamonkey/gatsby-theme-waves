import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"

/**
 * Shadow me to add your own bio content
 */

export default () => (
  <Fragment>
    <Styled.h2
      css={css({
        color: 'highlight'
      })}
    >quality engineering</Styled.h2>
    <Styled.h5>pragmatic improvements to CI/CD and embedding quality in ways of working</Styled.h5>
    {/* <Styled.img src="./cicd.png"></Styled.img> */}
  </Fragment>
)
