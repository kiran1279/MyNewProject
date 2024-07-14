import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Eye = ({ size = 50, color = "black", active = true }) => (
    <Svg
        width={size + 4}
        height={size}
        viewBox="0 0 54 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <>{
            active ?
                <Path
                    d="M4.49755 2.5L49.4975 47.5M21.6083 19.7841C20.3017 21.134 19.4976 22.973 19.4976 25C19.4976 29.1423 22.8555 32.5 26.9975 32.5C29.0538 32.5 30.9168 31.6725 32.2715 30.3325M13.2476 11.6179C8.4993 14.7509 4.88263 19.4599 3.14258 25C6.3282 35.1427 15.804 42.5 26.998 42.5C31.9703 42.5 36.6035 41.0485 40.497 38.546M24.4975 7.62347C25.32 7.54182 26.1543 7.5 26.998 7.5C38.1923 7.5 47.668 14.8573 50.8535 25C50.1518 27.235 49.1443 29.3345 47.8805 31.25"
                    stroke={color}
                    strokeWidth={5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                /> :
                <>
                    <Path
                        d="M34.5018 20C34.5018 24.1423 31.144 27.5 27.0018 27.5C22.8598 27.5 19.5018 24.1423 19.5018 20C19.5018 15.8577 22.8598 12.5 27.0018 12.5C31.144 12.5 34.5018 15.8577 34.5018 20Z"
                        stroke={color}
                        strokeWidth={5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        d="M27.003 2.5C15.8088 2.5 6.33315 9.8572 3.14745 20C6.3331 30.1427 15.8088 37.5 27.003 37.5C38.197 37.5 47.6727 30.1427 50.8585 20C47.6727 9.85728 38.197 2.5 27.003 2.5Z"
                        stroke={color}
                        strokeWidth={5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </>
        }

        </>

    </Svg>
);
export default Eye;
