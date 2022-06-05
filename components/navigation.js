export function navigation() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  nav.append(ul);
  nav.className = "nav";
  ul.className = "nav__list";

  const links = {
    Portfolio: "https://sascha-nabrotzky.github.io",
    Link2: "#",
    Link3: "#",
  };

  for (let [key, link] of Object.entries(links)) {
    const li = document.createElement("li");
    li.className = "nav__listitem";
    ul.append(li);

    if (link == "#") {
      li.innerHTML = `<a href="${link}" class="nav__link">${key}</a>`;
    } else {
      li.innerHTML = `<a href="${link}" class="nav__link" target="_blank" rel="noopener">${key}</a>`;
    }
  }

  return document.body.append(nav);
}
