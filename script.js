window.promises = [];
for(let i = 0; i < 5; i++){
const time = Math.floor(Math.random() *5) +1;
const promise = new promise((resolve) => {
setTimeOut(() => {
resolve(`promise ${i + 1}resolved in ${time} seconds`);
},time * 1000);
});
	window.promises.push(promise);
}
promise.any(window.promise).then(result) =>{
document.getElementById("output").innerText = result;
});
// Do not change the code above this
// add your promises to the array `promises`
