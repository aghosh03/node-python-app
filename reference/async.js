function myFunc1(a,b){
    return a*b;
}

async function myFunc2(a,b){

    const x = await myFunc1(a,b)
    return a*b;
}

module.exports = { myFunc1 }