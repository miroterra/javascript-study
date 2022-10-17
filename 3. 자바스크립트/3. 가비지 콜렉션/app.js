const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

let person = { name: 'Max' };
// 이것은 객체이며 참조값이고 힙에 저장된다.
// 이 경우에 자바스크립트는 메모리에서 객체를 제거하지 않는다

person = null;
// 여기서 이 변수에 새로운 값을 할당하면 객체가 스트립트에서 더는 참조되지 않게 된다.
// 이 때 스크립트 어디에서든 {name: 'Max'} 이 주소를 어디에서도 사용하지 않는다고 감지, 제거한다.

function printMessage() {
  const value = messageInput.value;
  console.log(value || 'Clicked me!');
}

function addListener() {
  clickableBtn.addEventListener('click', printMessage);
}

addListenerBtn.addEventListener('click', addListener);
