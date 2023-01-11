import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PlayIcon = (props) => (
  <Svg
    width={51}
    height={51}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.777 43.202a3.455 3.455 0 0 1-1.71-.457c-1.171-.664-1.9-1.953-1.9-3.352v-28.32c0-1.404.729-2.689 1.9-3.353a3.43 3.43 0 0 1 3.494.044l24.204 14.488a3.517 3.517 0 0 1 0 5.957L15.557 42.702a3.468 3.468 0 0 1-1.78.5Z"
      fill="#E1E1E6"
    />
  </Svg>
)

export default PlayIcon
