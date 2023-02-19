# New Features

## The Root API (Legacy)

In React, we render our App component into the root element on the page. Here we are using a simple example similar to the one used in the original discussion.
<code>
import ReactDOM from 'react-dom';
import App from 'App';

const container = document.getElementById('root');

//Initial render
ReactDOM.render(<App name="Saeloun blog" />, container);

// During an update, React would access the root of the DOM element
ReactDOM.render(<App name="Saeloun testimonials" />, container);
</code>
This root API (now called “legacy root API”) has some issues when running updates. We need to continue passing the container into the render, even though it never changes.

To fix this issue and bring some improvements, React 18 introduced a new root API.

## The New Root API

The addition of the new root API fixes the issue of passing the container while running the updates. We no longer need to pass the container into the render.
<code>
import ReactDOM from "react-dom";
import App from 'App';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<App name="Saeloun blog" />);

// During an update, there is no need to pass the container again
root.render(<App name="Saeloun testimonials" />);
</code>

## What happens to render callback and hydrate functions?

The new root API happens to be the gateway for accessing new features of React 18 and adds out-of-the-box improvements.

It also changes the way render callback and hydrate function work.

=> Callback
In the legacy root API, we could pass a callback to render which would get called after the component is rendered or updated.
<code>
import ReactDOM from 'react-dom';
import App from './App';

const container = document.getElementById('root');

ReactDOM.render(<App name="Saeloun blog" />, container, function () {
// Called after inital render or any update.
console.log('Blog rendered');
});
</code>
The callback argument is completely removed in the new root API due to difficulties in timing it properly. It is recommended to use requestIdleCallback, setTimeout, or a ref callback on the root.

<code>
//App.js

export default function App({ name, callback }) {
return (
<div ref={callback}>
<h1>{name}</h1>
</div>
);
}

//index.js

import ReactDOM from "react-dom";
import App from 'App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App name="Saeloun blog" callback={() => console.log("Blog rendered")} />);
</code>

=> hydrate()
hydrate() is similar to render. It is used to hydrate a container whose HTML contents were rendered by ReactDOMServer. React preserves the markup and only attaches event handlers, giving a performant first-load experience.

Let’s check out the changes of hydrate before and after the new root API.

hydrate in the legacy root API -

<code>
import ReactDOM from 'react-dom';
import App from 'App';

const container = document.getElementById('root');

ReactDOM.hydrate(<App name="Saeloun blog" />, container);
In the new root API, hydrate is moved to hydrateRoot API as below -

import ReactDOM from 'react-dom';
import App from 'App';

const container = document.getElementById('root');

// Create and render a root with hydration.
const root = ReactDOM.hydrateRoot(container, <App name="Saeloun blog" />);
</code>
