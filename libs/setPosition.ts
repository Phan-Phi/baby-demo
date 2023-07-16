const setPosition = (
  target: HTMLElement,
  xPos: string | number,
  yPos: string | number
) => {
  target.style.position = "absolute";
  target.style.left = `${xPos}px`;
  target.style.top = `${yPos}px`;
  target.style.transform = `translate(-50%,-50%)`;
};

export { setPosition };
