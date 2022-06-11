export function logo() {
  const header = document.createElement("header");
  const img = document.createElement("img");
  img.src = "logo.svg";
  header.append(img);

  return document.body.append(header);
}
