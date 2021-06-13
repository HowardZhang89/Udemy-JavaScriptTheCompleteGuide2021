const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK'; // MODE_ATTACK = 0 (alternative)
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';  

const enteredValue = prompt('Maximum HP for You and Monster.', '100');

let chosenMaxLife = parseInt(enteredValue);
if(isNaN(chosenMaxLife) || chosenMaxLife <= 0){
  chosenMaxLife = 100;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset(){
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  // not resetting bonus life
  resetGame(chosenMaxLife);
}

function endRound(){
  let initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  
  if(currentPlayerHealth <=0 && hasBonusLife){
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);   // updates it in the HTML
    alert('Bonus Life Used!');
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0){
    alert('You Won!');
  } else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
    alert('You Lost!');
  } else if(currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
    alert('You Have a Draw!');
  }

  if(currentMonsterHealth <= 0 || currentPlayerHealth <= 0){
    reset();
  }
}

function attackMonster(mode){
  let maxDamage;
  if(mode === MODE_ATTACK){
    maxDamage = ATTACK_VALUE;
  }else{
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

function attackHandler(){
  attackMonster('ATTACK');
}

function strongAttackHandler(){
  attackMonster('STRONG ATTACK');
}

function healPlayerHandler(){
  let healValue;
  if(currentPlayerHealth > chosenMaxLife - HEAL_VALUE){
    alert("You can't heal above your maximum HP.");
    healValue = chosenMaxLife-currentPlayerHealth;
  }else{
    healValue = HEAL_VALUE
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler)


