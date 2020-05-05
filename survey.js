const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let summary = ''

rl.question('What\'s your name? ', (answer) => {
  const name = answer;
  rl.question("What are some of your hobbies? ", (answer) => {
    const hobbies = answer;
    rl.question("What do you listen to while doing your hobbies? ", (answer) => {
      const music = answer;
      rl.question("Favorite meal? ", (answer) => {
        const faveFood = answer;
        rl.question("Favorite sport? ", (answer) => {
          const faveSport = answer;
          rl.question("Superpower ", (answer) => {
            const superpower = answer;
              console.log(`${name} is an awesome person. ${name}'s hobbies include ${hobbies}. While doing these hobbies, ${name} loves to listen to ${music}. When ${name} eats, ${name} love to eat ${faveFood}. As for sports, ${name} loves to play ${faveSport}. It's never fair though, because ${name} has ${superpower} as a superpower.`);
            rl.close();
          })
        })
      })
    })
  })
});