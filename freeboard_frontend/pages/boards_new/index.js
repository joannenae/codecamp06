import {useState} from 'react'
import { useMutation , gql } from '@apollo/client'

import{Wr , WrIn , Header , Writer , TopBox , Text , BoxIn , Title , Name ,PassWord , Content,Address,Search,
        TextIn , ImageBox , BoxOne, TextChoose , Choose , ChooseBox, SignUp , Cancle , Edit , Error ,
} from '../../styles/index'

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput:CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
            writer
            title
        }
    }
`

export default function SignUpStatePage(){
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [address, setAddress] = useState("")

    const [nameError, setNameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [contentError, setContentError] = useState("")
    const [addressError, setAddressError] = useState("")

    const [data , setData] = useState("")
    const[callApi] = useMutation(CREATE_BOARD)

    const onClickSignUp = async () => {

        if(!name){
            setNameError("이름을 입력하세요")
        } else {
            name == " "
        } 

        if(!password){
            setPasswordError("비밀번호를 입력하세요")
        } else {
            password == " "
        } 

        if(!title){
            setTitleError("제목을 입력하세요")
        } else {
            title == " "
        } 

        if(!content){
            setContentError("내용을 입력하세요")
        } else {
            content == " "
        } 

        if(!address){
            setAddressError("주소를 입력하세요")
        } else {
            address == " "
        } 
        
        if(name && password && title && content && address){
            alert("게시물 등록이 완료되었습니다!")
        }

        const result = await callApi({
            variables: { createBoardInput:{
                    writer:name, 
                    password:password, 
                    title:title , 
                    contents: content
                }}
            })

        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)
    }
    // 이벤트 핸들러 함수---------------------------------

    function onChangeName(event){
        setName(event.target.value)
        if(event.target.value !== ""){
            setNameError("");
        }
    }
    function onChangePassword(event){
        setPassword(event.target.value)
        if(event.target.value !== ""){
            setPasswordError("");
        }
    }
    function onChangeTitle(event){
        setTitle(event.target.value)
        if(event.target.value !== ""){
            setTitleError("");
        }
    }
    function onChangeContent(event){
        setContent(event.target.value)
        if(event.target.value !== ""){
            setContentError("");
        }
    }
    function onChangeAddress(event){
        setAddress(event.target.value)
        if(event.target.value !== ""){
            setAddressError("");
        }
    }

    return(
        <Wr>
            <WrIn>
                <Header>게시물 등록</Header>
                <TopBox>
                    <BoxIn>
                        <Text>작성자</Text>
                        <Name type="text" onChange={onChangeName}  placeholder='이름을 입력해 주세요.' />
                        <Error>{nameError}</Error>
                    </BoxIn>
                    <BoxIn>
                        <Text>비밀번호</Text>
                        <PassWord type="text" onChange={onChangePassword}  placeholder='비밀번호를 입력해 주세요.' />
                        <Error>{passwordError}</Error>
                    </BoxIn>
                </TopBox>
                <Title>
                    <Text>제목</Text>
                    <Writer type="text" onChange={onChangeTitle}  placeholder='제목을 입력해주세요.' />
                    <Error>{titleError}</Error>
                </Title>
                <Title>
                    <Text>내용</Text>
                    <Content type="text" onChange={onChangeContent}  placeholder='내용을 입력해주세요.' />
                    <Error>{contentError}</Error>
                </Title>
                <BoxIn>
                    <Text>주소</Text>
                    <TextIn>
                        <Address type="text" onChange={onChangeAddress}  placeholder="07250"></Address>
                        <Search type="button">우편번호 검색</Search>
                    </TextIn>
                </BoxIn>
                <Error>{addressError}</Error>
                <Writer type="text" />
                <Writer type="text" />
                <Text>제목</Text>
                <Writer type="text" onChange={onChangeTitle}  placeholder='제목을 입력해주세요.' />
                <Error>{titleError}</Error>
                <Text>사진첨부</Text>
                <ImageBox>
                    <BoxOne></BoxOne>
                    <BoxOne></BoxOne>
                    <BoxOne></BoxOne>
                </ImageBox>
                <Text>메인설정</Text>
                <ChooseBox>
                    <Choose type="radio" />
                    <TextChoose>유튜브</TextChoose>
                    <Choose type="radio" />
                    <TextChoose>사진</TextChoose>
                </ChooseBox>
                <SignUp>
                    <Cancle>취소하기</Cancle>
                    <Edit onClick={onClickSignUp}>등록하기</Edit>
                </SignUp>
            </WrIn>
        </Wr>
    )
}