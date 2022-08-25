const timeOut = 1000;

const finished = () => console.log("Done!");

// clearTimeout(timer)
let interval = setInterval(finished, timeOut);

setTimeout(() => clearInterval(interval), 10000)
