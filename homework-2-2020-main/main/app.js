function addTokens(input, tokens){
    if(typeof(input!=='string')) throw new Error("Input should be a string")
    if(input.length<=6) throw new Error("Input should have at leat 6 characters");
    }

const app = {
    addTokens: addTokens
}

module.exports = app;