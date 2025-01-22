import { appendChild, getElementBySelector } from "./DOMFactory";
import { createForm } from "./UIFactory";

export function editButtonHandler(balanceType) {
  const dialog = getElementBySelector("dialog");
  const form = createForm(balanceType);

  dialog.textContent = "";

  appendChild(dialog, form);

  dialog.show();
}
