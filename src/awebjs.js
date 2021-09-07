/*
awebjs.js

AwebJS Entry Point.
Copyright (c) Copy & Entertainmasters 2021
Some components are provided by Entertainmasters.
All Rights Reserved.
*/

import { countgrapth } from "./comps/countgraph.js"
import AWebJSDOM from "./awebjs-dom/awebjsdom.js";

export default class AWebJS {
    constructor(){}

    AwebJSDOM = new AWebJSDOM();

     DebugLOG(str) { console.info("AWebJS Debug: " + str) }
     numberGraph(speed, elem) { countgrapth(speed, elem) }
}
