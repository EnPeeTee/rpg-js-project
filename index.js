import dataChar from "./data.js" ;
import Character from "./Character.js";

let monstersArr = ["orc", "demon", "goblin"];
let isWaiting = false

function getNewMonster() { 
    const nextMonsterData = dataChar[monstersArr.shift()];
    return nextMonsterData ? new Character(nextMonsterData) : {};
};

document.getElementById("attack-button").addEventListener( "click", () => attack() );

function attack() {
    if ( !isWaiting ) {
        wizard.setDiceHTML();
        monster.setDiceHTML();
        wizard.takeDamage(monster.currentDiceScore);
        monster.takeDamage(wizard.currentDiceScore);
        render();
        
        if ( wizard.dead ) {
            endgame();
        } 
        else if ( monster.dead ) {
            isWaiting = true;
            if ( monstersArr.length > 0 ) {
                monster = getNewMonster();
                setTimeout( () => {
                    render()
                    isWaiting = false;
                }, 1500 );
            }
            else {
                endgame()
            };
        };
    };
};

function endgame() {
    const endMessage = wizard.dead && monster.dead ? "No Victors - All Creatures are dead!"
        : wizard.dead ? "The Wizard is Dead!" 
        : "The Monsters are Defeated!!";
    const endEmoji = wizard.health > 0 ? "🔮" : "☠️";

    setTimeout( () => {document.body.innerHTML = 
        `<div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            
            <p class="end-emoji">${endEmoji}</p>
        </div>`}, 1500
    ); 
};

const wizard = new Character(dataChar.hero);
let monster = getNewMonster()

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHTML();
    document.getElementById('monster').innerHTML = monster.getCharacterHTML();
};

render();
