const renderElem = ({ tagName, attrs, children }) => {
  const $el = document.createElement(tagName);

  for (const [k, v] of Object.entries(attrs)) {
    $el.setAttribute(k, v);
  }

  for (const child of children) {
    $el.appendChild(render(child));
  }

  return $el;
};

const render = (vNode) => {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  return renderElem(vNode);
};

export default render;
