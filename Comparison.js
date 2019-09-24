'use strict'

const isGreater = (a, b) => {
return new Promise ((resolve, reject) => {
    if (a>b) {
        resolve(true)
    } else {
        reject (false)
    }
})
};

isGreater(10, 20)
.then (result => {
    console.log('greater')
})
.catch (result => {
    console.log('smaller')
});

