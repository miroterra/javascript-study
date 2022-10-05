/** 플레이어의 기본 데미지 최댓값 */
const ATTACK_VALUE = 10;
/** 플레이어의 강한 데미지 최댓값 */
const STRONG_ATTACK_VALUE = 17;
/** 플레이어의 회복 최댓값 */
const HEAL_VALUE = 20;

// 전역 함수
const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

/** 체력 설정 */
const enteredValue = prompt('Maximum life for you and the monster.', '100');

/** 몬스터의 데미지 최댓값 */
const MONSTER_ATTACK_VALUE = 14;

/** 기본 체력 */
let chosenMaxLife = parseInt(enteredValue);

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

let hasBonusLife = true;

/** 로그를 담을 빈 배열 */
let battleLog = [];

// 사용자가 기본 체력을 숫자가 아니거나 음수 등을 설정한 경우
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

adjustHealthBars(chosenMaxLife);

/** 여러 이벤트를 로그에 기록할 함수 */
function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };
  if (ev === LOG_EVENT_PLAYER_ATTACK) {
    logEntry.target = 'MONSTER';
  } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logEntry = {
      event: ev,
      value: val,
      target: 'MONSTER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
    logEntry = {
      event: ev,
      value: val,
      target: 'PLAYER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  } else if (ev === LOG_EVENT_PLAYER_HEAL) {
    logEntry = {
      event: ev,
      value: val,
      target: 'PLAYER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  } else if (ev === LOG_EVENT_GAME_OVER) {
    logEntry = {
      event: ev,
      value: val,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  }
  battleLog.push(logEntry);
}

/** 게임 재 실행 */
function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

/** 매 라운드마다 실행될 함수 */
function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);

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
    writeToLog(LOG_EVENT_MONSTER_ATTACK, 'PLAYER WON', currentMonsterHealth, currentPlayerHealth);
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
    writeToLog(LOG_EVENT_MONSTER_ATTACK, 'MONSTER WON', currentMonsterHealth, currentPlayerHealth);
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw');
    writeToLog(LOG_EVENT_MONSTER_ATTACK, 'A DRAW', currentMonsterHealth, currentPlayerHealth);
    reset();
  }
}

/** 몬스터를 공격했을 때의 함수 */
function attackMonster(mode) {
  let maxDamage;
  let logEvent;
  if (mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
    logEvent = LOG_EVENT_PLAYER_ATTACK;
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
    logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, dagame, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

/** Attack 버튼을 클릭했을 때의 함수 */
function attackHandler() {
  attackMonster(MODE_ATTACK);
}

/** Storng Attack 버튼을 클릭했을 때의 함수 */
function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
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
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function printLogHandler() {}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
