import createElement from './functions/createElement.js';
import render from './functions/render.js';
import mount from './functions/mount.js';

const React = {
  createElement,
  render,
  mount,
};

const vApp = React.createElement('div', {
  attrs: {
    style: 'background-color: red',
  },
  children: [
    React.createElement('span', {
      attrs: {},
      children: 'Hello world',
    }),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', {
      attrs: {},
      children: 'Text content',
    }),
  ],
});

console.log(vApp);

const app = React.render(vApp);

React.mount(app, document.getElementById('app'));
