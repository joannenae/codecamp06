import * as S from "./ProductWrite.styles";
import { IProductWriteUIProps } from "./ProductWrite.types";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import Upload from "../../../../commons/upload/Upload.container";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import KaKaoMapPage from "../../../../commons/map";
import DaumPostcode from "react-daum-postcode";
import HashTagPage from "../../../hashtag";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductWriteUI(props: IProductWriteUIProps) {
  return (
    <>
      <S.Wr>
        <S.WrIn>
          <S.Header>{props.isEdit ? "상품 수정" : "상품 등록"}</S.Header>
          <S.TopBox>
            <S.Text>상품명</S.Text>
            <S.Name
              type="text"
              onChange={props.onChangeName}
              defaultValue={props.data?.fetchUseditem.name} // 수정하기 전에 기본으로 써져있을 값 -> 등록할 때 썼던 데이터가 그대로 남아있어야댐
              placeholder="상품명을 입력해 주세요"
            />
          </S.TopBox>
          <S.Title>
            <S.Text>한 줄 요약</S.Text>
            <S.Online
              type="text"
              onChange={props.onChangeRemark}
              placeholder="간단히 설명해볼까요"
              defaultValue={props.data?.fetchUseditem.remarks}
            />
          </S.Title>
          <S.Title>
            <S.Text>내용</S.Text>
            <ReactQuill
              onChange={props.onChangeContent}
              defaultValue={props.data?.fetchUseditem.contents}
              style={{ width: 1000, height: 200 }}
            />
          </S.Title>
          <S.TitlePrice>
            <S.Text>판매 가격</S.Text>
            <S.Price
              type="number"
              onChange={props.onChangePrice}
              placeholder="판매 가격을 입력해주세요."
              defaultValue={props.data?.fetchUseditem.price}
            />
          </S.TitlePrice>
          <S.TitleTag>
            <S.Text>태그 입력</S.Text>
            {/* <S.Tag
              type="text"
              onChange={props.onChangeTag}
              placeholder="#태그"
              defaultValue={props.data?.fetchUseditem.tags}
            /> */}
            <HashTagPage
              // onChange={props.onChangeTag}
              setHashArr={props.setHashArr}
              hashArr={props.hashArr}
            />
            {/* {props.isEdit ? (
              props.data?.fetchUseditem.tags.map((el) => <div>{el}</div>)
            ) : (
              <div></div>
            )} */}
          </S.TitleTag>
          <S.BoxIn>
            <S.Map>
              <S.Text style={{ marginBottom: 20 }}>거래 위치</S.Text>
              {props.address && <KaKaoMapPage address={props.address} />}
            </S.Map>
            <S.AddressBox>
              <S.Address
                placeholder="07250"
                defaultValue={
                  props.zipcode ||
                  props.data?.fetchUseditem.useditemAddress?.zipcode ||
                  ""
                }
              ></S.Address>
              <S.Search onClick={props.showModal}>우편번호 검색</S.Search>
              <S.Writer
                readOnly
                value={
                  props.address ||
                  props.data?.fetchUseditem.useditemAddress?.address ||
                  ""
                }
              />
              <S.Writer />
              {props.isOpen && (
                <Modal
                  visible={true}
                  onOk={props.handleOk}
                  onCancel={props.handleCancel}
                >
                  <DaumPostcode onComplete={props.handleComplete} />
                </Modal>
              )}
            </S.AddressBox>
          </S.BoxIn>
          <S.Text style={{ marginBottom: 20 }}>사진첨부</S.Text>
          {props.fileUrls?.map((el, index) => (
            <Upload
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
          <S.SignUp>
            <S.Delete>취소</S.Delete>
            <S.Cancel
              onClick={props.isEdit ? props.onClickUpdate : props.onClickSignUp}
              isActive={props.isEdit ? true : props.isActive}
            >
              {props.isEdit ? "수정" : "등록"}
            </S.Cancel>
          </S.SignUp>
        </S.WrIn>
      </S.Wr>
    </>
  );
}
