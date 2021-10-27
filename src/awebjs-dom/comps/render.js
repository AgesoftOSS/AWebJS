/*
render.js

Copyright (c) Copy 2021
All Rights Reserved.
*/

export default function Render(elem, code, idname, classname)
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