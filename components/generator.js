export function generator() {
  function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
  }

  let generator = generateSequence();
  const div = document.createElement("div");
  div.className = "generatorvalues";

  for (let value of generator) {
    const p = document.createElement("p");
    p.innerText = `Generator value: ${value}`;
    div.append(p);
  }

  return document.body.append(div);
}
