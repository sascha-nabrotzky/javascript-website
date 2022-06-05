export function headline(props) {
  let div = document.createElement("div");
  div.className = "headline";
  div.innerHTML = `<h1>${props}</h1>`;

  return document.body.append(div);
}
