export function addListener(
  selector,
  eventType,
  listener = console.log("No listener defined")
) {
  let addListener = (selector) => (eventType) => (listener) => {
    let element = document.querySelector(selector);
    element.addEventListener(eventType, listener);
  };

  let addButtonListener = addListener(`${selector}`);
  let addButtonClickListener = addButtonListener(`${eventType}`);
  addButtonClickListener(() => {
    listener();
  });
}
