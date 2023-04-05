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
    /**
     * 
     * @param {HTMLElement} elem 
     * @param {string} str 
     * @param {string} id 
     * @param {string} classname 
     */
    render(elem, str, id, classname) { Render(elem, str, id, classname) }

    /**
     * 
     * @param {HTMLElement} elem 
     * @param {string} content 
     * @param {string} id 
     * @param {string} classname 
     */
    renderElement(elem, content, id, classname) { RenderElement(elem, content, id, classname) }

    /**
     * 
     * @param {HTMLElement} elem 
     */
    visibility(elem) { Visibility(elem) }
}