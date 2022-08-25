const { EventEmitter } = require("events");

const ev = new EventEmitter();

ev.on("saySomething", (m) => { //ev.once ouviria apenas uma unica vez o evento
  console.log(`Estou te ouvindo ${m}`);
});

ev.emit("saySomething", "Vini");
