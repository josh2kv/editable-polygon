export const addElement = (tagName, id, text, targetId) => {
  const $target = document.getElementById(targetId);
  const $element = document.createElement(tagName);
  $element.setAttribute('id', id);
  $element.appendChild(document.createTextNode(text));
  $target.appendChild($element);

  return $element;
};
