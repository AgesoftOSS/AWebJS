/*
visibility.js

Copyright (c) Copy 2021
All Rights Reserved.
*/

export function Visibility(elem)
{
    const element = document.getElementById(elem)
    if (element.style.display === "none") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
}