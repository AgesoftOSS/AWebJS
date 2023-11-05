# AWebJS

AwebJS is a javascript technology for making sites and UIs using javascript

# Getting Started

Awebjs is constructed to be easy to use

```bash
$ npm i awebjs
```

**Using AWebJS in Buttons** 

```js
const HelloWorld = () =>
{
    AwebJS.AwebJSDOM.renderElement('h1','Hello World','hwdom')
}

const btn = document.getElementById('sample-button')
btn.addEventListener('click', HelloWorld)
```

# Contributing
we do welcome contributions if you find any bugs or spelling issues or want to make new features please make a pull request and we look forward.
