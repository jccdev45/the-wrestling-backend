const db = require("../db/connection");
const Wrestler = require("../models/wrestler");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const wrestlers = [
    {
      "name": "Terry Bollea",
      "dob": "August 11 1953",
      "nationality": "USA",
      "ringNames": ["Hulk Hogan", "Hollywood Hogan", "Hulk Machine", "Mr. America"],
      "promotions": ["WWF", "WCW", "WWE", "TNA"],
      "championships": [],
    },
    {
      "name": "Paul Orndorff",
      "dob": "October 29 1949",
      "nationality": "USA",
      "ringNames": ["Paul Orndorff"],
      "promotions": ["WWF", "WCW", "NWA"],
      "championships": [],
    },
    {
      "name": "Roderick Toombs",
      "dob": "April 17 1954",
      "nationality": "Canada",
      "ringNames": ["Roddy Piper"],
      "promotions": ["WWF", "WCW", "NWA"],
      "championships": [],
    },
    {
      "name": "Chris Alan Pallies",
      "dob": "November 7 1957",
      "nationality": "USA",
      "ringNames": ["Big Daddy Bundy", "Chris Canyon", "King Kong Bundy", "Man Mountain Canyon"],
      "promotions": [ "WWF", "WCCW", "NWA"],
      "championships": [],
    },
    {
      "name": "Andre Rene Roussimoff",
      "dob": "May 19 1946",
      "nationality": "France",
      "ringNames": ["Andre Roussimoff", "Andre The Giant", "Butcher Roussimoff", "Eiffel Tower", "Giant Machine", "Giant Roussimoff",
        "Jean Ferre", "Monster Roussimoff"],
      "promotions": [ "AJPW", "AWA", "NJPW", "NWA/BTA (Dallas)", "WCCW", "WWF", "WWWF"],
      "championships": [],
    },
    {
      "name": "Randall Mario Poffo",
      "dob": "Nov 15 1952",
      "nationality": "USA",
      "ringNames": ["Randy Savage"],
      "promotions": ["AJPW", "NJPW", "SMW", "TNA", "USWA", "WCW", "WWF", "WWF/SWS"],
      "championships": [],
    },
    {
      "name": "Theodore Marvin DiBiase Sr.",
      "dob": "January 18 1954",
      "nationality": "USA",
      "ringNames": ["Ted DiBiase"],
      "promotions": ["AJPW", "WCCW", "WWE", "WWF", "WWF/SWS"],
      "championships": [],
    },
    {
      "name": "James Brian Hellwig",
      "dob": "June 16 1959",
      "nationality": "USA",
      "ringNames": ["Dingo Warrior", "The Ultimate Warrior", "The Warrior"],
      "promotions": ["AJPW", "NWE", "WCW", "WCWA", "WWF", "WWF/SWS"],
      "championships": [],
    },
    {
      "name": "Robert Remus",
      "dob": "August 27 1948",
      "nationality": "USA",
      "ringNames": ["Sergeant Slaughter", "Sgt. Slaughter", "Super Destroyer Mark II"],
      "promotions": ["AWA", "NEW", "NJPW", "PWS", "WWE", "WWF", "WWF/SWS"],
      "championships": [],
    },
  ];

  await Wrestler.insertMany(wrestlers)
  console.log("Birthed wrestlers");
};
const run = async () => {
  await main()
  db.close()
}
run()
