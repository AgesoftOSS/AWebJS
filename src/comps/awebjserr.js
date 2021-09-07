/*
awebjserr.js

Copyright (c) Copy 2021
All Rights Reserved.
*/

export function awebJSWarn(str) {
    console.warn("AWebJS Warning: " + str)
}

export function awebJSError(str) {
    throw new Error("AWebJS Error: " + str)
}