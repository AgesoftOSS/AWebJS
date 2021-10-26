# Awebjs
[![E](https://img.shields.io/badge/Version%3A-0.1-blue)](https://shields.io/)
[![E](https://img.shields.io/badge/License-MIT-green)](https://shields.io/)
[![E](https://img.shields.io/badge/Latest%20releace-0.1-brightgreen)](https://shields.io/)

AwebJS is a new technology for making sites and UIs using javascript

# Getting Started

Awebjs is constructed to be easy to use

first import your main javascript file *(Note: `type="module"` Is required else it throws a error)*

```html
<script type="module" src="index.js"></script>
```
on your script import the AWebJS class:
```js
import AWebJS from './awebjs/src/awebjs.js'
const AwebJS = new AWebJS()
```
and your ready to use **AWebJS**

# Examples

**AWebJSDOM Class Usage**
```js
function HelloWorld(text)
{
AwebJS.AwebJSDOM.render('p',`${text}`)
}
HelloWorld('Hello world!');
```

**Using AWebJS in Buttons** 

```js
function HelloWorld()
{
    AwebJS.AwebJSDOM.renderElement('h1','Hello World','hwdom')
}

const btn = document.getElementById('sample-button')
btn.addEventListener('click', HelloWorld)
```

# Contributing
I do welcome contributions if you find any bugs or spelling issues or want to make new features please make a pull request and i look forward.
