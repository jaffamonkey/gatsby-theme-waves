const purple60 = `#191970`
const purple30 = `#7FC4F8`
const orange30 = `#e88200`
const orange60 = `#e8831b`
const grey90 = `#232129`
const black80 = `#1B1F23`
const white = `#fff`
const midnightblue	 = `#696969`
const lightWhite = `rgba(255, 255, 255, 0.86)`
const opaqueLightYellow = `rgba(255, 229, 100, 0.2)`
const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`
const lightGray = `hsla(0, 0%, 0%, 0.2)`

export default {
  text: grey90,
  background: white,
  primary: purple60,
  secondary: black80,
  homeheadline: orange60,
  muted: lightGray,
  highlight: opaqueLightYellow,
  heading: grey90,
  prism: {
    background: `#011627`,
    comment: `#809393`,
    string: `#addb67`,
    var: `#d6deeb`,
    number: `#f78c6c`,
    constant: `#82aaff`,
    punctuation: `#c792ea`,
    className: `#ffc98b`,
    tag: `#ffa7c4`,
    boolean: `#ff5874`,
    property: `#80cbc4`,
    namespace: `#b2ccd6`,
    highlight: `hsla(207, 95%, 15%, 1)`,
  },
  modes: {
    dark: {
      text: lightWhite,
      background: grey90,
      primary: purple30,
      secondary: lightWhite,
      homeheadline: orange30,
      muted: opaqueLightWhite,
      highlight: midnightblue,
      heading: white,
    },
  },
}
