# javascript-study

> 자바스크립트 강의 시청 및 공부를 한 내용을 초급자 수준부터 다시 시작하여 끄적거리기 위한 공간

# JavaScript에 관하여

## JavaScript란 무엇인가?

1. JavaScript 는 런타임에 컴파일되는 동적 약형 프로그래밍 언어입니다. 이는 브라우저에서 웹페이지의 일부로 실행될 수도 있고 소위 호스트 환경이라 불리는 모든 머신에서 직접 실행될 수도 있습니다.

2. JavaScript 는 웹페이지를 보다 동적으로 만들기 위해 생성되었습니다. 이게 바로 JavaScript가 과거에 탄생한 이유라고 볼 수 있다. 브라우저 내에서 페이지의 내용을 직접 변경하기 위해 만들어졌고 최초엔 LiveScript라고 불렸지만 당시 Java의 인기로 인해 Java와 유사성을 꾀하여 JavaScript 로 이름이 변경 되었다. - 그러나 Java와 JavaScript는 완전히 별개로 공통점이 없다

## JavaScript는 어떻게 실행될까?

JavaScript 코드를 실행하려는 모든 환경에 내장된 중요한 한 가지가 있는데 그게 바로 JavaScript 엔진이다. 브라우저 내에 내장되어 있는데 엔진의 역할은 코드를 구문 분석하고 머신 코드가 보다 빨리 실행되기 때문에 머신 코드로 즉성 컴파일링을 합니다. 모든 과정이 이루어지고 코드가 실행되면 웹페이지에 효과가 나타난다.

오늘 날의 컴퓨터는 동시에 여러 작업을 수행할 수 있는 다중 스레드가 지원되지만 JavaScript의 코드 실행은 하나의 단일 스레드에서 실행이 됩니다.

## 동적 vs 약형 언어

JavaScript는 동적 해석형 언어이면서 약형 프로그래밍 언어이기도 합니다.

동적 해석형 언어란?

> 미리 컴파일 되지 않았음을 의미합니다.  
> JavaScript는 전송 중 컴파일링 되기 때문에 코드가 런타임에 평가되고 실행 된다. 이는 또한 코드가 런타임에서 변경될 수 있죠. 코드 내에서 다른 프로그래밍 언어에서는 허용되지 않는 일부 작업이 이루어질 수 있다.

약형 언어란?

> JavaScript는 텍스트, 숫자와 같은 데이터의 정의를 내리지 않아도 된다. 어떤 데이터를 저장하든 그대로 받아 들인다. 따라서 데이터 유형은 고정되어 있지 않으며 바꿀 수가 있다.

# 1. 기초 : 변수, 자료형, 연산, 함수

## 간단한 계산기 만들기

1. 변수와 상수
   지금에 이르러서는 var의 사용을 줄이고 let 과 const 사용을 하는 것이 더 안정적이다.  
   let - 변수로서 값을 바꿀 수 있고  
   const - 상수로서 값을 바꿀 수 없다.  
   개발자의 의도를 명확하게 드러나는 상수를 많이 쓰는게 이해가 쉽기 때문에 이쪽을 많이 쓰는 걸 추천한다고 한다.

2. 계산기 만들기

   - 초보자를 위해 아예 처음부터 가르치지만 나머지는 그냥 듣고 학습할 내용을 정리 하자면 중복되는 코드를 최소화 할 수 있도록 코드 리팩토링과 재사용을 하는 법을 중점으로 생각하여 학습

   - 주석의 중요성 강조 - 주석을 다는 연습을 잘하자!

   - 기본 연산자 - 축약 연산자

   - 배열, 객체 생성 연습

   - 데이터 타입들에 대해 학습

### 정리

> JavaScripit의 기초 - 변수, 연산자, 함수, 배열, 객체에 대해 다시 배워보는 시간을 가졌다.

# 2. 제어 구조

## 2-1. 계산기를 이용한 내용 확장

1. if문 사용
   간단한 계산기를 만든 곳에 코드들을 리팩토링하여 재사용이 가능한 코드로 바꾸었다.

2. 객체와 배열을 등식으로 비교할 때 주의점
   EX)
   ```
   const person1 = {name: 'Max'};
   const person2 = {name: 'Max'};
   person1 === person2
   = false
   const person3 = person1
   person === person1
   = true
   person1.name === person2.name
   = true
   ```

## 2-2. Monster Killer 애플리케이션 만들기

- 하드 코딩한 전역 값은 대문자로 처리하는 것이 일반적이다. 단어 구분은 \_ 로 처리한다. 관례이니 필수는 아님

- 중복되는 코드가 있다면 어떻게 리팩토링할 수 있는지 생각해보기

- 문자열 식별자를 직접 코드에 기입하기 보단 전역 상수로 두어 오타 및 다른 작업자들에게 한눈에 보이도록 표기 하는 것이 좋다

- 삼항 연산자의 사용으로 코드의 단축이 가능 하지만 쓸 수 있는 환경을 잘 고려하여 사용하는 것이 코드를 보기에 더 편하다.
