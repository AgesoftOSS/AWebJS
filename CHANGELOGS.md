# Changelogs v0.2

# New Feature - CSSLoader

If you hate CSS or you just want to manage your styles with Javascript then you can use our `CSSLoader` class

**How to use the class correctly:**

CSSLoader is not meant to be declared and should be used like this:

```diff
- const ClassDeclaration = new CSSLoader(Element)
+ new CSSLoader(Element)
```

CSSLoader has a simple `StyleIt()` Method which styles your element

**Example**
```js
import CSSLoader, { Directions }  from "./src/experimental/cssloader.js";

const newElement = document.createElement('p')
newElement.innerText = "Hello World";

new CSSLoader(newElement).StyleIt({
    textAlign: Directions.CENTER,
    fontFamily: 'sans-serif',
    margin_top: 30
})

document.body.append(newElement)
```

**Load any prefabs**

```js
// type .KEKUI_ and the suggestions are giving all prefabs.
new CSSLoader(TestElement).KEKUI_FlatHeader();
```

<h2>CSSLOADER IS A EXPERIMENTAL FEATURE!</h2><br>

# New Feature - AWebJSCrypto KCORD

KCORD (**K**eyboard **Cord**ination Encryption) is a encryption algorithm which turns your text into a KCORD String.

```js
RawText: "Hello World"
Output: "6a3q9a9a9q 2q9q4q9a3a"
```

If you study your keyboard you'll understand it easily

**Note: KCORD Only Supports 0-9 and A-Z No other characters**

**Examples:**

```js
import { Crypto } from "./src/experimental/crypto.js";

// Encrypt String
const KCS = Crypto.Encrypt_KCORD("Hello World")
console.log(KCS)

// Decrypt String
const DECRYPTED = Crypto.Decrypt_KCORD(KCS)
console.log(DECRYPTED)
```

# Components like React but Low-Budget

```js
import CreateComponents, { getComponent } from "./src/experimental/ComponentsLoader.js";

const Comp = getComponent('Header')
CreateComponents();
```

**HTML:**
```jsx
<Header>Text</Header>
<RoundButton>Text</RoundButton>
```

# Changed

- **Typed Parameters** without Typescript
- **Optionals**
- `DebugLOG()` has been removed.
- AwebJSDOM has been removed from the AWebJS Class