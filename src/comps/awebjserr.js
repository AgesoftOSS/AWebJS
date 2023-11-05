/*
awebjserr.js

Copyright (c) Copy 2021
All Rights Reserved.
*/

function awebJSWarn(str) {
    console.warn("AWebJS Warning: " + str)
}

function awebJSError(str) {
    throw new Error("AWebJS Error: " + str)
}

module.exports = { awebJSError, awebJSWarn };