function  greer(name) {
    return `hello , ${name}!`;
}
module.exports = greer;
if(require.main === module){
    console.log(greer("word"));
}