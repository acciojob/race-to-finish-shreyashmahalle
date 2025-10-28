window.promises = [];

for (let i = 0; i < 5; i++) {
  const time = Math.floor(Math.random() * 5) + 1; 

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved in ${time} seconds`);
    }, time * 1000);
  });

  window.promises.push(promise);
}

Promise.any(window.promises).then((result) => {
  document.getElementById("output").innerText = result;
});