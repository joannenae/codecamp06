import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wr>
      <S.WrIn>
        <S.Header>{props.isEdit ? "게시물 수정" : "게시물 등록"}</S.Header>
        <S.TopBox>
          <S.BoxIn>
            <S.Text>작성자</S.Text>
            <S.Name
              type="text"
              onChange={props.onChangeName}
              defaultValue={props.data?.fetchBoard.writer}
              placeholder="이름을 입력해 주세요."
            />
            <S.Error>{props.nameError}</S.Error>
          </S.BoxIn>
          <S.BoxIn>
            <S.Text>비밀번호</S.Text>
            <S.PassWord
              type="text"
              onChange={props.onChangePassword}
              placeholder="비밀번호를 입력해 주세요."
            />
            <S.Error>{props.passwordError}</S.Error>
          </S.BoxIn>
        </S.TopBox>
        <S.Title>
          <S.Text>제목</S.Text>
          <S.Writer
            type="text"
            onChange={props.onChangeTitle}
            placeholder="제목을 입력해주세요."
          />
          <S.Error>{props.titleError}</S.Error>
        </S.Title>
        <S.Title>
          <S.Text>내용</S.Text>
          <S.Content
            type="text"
            onChange={props.onChangeContent}
            placeholder="내용을 입력해주세요."
            defaultValue={props.data?.fetchBoard.contents}
          />
          <S.Error>{props.contentError}</S.Error>
        </S.Title>
        <S.BoxIn>
          <S.Text>주소</S.Text>
          <S.TextIn>
            <S.Address type="text" placeholder="07250"></S.Address>
            <S.Search onClick={props.showModal}>우편번호 검색</S.Search>
            {props.isOpen && (
              <Modal
                visible={true}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
              >
                <DaumPostcode onComplete={props.handleComplete} />
              </Modal>
            )}
          </S.TextIn>
        </S.BoxIn>
        <S.Writer value={props.address} />
        <S.Writer />
        <S.YoutubeBox>
          <S.Label>유튜브</S.Label>
          <S.Youtube
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
          />
        </S.YoutubeBox>
        <S.Text>사진첨부</S.Text>
        <S.ImageBox>
          <S.BoxOne></S.BoxOne>
          <S.BoxOne></S.BoxOne>
          <S.BoxOne></S.BoxOne>
        </S.ImageBox>
        <S.Text>메인설정</S.Text>
        <S.ChooseBox>
          <S.Choose type="radio" name="gender" />
          <S.TextChoose>유튜브</S.TextChoose>
          <S.Choose type="radio" name="gender" />
          <S.TextChoose>사진</S.TextChoose>
        </S.ChooseBox>
        <S.SignUp>
          <S.Cancle>취소하기</S.Cancle>
          <S.Edit
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSignUp}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.Edit>
        </S.SignUp>
      </S.WrIn>
    </S.Wr>
  );
}
