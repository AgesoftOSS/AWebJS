"use strict";

/**
 * Such a unnessesary and useless invention by me...
 * 
 * CSSLOADER Code your CSS like a Javascript PRO!
 */

/**
 * Directions...
 * *no explaining required.*
 */
class Directions {
    static CENTER = 'center'
    static LEFT = 'left'
    static RIGHT = 'right'
    static BOTTOM = 'bottom'
    static TOP = 'top'
}

const CLSettings = {
    border: 'none',
    borderRadius: 0,
    background: "",
    color: "",
    padding: 0,
    paddingLeft: 0,
    fontFamily: "serif",
    margin_left: 0,
    margin_right: 0,
    margin_bottom: 0,
    margin_top: 0,
    fontSize: 18,
    border: '',
    textAlign: new Directions()
}

/**
 * **CSSLoader** contains prefabs of controls you can use
 * 
 * How to load a style:
 * 
 * ```js
 * new CSSLoader(TestElement).StyleIt({
    background: "blue",
    padding: 10,
    fontFamily: 'sans-serif',
    color: 'red'
})
 * ```
 */
class CSSLoader {
    constructor(Element){
        this.#SelectedElement = Element;
    }
    
    #SelectedElement

    // KEKUI Styles...

    KEKUI_FlatRoundedButton(){
        
        new CSSLoader(this.#SelectedElement).StyleIt({
            border: 'none',
            borderRadius: 40,
            padding: 10,
            fontFamily: 'Arial, sans-serif',
        })

    }

    KEKUI_FlatHeader(){
        // We're using our CSSLoader **inside** CSSLoader bruh...
        new CSSLoader(this.#SelectedElement).StyleIt({
            padding: 20,
            paddingLeft: 60,
            background: "#132847",
            color: "white",
            fontFamily: 'Arial, sans-serif',
            fontSize: 24
        })
    }

    /**
     * 
     * @param {CLSettings} Settings 
     * @stability Unstable
     */
    StyleIt(Settings = CLSettings) {
        if(this.#SelectedElement !== typeof HTMLElement){
            const PV = Settings.padding * 3
            const S = this.#SelectedElement.style;
            if(Settings?.background) return S.background =  Settings?.background;
            
            S.textAlign =  Settings?.textAlign;
            S.color =  Settings?.color;
            S.border =  Settings?.border;
            S.borderRadius =  Settings?.borderRadius?.toString() + "px";
            S.fontFamily =  Settings?.fontFamily;
            S.padding =  Settings?.padding?.toString() + "px " + PV.toString() + "px";
            S.paddingLeft =  Settings?.paddingLeft?.toString() + "px";
            S.marginLeft =  Settings?.margin_left?.toString() + "px";
            S.marginRight =  Settings?.margin_right?.toString() + "px";
            S.marginTop =  Settings?.margin_top?.toString() + "px";
            S.marginBottom = Settings?.margin_bottom?.toString() + "px";
            S.fontSize = Settings?.fontSize?.toString() + "px";

        } else {
            throw new Error("CSSLoader(*here is your error*)")
        }
    }
}

module.exports = { CSSLoader, Directions };