import { appendChild } from "./DOMFactory";
import { createBalanceUI, createIncomingBalanceUI } from "./UIFactory";

export function renderBalance() {
  // eslint-disable-next-line no-undef
  const body = document.getElementsByTagName("body")[0];

  appendChild(body, createBalanceUI("first-balance"));
  appendChild(body, createBalanceUI("final-balance"));
  appendChild(body, createIncomingBalanceUI());
}
