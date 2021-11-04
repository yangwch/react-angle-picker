export const getStartPoint = (width, circleWidth, borderWidth) => ({
  x: width - circleWidth / 2 - borderWidth,
  y: width / 2,
});

export const getCenter = (width, borderWidth) => ({
  x: width / 2 - borderWidth,
  y: width / 2 - borderWidth,
});
