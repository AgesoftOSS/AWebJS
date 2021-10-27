/*
awebjsdom.js

AwebJSDOM Entry Point.
Copyright (c) Copy & Entertainmasters 2021
Some components are provided by Entertainmasters.
All Rights Reserved.
*/

import { RenderElement } from "./comps/renderElement.js"
import Render from "./comps/render.js"
import { Visibility } from "./comps/visibility.js"

export default class AWebJSDOM {
    constructor(){}
    render(elem, str, id, classname) { Render(elem, str, id, classname) }
    renderElement(elem, content, id, classname) { RenderElement(elem, content, id, classname) }
    visibility(elem) { Visibility(elem) }
}