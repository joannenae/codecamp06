import {useState} from 'react'
import{ 
    Wrapper, 
    Wrapperin,
    Header,
    Locationimg,
    Name
} from '../../../styles/style'

export default function FirstPage(){
    

    return(
        <Wrapper>
            <Wrapperin>
                <Header>
                    <Locationimg src="/location.svg" alt="" />
                    <Locationbox></Locationbox>
                    <Maintext>잇츠로드</Maintext>
                </Header>
                <Email  type="text" placeholer="이메일을 입력해 주세요." />
                <Name  type="text" placeholer="비밀번호를 입력해 주세요." />
                <Login>로그인</Login>
                <Search>
                    <Email>이메일 찾기</Email>
                    <Email>비밀번호 찾기</Email>
                    <Email>회원가입</Email>
                </Search>
                <Kakao>
                    <Kakaoimg src=""></Kakaoimg>
                    <Text>카카오톡으로 로그인</Text>
                </Kakao>
            </Wrapperin>
        </Wrapper>
    )
}