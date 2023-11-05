/*
render.js

Copyright (c) Copy 2021
All Rights Reserved.
*/

const Render = (elem, code, idname, classname) =>
{
    const body = document.body
    const Element = document.createElement(elem)

    Element.innerHTML = `${code}`

    if(idname === undefined || "") { Element.removeAttribute("id") }
    else {Element.id = `${idname}`}

    if(classname === undefined) { Element.removeAttribute("class") }
    else { Element.className = `${classname}`}
       

    body.append(Element)
}

const RenderElement = (element, content, idname, classname) =>
{
    const body = document.body
    const elem = document.createElement(element)

    elem.innerText = `${content}`
    if(idname === undefined) { elem.removeAttribute("id") }
    else {elem.id = `${idname}`}

    if(classname === undefined) { elem.removeAttribute("class") }
    else { elem.className = `${classname}`}

    body.append(elem)
}

module.exports = { Render, RenderElement };