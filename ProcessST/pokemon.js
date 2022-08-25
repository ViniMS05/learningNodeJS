const questions = [
  "Ola, qual é seu nome?",
  "Se pudesse escolher um pokemon pra ter, qual seria?",
  "Qual seria o apelido deste pokemon?",
];

const ask = (index = 0) => {
  process.stdout.write("\n\n" + questions[index] + " > ");
};

ask();

const datas = [];
process.stdin.on("data", (data) => {
  datas.push(data.toString().trim());

  if (datas.length < questions.length) {
    ask(datas.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  console.log(
    `
    Hehe! Que legal ${datas[0]}

    Bom, ja que é assim, você acaba de ganhar um ${datas[1]},
    seu apelido foi definido como ${datas[2]}

    Parabens pelo seu novo pokemon!!
    `
  );
});
