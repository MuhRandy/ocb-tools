export function appendChild(parent, child) {
  if (parent && child) {
    parent.appendChild(child);
  }
}

export function createElement(tagName, options = {}) {
  // eslint-disable-next-line no-undef
  const element = document.createElement(tagName);

  if (options.className) element.className = options.className;
  if (options.id) element.id = options.id;
  if (options.textContent) element.textContent = options.textContent;
  if (options.innerHTML) element.innerHTML = options.innerHTML;

  if (options.attributes) {
    Object.keys(options.attributes).forEach((attr) => {
      element.setAttribute(attr, options.attributes[attr]);
    });
  }

  return element;
}

export function getElementBySelector(selector) {
  // eslint-disable-next-line no-undef
  return document.querySelector(selector);
}

export function getElementBySelectorAll(selector) {
  // eslint-disable-next-line no-undef
  return document.querySelectorAll(selector);
}
