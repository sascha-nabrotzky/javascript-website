export function generatorComposition() {
  function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }

  function* generatePasswordCodes() {
    yield* generateSequence(48, 57); //0..9
    yield* generateSequence(65, 90); //A..Z
    yield* generateSequence(97, 122); //a..z
  }

  let str = "";

  for (let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
  }

  const div = document.createElement("div");
  div.className = "generatorcomposition";
  const p = document.createElement("p");
  p.innerText = `Generator Composition: ${str}`;
  div.append(p);

  console.log(str);
  return document.body.append(div);
}
