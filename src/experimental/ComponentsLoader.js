const { CSSLoader } = require("./cssloader")

/**
 * ```Jsx
 * <Header>Text</Header>
 * ```
 */
function RenderHeader(){
    const HeaderTag = document.getElementsByTagName('Header')[0];
    new CSSLoader(HeaderTag).KEKUI_FlatHeader();
}

/**
 * ```Jsx
 * <RoundButton>Text</RoundButton>
 * ```
 */
function RenderRoundButton(){
    const Button = document.getElementsByTagName('RoundButton')[0];
    const ActualButton = document.createElement('button');

    try {
        ActualButton.innerText = Button.innerText;
        Button.innerText = "";
    } catch (error) {
        // IGNORE!!
    }
    
    new CSSLoader(ActualButton).KEKUI_FlatRoundedButton();
    ActualButton.style.background = 'dodgerblue'
    Button?.append(ActualButton);
}

/**
 * Returns the Component with the Component Name
 * @param {Component} component 
 */
function getComponent(component){
    return document.getElementsByTagName(component)[0];
}

function CreateComponents(){
    RenderHeader();
    RenderRoundButton();
}

module.exports = { renderHeader, renderRoundButton, getComponent, CreateComponents, CSSLoader};