let html: string = "Hello webpack";

function component() {
  const element = document.createElement("div");

  element.innerHTML = html;

  return element;
}

document.body.appendChild(component());
