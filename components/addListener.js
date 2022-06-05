export function addListener(props) {
  let addListener = (selector) => (eventType) => (listener) => {
    let element = document.querySelector(selector);
    element.addEventListener(eventType, listener);
  };
}
