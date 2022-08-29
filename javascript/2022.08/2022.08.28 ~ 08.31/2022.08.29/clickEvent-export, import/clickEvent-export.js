export default function clickEvent(element, color) {
  element.addEventListener('click', () => {
    element.style.color = color;
  });
}