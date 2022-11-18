import { getDiceRollArr, getDicePlaceholderHTML, getPercentage } from "./utils.js";


// function Character(data) {
//     Object.assign( this, data );
    
//     this.maxHealth = this.health;
//     this.diceHTML = getDicePlaceholderHTML(this.diceCount);

//     this.takeDamage = function(attackScoreArr) {
//         const totalAttackScore = attackScoreArr.reduce( ( total, damageNumber ) => total + damageNumber);
//         this.health -= totalAttackScore;
//         if ( this.health <= 0 ) {
//             this.dead = true
//             this.health = 0
//         };
//     };
    
//     this.getHealthBarHTML = function() {
//         const percent = getPercentage( this.health, this.maxHealth );
//         return `<div class="health-bar-outer">
//                     <div class="health-bar-inner ${percent <= 25 ? "danger" : ""}" 
//                         style="width: ${percent}%;">
//                     </div>
//                 </div>`;
//     };

//     this.setDiceHTML = function() {
//         this.currentDiceScore = getDiceRollArr(this.diceCount);
//         this.diceHTML = this.currentDiceScore.map( num => `<div class="dice">${num}</div>`).join(``);
//     };

//     this.getCharacterHTML = function() {
//         const { name, avatar, health, diceCount, diceHTML } = this;
//         const healthBar = this.getHealthBarHTML()

//         return `
//             <div class="character-card">
//                 <h4 class="name"> ${name} </h4>
//                 <img class="avatar" src="${avatar}"/>
//                 <p class="health">health: <b> ${health} </b></p>
//                 ${healthBar}
//                 <div class="dice-container">
//                     ${diceHTML}
//                 </div>
//             </div>   
//         `;
//     };
// };

class Character {
    constructor(data) {
        Object.assign( this, data );
        this.maxHealth = this.health;
        this.diceHTML = getDicePlaceholderHTML(this.diceCount);
    }
    

    takeDamage(attackScoreArr) {
        const totalAttackScore = attackScoreArr.reduce( ( total, damageNumber ) => total + damageNumber);
        this.health -= totalAttackScore;
        if ( this.health <= 0 ) {
            this.dead = true
            this.health = 0
        };
    };
    
    getHealthBarHTML() {
        const percent = getPercentage( this.health, this.maxHealth );
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent <= 25 ? "danger" : ""}" 
                        style="width: ${percent}%;">
                    </div>
                </div>`;
    };

    setDiceHTML() {
        this.currentDiceScore = getDiceRollArr(this.diceCount);
        this.diceHTML = this.currentDiceScore.map( num => `<div class="dice">${num}</div>`).join(``);
    };

    getCharacterHTML() {
        const { name, avatar, health, diceCount, diceHTML } = this;
        const healthBar = this.getHealthBarHTML()

        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}"/>
                <p class="health">health: <b> ${health} </b></p>
                ${healthBar}
                <div class="dice-container">
                    ${diceHTML}
                </div>
            </div>   
        `;
    };
};

export default Character