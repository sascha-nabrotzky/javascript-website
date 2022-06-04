export function navigation() {
  let nav = document.createElement("nav");
  nav.className = "navigation";
  nav.innerHTML = "<ul><li>Link</li></ul>";
  const linkArray = ["Link1", "Link2", "Link3"];

  let navigation = linkArray.forEach((item) => {
    console.log(item);
  });

  return document.body.append(nav);
}
