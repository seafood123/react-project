// ES6 문법 배우기

// 기존 자바스크립트  왼쪽: 변수, 오른쪽 : 데이터 타입
var arr = [1,2,3,4];
var obj = {
    a   :   10,
    b   :   20,
    c   :   30
};

// es6 구조분해 ( 변수 선언 방식이 자유로워 진다. )
var {a,b,c} = obj;


// 기존 자바스크립트에서 속성값 꺼내기
var person = {
    name    :   "ParkDaeki",
    age     :   100,
    area    :   "Seoul"
};

var name = person.name;
var age  = person.age;
var area = person.area;

// es6 구조 분해 문법 적용하면...
var person = {
    name    :   "ParkDaeki",
    age     :   100,
    area    :   "Seoul"
};

var {name , age, area} = person;


// Template Literal
// 기존 자바스크립트의 문제점 (개행표시(\n) 필수)
var str = "Template literals are string literals allowing embedded expressions. \n" +
          "You can use multi-line strings and string interpo";


// es6의 백틱(`) 을 사용하면 타이핑 그대로 개행 된다.
const str = `Template lietrals
are dafdfadfadsfdfdafd
gkgkgkgk`;

// 문자열 중간에 변수 대입하기
const language = "javascript";
var expression = `I LOVE ${language}!`;


// Spread Operator
// 기존 자바스크립트 객체 복사 방식

var obj = {
    a   :   10,
    b   :   20
};

var newObj = {
    a   :   obj.a,
    b   :   obj.b
};

var arr = [1,2,3];
var newArr = [arr[0],arr[1],arr[2]];

// es6 문법의 객체 복사 방식
var obj = {
    a   :   10,
    b   :   20
};

var newObj = {...obj};

var arr = [1,2,3];
var newArr = [...arr];


// function 예약어 생략
// 기존 javascript

const person = {
    coding : function(){
        console.log("코딩");
    }
}

// es6 문법

const person = {
    coding(){
        console.log("코딩");
    }
};

// *** ARROW FUNCTION

// 1. 단순 자바스크립트 표현식
() => 10+20;

// 2. 함수 선언 방식
() => {
    print();
    log();
    return 1+2;
}

// 파라미터가 하나인 경우
const a = (num) => { return num + 100};
const b = num => num + 100;

// es6 문법의 map 객체
// 순서보장
const myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
myMap.set(2, 'two');
myMap.set(3, 'three');

const keyArray = [...myMap.keys()];	//[0, 1, 2, 3]
const valueArray = [...myMap.values()];	//["zero", "one", "two", "three"]