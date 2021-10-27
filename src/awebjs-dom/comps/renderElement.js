/*
renderElement.js

Copyright (c) Copy 2021
All Rights Reserved.
*/

export function RenderElement(element, content, idname, classname)
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