## New Features

# Gradual Upgrade

As for most apps, upgrading all at once is still the best solution. However, for larger apps, the gradual update makes sure new code can be written in react17 without touching the legacy code.

# Implicit React Import

React uses a compiler like Babel or TypeScript to transform JSX code into regular JavaScript since most browsers don’t understand JSX out of the box. The React team worked with Babel to offer a new, rewritten version of the JSX transform with a couple benefits:
You can use JSX without importing React.
May slightly improve the bundle size.

This upgrade will not change the JSX syntax, so your old code will continue working but still if you want to remove unused React imports in our codebase. You can clean up by running a “codemod” script to remove them automatically:

<code>
cd your_project
npx react-codemod update-react-imports
</code>

# Event Handling

In React 17, React will no longer attach event handlers at the document level under the hood. Instead, it will attach them to the root DOM container into which your React tree is rendered.

In React 16 and earlier, React would do
<code>
document.addEventListener()
</code>
for most events. React 17 will call
<code>
rootNode.addEventListener()
</code>
under the hood instead.
This fixes numerous problems that were related to integrating React with non-React code.

# Browsers Compatibility

React17 comes with a few changes related to the event system. The basic behaviour has changes as following:

1. The onScroll event no longer bubbles.
2. The onBlur and onFocus events have now switched to using native focusin and focusout events internally, better matching React’s existing behavior and even providing more information.
3. The onClickCapture now makes use of actual browser capture phase listeners.

Although the switch from focus to focusin under the hood, for the onFocus event, it’s still the bubbling behavior. In React, onFocus event has always bubbled, and it continues to do so because it is a more useful default.

# No Synthetic Events

The old event pooling optimisation has been removed from React due to continued confusion and because it doesn’t improve the performance. Earlier, you have to call e.persist() to properly use the event, or read the property you needed earlier. React reused the event objects between different events for performance in old browsers, and set all event fields to null in between them. Now that is history!

<code>
function handleChange(e) {
 setData(data => ({
 …data,
 // Crashes in React16 and below but works in React17
 text: e.target.value
 }));
}
</code>

# Effect cleanup timing

React’s useEffect hook accepts a cleanup function as a return value, which runs when the component unmounts to help prevent memory leaks. Here is some sample React code demonstrating a useEffect hook with a cleanup function:
<code>
useEffect(() => {
event.subscribe()
return cleanup = () => {
event.unsubscribe()
}
})
</code>
Earlier, the cleanup function would run synchronously once the component was supposed to be unmounted. This could cause issues if the cleanup function started an animation or API request, but the component was unmounted before it was finished. In React 17, the cleanup would run asynchronously, which solves this problem and results in better performance.

# Handling undefined errors

In React v16, functions that return undefined always throw an error mostly because of how easy it is to return undefined unintentionally:
<code>
function Button() {
// Missing explicit return causes React to surfaces this as an //undefined error instead of ignoring it
<button />;
}
</code>
Initially, the behavior was only exclusive to the class and function components but with React17, the forwardRef and memo components have also been added, making their behavior consistent with regular class and function components. Also, for instances, in which you would render nothing intentionally, null will be returned instead.

# Native Component Stacks

React 16 did print component stacks when you had an error but they were inferior to the native JavaScript stacks. But in React 17, the component stacks are generated using a totally different mechanism that stitches them together from the regular native JavaScript stacks. This lets us get the fully symbolicated React component stack traces in a production environment.
