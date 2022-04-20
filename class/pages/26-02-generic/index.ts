import { useState } from "react";
// 1. 문자 타입
const getString = (args: string): string => {
  return args;
};
const result1 = getString("철수");

// 2. 숫자 타입
const getNumber = (args: number): number => {
  return args;
};
const result2 = getNumber(8);

// 3. any 타입
const getAny = (args: any) => {
  return args;
};
const resuslt3_1 = getAny2("철수");
const resuslt3_2 = getAny2(3);
const resuslt3_3 = getAny2(true);

// 4. any 타입2
const getAnys = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  return [arg3, arg2, arg1];
};
const result4 = getAnys("철수", "다람쥐초등학교", 8);

// 5. generic 타입 (들어온 타입을 그대로 사용) - 무엇이 들어오는지 모르지만 들어온 타입과 같은 내용을 사용함 , 무엇이 리턴 될지 예상 가능함
function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}
const aaa: string = "철수";
const bbb: number = 3;
const ccc: boolean = true;

const resuslt5_1 = getGeneric(aaa);
const resuslt5_2 = getGeneric(bbb);
const resuslt5_3 = getGeneric(ccc);

// 6. generic 타입2
// prettier-ignore
function getGenerics<MyType1, MyType2, MyType3>(arg1: MyType1,arg2: MyType2,arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}
const result6 = getGenerics("철수", "다람쥐초등학교", 8);

// 7. generic - 축약1
// prettier-ignore
function getGenericsT<T1, T2, T3>(arg1: T1,arg2: T2,arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}
const result7 = getGenericsT("철수", "다람쥐초등학교", 8);

// 8. generic - 축약2
// prettier-ignore
function getGenericsTUV<T, U, V>(arg1: T,arg2: U,arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
// prettier-ignore
const result8 = getGenericsTUV<string, string, number>("철수","다람쥐초등학교","철수");

// 9. useState 에서의 generic
// const [school, setSchool] = useState<string>("다람쥐초등학교");
// const apple: number = 3; // string은 number 타입에 들어갈 수 없음
// console.log(apple);

// 10. 화살표 함수에서의 generic
// const getGenericsTUV<T, U, V>(arg1: T,arg2: U,arg3: V): [V, U, T] =>{
//   return [arg3, arg2, arg1];
// }
