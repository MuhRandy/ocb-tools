import { editButtonHandler } from "./buttonHandler";
import { appendChild, createElement } from "./DOMFactory";

export function createBalanceUI(balanceType) {
  const container = createContainer(
    balanceType,
    generateBalanceTextContent(balanceType),
  );
  const span = createElement("span", { textContent: "0" });
  const button = createButton("Edit");

  button.onclick = () => editButtonHandler(balanceType);

  appendChild(container, span);
  appendChild(container, button);

  return container;
}

export function createIncomingBalanceUI() {
  const container = createContainer("incoming-balance", "Saldo Masuk : ");
  const list = createElement("ul");
  const button = createButton("Tambah");

  appendChild(container, button);
  appendChild(container, list);

  return container;
}

export function createForm(balanceType) {
  const form = createElement("form", {
    attributes: {
      method: "dialog",
    },
  });
  const label = createElement("label", {
    textContent: generateBalanceTextContent(balanceType),
  });
  const input = createElement("input", {
    attributes: {
      inputmode: "numeric",
    },
  });
  const button = createButton("Simpan");

  appendChild(label, input);

  appendChild(form, label);
  appendChild(form, button);

  return form;
}

function createContainer(className, textContent) {
  return createElement("div", { className, textContent });
}

function createButton(textContent) {
  return createElement("button", { textContent });
}

function generateBalanceTextContent(balanceType) {
  let textContent;

  if (balanceType === "first-balance") textContent = "Saldo Awal : ";
  if (balanceType === "final-balance") textContent = "Saldo Akhir : ";

  return textContent;
}
