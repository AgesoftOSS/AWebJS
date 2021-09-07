/*
awebjsdom.js

AwebJSDOM Entry Point.
Copyright (c) Copy & Entertainmasters 2021
Some components are provided by Entertainmasters.
All Rights Reserved.
*/

import { RenderElement } from "./comps/renderElement.js"
import Render from "./comps/render.js"

export default class AWebJSDOM {
    constructor(){}
    render(elem, str, id) { Render(elem, str, id) }
    renderElement(elem, content, id) { RenderElement(elem, content, id) }
}