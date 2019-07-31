import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Shadow me to add your own bio content
 */

export default () => (
  <Fragment>
    <Styled.h2>quality engineering</Styled.h2>
    <Styled.h4>A pragmatic approach to improving quality in CI & CD</Styled.h4>
    {/* <Styled.img src="./cicd.png"></Styled.img> */}
    <br/>
    <Styled.div><a href="https://infallible-archimedes-b888a8.netlify.com/theclients"><img Hspace="5" width="50" src="./images/clients/nike.jpg" /><img Hspace="5" width="50" src="./images/clients/tele2.jpg" />
          <img Hspace="5" width="50" src="./images/clients/disney.jpg" /><img Hspace="5" width="50" src="./images/clients/engine.jpg" /><img Hspace="5" width="50" src="./images/clients/sonyplaystation.jpg" /><img Hspace="5" width="50" src="./images/clients/citibank.jpg" /><img Hspace="5" width="50" src="./images/clients/digitas.jpg" /><img Hspace="5" width="50" src="./images/clients/incisivemedia.jpg" /></a></Styled.div>
    </Fragment>
)
  