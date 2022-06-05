import { addListener } from "/components/addListener.js";

export function button(props) {
  const btn = document.createElement("button");
  btn.setAttribute("id", "button");
  btn.innerText = "Button";
  document.body.append(btn);

  let addListener = (selector) => (eventType) => (listener) => {
    let element = document.querySelector(selector);
    element.addEventListener(eventType, listener);
  };

  let addButtonListener = addListener("#button");
  let addButtonClickListener = addButtonListener("click");
  addButtonClickListener(() => {
    console.log("Button clicked");
  });
}
