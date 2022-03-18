import {useState} from 'react'
import{
    Wrapper,
    Title,
    Email,
    Name,
    Password1,
    Password2,
    Phonewrapper,
    Phone1,
    Phone2,
    Phone3,
    Tokenwrapper,
    Token,
    Tokenbutton,
    Tokentimer,
    Timerbutton,
    Locationwrapper,
    Location,
    Genderwrapper,
    Gender,
    Woman,
    Man,
    Area,
    Footer,
    Signupbutton,
    Line,
    Error

} from '../../../styles/style'

export default function SignUpStatePage(){
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")

    const [password1, setPassword1] = useState("")
    const [password1Error, setPassword1Error] = useState("")

    const [password2, setPassword2] = useState("")
    const [password2Error, setPassword2Error] = useState("")

    //----------------------------------------------
    
    function onChangeEmail(event){
        setEmail(event.target.value)
    }
    function onChangeName(event){
        setName(event.target.value)
    }
    function onChangePassword1(event){
        setPassword1(event.target.value)
    }
    function onChangePassword2(event){
        setPassword2(event.target.value)
    }

    //-------------------------------------------------

    function onClickSignup(){
        if(email.includes("@") === false){
            setEmailError("이메일이 올바르지 않습니다")
        } 
        if(password1 !== password2){
            setPassword1Error("비밀번호가 일치하지 않습니다")
            setPassword2Error("비밀번호가 일치하지 않습니다")
        } if(name === ""){
            setNameError("이름을 입력하세요")
        }
        if(name!== "" && password1!=="" && password2!=="" && email!=="" ){
            alert("등록이 완료되었어요 !!")
        } 
    }

    return(
        <Wrapper>
            <Title>코드캠프 회원가입</Title>
            <Email  type="text" onChange={onChangeEmail} placeholer="이메일을 입력해 주세요." />
            <Error>{emailError}</Error>
            <Name  type="text" onChange={onChangeName} placeholer="이름을 입력해 주세요." />
            <Error>{nameError}</Error>
            <Password1  type="text" onChange={onChangePassword1} placeholer="비밀번호를 입력해 주세요." />
            <Error>{password1Error}</Error>
            <Password2  type="text" onChange={onChangePassword2} placeholer="비밀번호를 다시 입력해 주세요." />
            <Error>{password2Error}</Error>
            <Phonewrapper>
                <Phone1 type="text" /> -
                <Phone2 type="text" /> -
                <Phone3 type="text" />
            </Phonewrapper>
            <Tokenwrapper>
                <Token>000000</Token>
                <Tokenbutton>인증번호 전송</Tokenbutton>
            </Tokenwrapper>
            <Tokenwrapper>
                <Tokentimer>3:00</Tokentimer>
                <Timerbutton>인증 완료</Timerbutton>
            </Tokenwrapper>
            <Locationwrapper>
                <Location name="" id="">
                    <Area disabled selected>지역을 선택하세요.</Area>
                    <Area>서울</Area>
                    <Area>경기</Area>
                    <Area>인천</Area>
                </Location>
            </Locationwrapper>
            <Genderwrapper>
                <Gender>
                    <Woman type="radio" /> 여성
                </Gender>
                <Gender>
                    <Man type="radio" /> 남성
                </Gender>
            </Genderwrapper>
            {/* <Error>{genderError}</Error> */}
            <Line />
            <Footer>
                <Signupbutton onClick={onClickSignup}>가입하기</Signupbutton>
            </Footer>
        </Wrapper>
    )
}