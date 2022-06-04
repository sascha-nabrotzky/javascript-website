export function headline() {
  let div = document.createElement("div");
  div.className = "headline";
  div.innerHTML = "<h1>Headline</h1>";

  return document.body.append(div);
}
