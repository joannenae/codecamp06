import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(){
    const router = useRouter()
    const[isActive, setIsActive] = useState(false)
    const[createBoard] = useMutation(CREATE_BOARD)

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const [nameError, setNameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [contentError, setContentError] = useState("")

    const onChangeName = (event) => {
        setName(event.target.value)
        if(event.target.value !== ""){
            setNameError("");
        }

        if (event.target.value !== "" && password !== "" && title !== "" && content !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
        if(event.target.value !== ""){
            setPasswordError("");
        }

        if (name !== "" && event.target.value !== "" && title !== "" && content !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if(event.target.value !== ""){
            setTitleError("");
        }

        if (name !== "" && password !== "" && event.target.value !== "" && content !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }
    const onChangeContent = (event) => {
        setContent(event.target.value)
        if(event.target.value !== ""){
            setContentError("");
        }

        if (name !== "" && password !== "" && title !== "" && event.target.value !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }


    const onClickSignUp = async () => {
        if (name === "") {
            setNameError("작성자를 입력해주세요.");
        }
        if (password === "") {
            setPasswordError("비밀번호를 입력해주세요.");
        }
        if (title === "") {
            setTitleError("제목을 입력해주세요.");
        }
        if (content === "") {
            setContentError("내용을 입력해주세요.");
        }
        if (name !== "" && password !== "" && title !== "" && content !== "") {
            try {
                const result = await createBoard({
                    variables: {
                    createBoardInput: {
                        writer: name,
                        password: password,
                        title: title,
                        contents: content,
                        },
                    },
                });
                console.log(result);
                alert("게시물 등록에 성공하였습니다!");
                alert("상세페이지로 가볼까요 ?");
                router.push(`/boards/${result.data.createBoard._id}`);
            } catch (error) {
                console.log(error.message);
            }
        }
    };

    return (
        <BoardWriteUI
            isActive={isActive}
            nameError={nameError}
            passwordError={passwordError}
            titleError={titleError}
            contentError={contentError}
            onChangeName={onChangeName}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContent={onChangeContent}
            onClickSignUp={onClickSignUp}
        />
    );
}