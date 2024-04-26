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
        constructor (name) {
          this.name = name;
          this.health = 100;
          this.inventory = [];
        }

        roll(mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`);
          }


      }


      const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll(1);