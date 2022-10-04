/** 플레이어의 기본 데미지 최댓값 */
const ATTACK_VALUE = 10;
/** 플레이어의 강한 데미지 최댓값 */
const STRONG_ATTACK_VALUE = 17;
/** 플레이어의 회복 최댓값 */
const HEAL_VALUE = 20;

/** 몬스터의 데미지 최댓값 */
const MONSTER_ATTACK_VALUE = 14;

/** 기본 체력 */
let chosenMaxLife = 100;

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

/** 매 라운드마다 실행될 함수 */
function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('You would be dead but the bonus life saved you');
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    // 게임의 승패조건
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw');
  }
}

/** 몬스터를 공격했을 때의 함수 */
function attackMonster(mode) {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'STORNG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

/** Attack 버튼을 클릭했을 때의 함수 */
function attackHandler() {
  attackMonster('ATTACK');
}

/** Storng Attack 버튼을 클릭했을 때의 함수 */
function strongAttackHandler() {
  attackMonster('STRONG_ATTACK');
}

/** HEAL 버튼을 클릭했을 때의 함수 */
function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than your max inital health. ");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(HEAL_VALUE);
  currentPlayerHealth += HEAL_VALUE;
  endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
