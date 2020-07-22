const db = require("../db/connection");
const Match = require("../models/match");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const matches = [
    {
      "typePrimary": "Tag Team",
      "typeSecondary": ["Main Event"],
      "participants": ["Hulk Hogan", "Mr. T", "Roddy Piper", "Paul Orndorff"],
      "show": "Wrestlemania 1",
      "title": ["N/A"],
      "outcome": "Hogan pins Orndorff",
      "date": "March 31, 1985"
    },
    {
      "typePrimary": "Singles",
      "typeSecondary": ["Main Event", "Steel Cage"],
      "participants": ["Hulk Hogan", "King Kong Bundy"],
      "show": "Wrestlemania 2",
      "title": ["WWF World Heavyweight Championship"],
      "outcome": "Hogan retains by escaping cage",
      "date": "April 7, 1986"
    },
    {
      "typePrimary": "Singles",
      "typeSecondary": ["Main Event"],
      "participants": ["Hulk Hogan", "Andre the Giant"],
      "show": "Wrestlemania 3",
      "title": ["WWF World Heavyweight Championship"],
      "outcome": "Hogan retains by pinfall",
      "date": "March 29, 1987"
    },
    {
      "typePrimary": "Singles",
      "typeSecondary": ["Main Event", "Tournament Final"],
      "participants": ["Randy Savage", "Ted DiBiase"],
      "show": "Wrestlemania 4",
      "title": ["WWF World Heavyweight Championship"],
      "outcome": "Savage wins by pinfall",
      "date": "March 27, 1988"
    },
    {
      "typePrimary": "Singles",
      "typeSecondary": ["Main Event"],
      "participants": ["Randy Savage", "Hulk Hogan"],
      "show": "Wrestlemania 5",
      "title": ["WWF World Heavyweight Championship"],
      "outcome": "Hulk Hogan wins by pinfall",
      "date": "April 2, 1989"
    },
    {
      "typePrimary": "Singles",
      "typeSecondary": ["Main Event", "Multiple Championship"],
      "participants": ["Ultimate Warrior", "Hulk Hogan"],
      "show": "Wrestlemania 6",
      "title": ["WWF World Heavyweight Championship", "WWF Intercontinental Championship"],
      "outcome": "Ultimate Warrior wins Heavyweight title but has to give up Intercontinental title due to WWF rules stating a competitor may only hold one title at a time",
      "date": "April 1, 1990"
    },
    {
      "typePrimary": "Singles",
      "typeSecondary": ["Main Event"],
      "participants": ["Sergeant Slaughter", "Hulk Hogan"],
      "show": "Wrestlemania 7",
      "title": ["WWF World Heavyweight Championship"],
      "outcome": "Hogan wins by pinfall",
      "date": "March 24, 1991"
    },
  ];

  await Match.insertMany(matches)
  console.log("Created matches");
};
const run = async () => {
  await main()
  db.close()
}
run()
