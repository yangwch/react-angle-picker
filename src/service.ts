import { Point } from './interface';

export const getStartPoint = (
  width: number,
  circleWidth: number,
  borderWidth: number,
): Point => ({
  x: width - circleWidth / 2 - borderWidth * 2,
  y: width / 2 - borderWidth,
});

export const getCenter = (width: number, borderWidth: number) => ({
  x: width / 2 - borderWidth,
  y: width / 2 - borderWidth,
});

// 弧度转角度
export const radianToAngle = (radian: number): number => {
  const angle = Math.round((radian * 180) / Math.PI);
  if (angle < 0) {
    return 360 + angle;
  }
  return angle;
};
