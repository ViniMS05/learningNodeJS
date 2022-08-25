const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido?",
  "E o que eu poderia fazer para melhorar?",
  "O que me deixou feliz?",
  "Quantas pessoas ajudei hoje?",
];

const ask = (index = 0) => {
  process.stdout.write("\n\n" + questions[index] + " > ");
};

ask();

const answers = [];

process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  console.log(
    `
        Interessante Vini!
        
        O que você aprendeu hoje foi: 
        ${answers[0]}

        O que deixou você aborrecido foi: 
        ${answers[1]}

        O que você pode melhorar:
        ${answers[2]}

        O que te deixou feliz hoje foi:
        ${answers[3]}

        Você ajudou ${answers[4]} pessoa(s) hoje!!
        
        Volte amãnha para mais!!:)
        `
  );
});
