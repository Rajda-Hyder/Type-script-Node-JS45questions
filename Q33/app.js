"use strict";
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
//  Most ordinal numbers end in th, except 1, 2, and 3.
let Ono = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let oneNum of Ono) {
    let OrdinalEnd;
    if (oneNum === 1) {
        OrdinalEnd = "st";
    }
    else if (oneNum === 2) {
        OrdinalEnd = "nd";
    }
    else if (oneNum === 3) {
        OrdinalEnd = "rd";
    }
    else {
        OrdinalEnd = "th";
    }
    console.log(`${oneNum}${OrdinalEnd}`);
}
;
