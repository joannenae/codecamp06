import { type } from "os"

export default function TypescriptPage(){

    interface IProfile {
        name: string
        age: number
        school: string
        hobby?: string
    }
    //1. Pick 타입
    type Mytype1 = Pick<IProfile, "name" | "age">

    //2. Omit 타입
    type Mytype2 = Omit<IProfile, "school">

    //3. Partial 타입 - 다 물음표
    type Mytype3 = Partial<IProfile>

    //4, Required 타입 - hobby도 필수로 바뀜
    type Mytype4 = Required<IProfile>

    //5. Record 타입 - (Union 타입) > 합집합 개념
    type ZZZ = "aaa" | "qqq" | "rrr"
    // let apple: ZZZ
    // apple = "qqq" 

    type Mytype5 = Record<ZZZ, IProfile>

    
    // -------------- 추가(선업병합) - (type vs interface 차이) --------------

    interface IProfile {
        candy: number
    }

    let profile: IProfile
    profile = {
        candy: 3,
        age: 10,
        hobby: "요리"
    }





    return (<div>타입스크립트 연습하기 ~!</div>)
}