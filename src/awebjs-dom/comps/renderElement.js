/*
renderElement.js

Copyright (c) Copy 2021
All Rights Reserved.
*/

export function RenderElement(element, content, idname)
{
    const body = document.body
    const elem = document.createElement(element)

    elem.innerText = `${content}`
    if(idname === undefined)
    {
        elem.id;
    } else {
        elem.id = `${idname}`
    }

    body.append(elem)
}