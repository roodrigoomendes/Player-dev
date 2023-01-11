import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const PointsOptions = (props) => (
  <Svg
    width={8}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4 6.667A3.176 3.176 0 0 0 7.167 3.5 3.176 3.176 0 0 0 4 .333 3.176 3.176 0 0 0 .833 3.5 3.176 3.176 0 0 0 4 6.667Zm0 3.166A3.176 3.176 0 0 0 .833 13 3.176 3.176 0 0 0 4 16.167 3.176 3.176 0 0 0 7.167 13 3.176 3.176 0 0 0 4 9.833Zm0 9.5A3.176 3.176 0 0 0 .833 22.5 3.176 3.176 0 0 0 4 25.667 3.176 3.176 0 0 0 7.167 22.5 3.176 3.176 0 0 0 4 19.333Z"
      fill="#fff"
    />
  </Svg>
)

export default PointsOptions
