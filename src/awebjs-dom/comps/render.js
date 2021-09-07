/*
render.js

Copyright (c) Copy 2021
All Rights Reserved.
*/

export default function Render(elem, code, idname)
{
    const body = document.body
    const Element = document.createElement(elem)

    Element.innerHTML = `${code}`

    if(idname === undefined)
    {
       Element.id;
    } else {
        Element.id = `${idname}`
    }

    body.append(Element)
}