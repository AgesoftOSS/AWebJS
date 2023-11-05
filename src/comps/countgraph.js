/*
countgraph.js

Copyright (c) Entertainmasters 2021
This component is provided by Entertainmasters
All Rights Reserved.
*/

function countgrapth(cspeed, elem) {
const counters = document.querySelectorAll(elem);
const speed = cspeed;

counters?.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + inc) 
            setTimeout(updateCount, 1)
        } else {
            count.innerText = target;
        }
    }
        updateCount()
});
}

module.exports = { countgrapth };