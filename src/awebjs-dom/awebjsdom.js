/*
awebjsdom.js

AwebJSDOM Entry Point.
Copyright (c) Copy & Entertainmasters 2021
Some components are provided by Entertainmasters.
All Rights Reserved.
*/

const { Render, RenderElement } = require("./comps/render.js")
const { Visibility } = require("./comps/visibility.js")

class AWebJSDOM {
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

module.exports = AWebJSDOM;