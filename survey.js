const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const answers = {};

rl.question("What's your name? Nicknames are also acceptable :)", name => {
  console.log("Your answer:", name);
  answers.name = name;
  rl.question("What's an activity you like doing?", activity => {
    console.log("Your answer:", activity);
    answers.activity = activity;
    rl.question("What do you listen to while doing that?", tunes => {
      console.log("Your answer:", tunes);
      answers.tunes = tunes;
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)",
        favMeal => {
          console.log("Your answer:", favMeal);
          answers.favMeal = favMeal;
          rl.question(
            "What's your favourite thing to eat for that meal?",
            favFood => {
              console.log("Your answer:", favFood);
              answers.favFood = favFood;
              rl.question("Which sport is your absolute favourite?", sport => {
                console.log("Your answer:", sport);
                answers.sport = sport;
                rl.question(
                  "What is your superpower? In a few words, tell us what you are amazing at!",
                  superpower => {
                    console.log("Your answer:", superpower);
                    answers.superpower = superpower;

                    // print profile
                    console.log(
                      `${answers.name} likes to listen to ${answers.tunes} while ${answers.activity}, eating ${answers.favFood} for ${answers.favMeal}, thinks ${answers.sport} is the best sport, and is fantastic at ${answers.superpower}!`
                    );

                    rl.close();
                  }
                );
              });
            }
          );
        }
      );
    });
  });
});
