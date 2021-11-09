export const getStartPoint = (width, circleWidth, borderWidth) => ({
  x: width - circleWidth / 2 - borderWidth,
  y: width / 2,
});

export const getCenter = (width, borderWidth) => ({
  x: width / 2 - borderWidth,
  y: width / 2 - borderWidth,
});

// 弧度转角度
export const radianToAngle = radian => {
  const angle =  Math.round((radian * 180) / Math.PI);
  if (angle < 0) {
    return 360 + angle;
  }
  return angle;
}
