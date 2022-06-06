import { addListener } from "/components/addListener.js";

export function button(props) {
  const btn = document.createElement("button");
  btn.setAttribute("id", "button");
  btn.innerText = "Button";
  document.body.append(btn);

  function logText() {
    console.log("Button clicked");
  }

  addListener("#button", "click", logText);
}
