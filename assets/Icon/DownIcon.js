import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const DownIcon = (props) => (
  <Svg
    width={11}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m10.753 18.377-6.384-7.65 6.384-7.65L8.788.727l-8.364 10 8.364 10 1.965-2.35Z"
      fill="#fff"
    />
  </Svg>
)

export default DownIcon
