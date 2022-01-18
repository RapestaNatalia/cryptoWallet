import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Icon } from "../../interfaces/interfaces";

const SvgComponent = ({ color, width, heigth }: Icon) => (
  <Svg width={width ? width : 6} height={heigth ? heigth : 10} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.707.293a1 1 0 0 1 0 1.414L2.414 5l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z"
      fill={color ? color : "#019FB5"}
    />
  </Svg>
);

export default SvgComponent;
