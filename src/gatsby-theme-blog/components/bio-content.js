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
    <Styled.div><img src="/images/testeng/wechat.svg" alt="ide" title="ide" Hspace="10" height="40" /><img src="/images/testeng/python.svg" alt="pipeline" title="Software" Hspace="10" height="40" /><img src="/images/testeng/github.svg" alt="pipeline" title="Software" height="40" Hspace="10" /><img src="/images/testeng/circle.svg" alt="pipeline" title="Software" height="40" Hspace="10" /><img src="/images/testeng/docker.svg" alt="pipeline" title="Software" height="40" Hspace="10" /><img src="/images/testeng/azurepipelines.svg" alt="pipeline" title="Software" height="40" Hspace="10" /></Styled.div>
  </Fragment>
)
