import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Icon } from "../../interfaces/interfaces";

const ArrowComponent = ({ color, width, heigth }: Icon) => (
  <Svg width={width ? width : 10} height={heigth ? heigth : 12} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.293 5.707a1 1 0 0 1 0-1.414l4.005-4a1.002 1.002 0 0 1 1.416 0l4.005 4a1 1 0 0 1-1.416 1.414L6.007 3.414V11a1 1 0 0 1-1.001 1 1.002 1.002 0 0 1-1.001-1V3.414L1.709 5.707a1.002 1.002 0 0 1-1.416 0Z"
      fill={color ? color : "#10B981"}
    />
  </Svg>
);

export default ArrowComponent;
