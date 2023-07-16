const getPosition = (target: Element, parentNode?: SVGSVGElement) => {
  const xPos = target.getAttribute("cx") || target.getAttribute("x");
  const yPos = target.getAttribute("cy") || target.getAttribute("y");

  let parentWidth, parentHeight;

  if (parentNode) {
    const { width, height } = parentNode.viewBox.baseVal;
    parentWidth = width;
    parentHeight = height;
  }

  return {
    xPos,
    yPos,
    parentWidth,
    parentHeight,
  };
};

export { getPosition };
