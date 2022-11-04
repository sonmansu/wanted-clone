import { getIconName, iconSet } from './svgIconConstants';

export default function Icon({ icon, size, color }) {
  if (!getIconName().includes(icon)) {
    console.log('ERROR, 아이콘 이름을 확인하세요', icon);
    return;
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox={iconSet[icon].viewBox}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={iconSet[icon].path} />
    </svg>
  );
}
Icon.defaultProps = {
  size: '28',
  color: 'rgb(0, 0, 0)',
};
