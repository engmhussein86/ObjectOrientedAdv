console.log("running ..");


const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {  // Adding a companion for Leo
          name: "Frank",
          type: "Flea",
          belongings: ["small hat", "sunglasses"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
    }

    console.log(adventurer.inventory[0]);

    adventurer.inventory.forEach(element => {
        console.log(element);
    });

    adventurer.roll();
    adventurer.roll(1);

    class Character {
        static MAX_HEALTH  = 100;


        constructor (name) {
          this.name = name;
          this.health = Character.MAX_HEALTH;
          this.inventory = [];
        }

        roll(mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`);
          }


      }


//       const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// robin.roll(1);


class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];
    constructor (name, role) {
      super(name);
      if (!Adventurer.ROLES.includes(role)) {
        throw new Error(`Invalid role '${role}' for adventurer.`);
      }
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }


  class Companion  extends Character {
    constructor (name, type) {
      super(name);
      // Adventurers have specialized roles.
      this.type = type;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

  const robin = new Adventurer("Robin","Fighter");
//   robin.inventory = ["sword", "potion", "artifact"];
  robin.companion = new Companion("Leo","Cat");
  robin.companion.companion = new Companion("Frank","Flea");
  robin.companion.companion.inventory = ["small hat", "sunglasses"];

  console.log(robin);

  

