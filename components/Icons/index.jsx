import Svg, { Path, Circle } from 'react-native-svg';

export const IconPlay = () => {
    return (
        <Svg width="11" height="15" viewBox="0 0 11 15" fill="none">
            <Path d="M0.015625 0.473022L10.9844 7.4574L0.015625 14.4418V0.473022Z" fill="#021123" />
        </Svg>
    )
}

export const IconPause = () => {
    return (
        <Svg width="12" height="15" viewBox="0 0 12 15" fill="none">
            <Path d="M8.01562 0.473022H12V14.4418H8.01562V0.473022ZM0 14.4418V0.473022H3.98438V14.4418H0Z" fill="#021123" />
        </Svg>
    )
}

export const IconCheck = ({ checked = false, size = 24 }) => {
  const color = checked ? "#4CAF50" : "#BDBDBD";

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="12" fill={color} />
      <Path
        d="M6 12.5L10 16L18 8"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};


export const IconPencil = ({ size = 24, color = "#333" }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25Z"
        stroke={color}
        strokeWidth={2}
      />
      <Path
        d="M18.37 3.63C18.74 3.26 19.26 3.26 19.63 3.63L21.37 5.37C21.74 5.74 21.74 6.26 21.37 6.63L19.5 8.5L16.5 5.5L18.37 3.63Z"
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  );
};


export const IconTrash = ({ size = 24, color = "#333" }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 6H21"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M8 6V4H16V6"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M19 6L18 20H6L5 6"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

