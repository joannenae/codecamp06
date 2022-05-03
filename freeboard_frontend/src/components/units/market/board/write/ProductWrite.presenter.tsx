import * as S from "./ProductWrite.styles";
import { IProductWriteUIProps } from "./ProductWrite.types";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import Upload from "../../../../commons/upload/Upload.container";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import KaKaoMapPage from "../../../../commons/map";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductWriteUI(props: IProductWriteUIProps) {
  return (
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
          <S.Error>{props.nameError}</S.Error>
        </S.TopBox>
        <S.Title>
          <S.Text>한 줄 요약</S.Text>
          <S.Online
            type="text"
            onChange={props.onChangeRemark}
            placeholder="간단히 설명해볼까요"
            defaultValue={props.data?.fetchUseditem.remarks}
          />
          <S.Error>{props.remarkError}</S.Error>
        </S.Title>
        <S.Title>
          <S.Text>내용</S.Text>
          <ReactQuill
            onChange={props.onChangeContent}
            defaultValue={props.data?.fetchUseditem.contents}
          />
          <S.Error>{props.contentError}</S.Error>
        </S.Title>
        <S.Flexbox>
          <S.TitlePrice>
            <S.Text>판매 가격</S.Text>
            <S.Price
              type="number"
              onChange={props.onChangePrice}
              placeholder="판매 가격을 입력해주세요."
              defaultValue={props.data?.fetchUseditem.price}
            />
            <S.Error>{props.priceError}</S.Error>
          </S.TitlePrice>
          <S.TitleTag>
            <S.Text>태그 입력</S.Text>
            <S.Tag
              type="text"
              onChange={props.onChangeTag}
              placeholder="#태그"
              defaultValue={props.data?.fetchUseditem.tags}
            />
            <S.Error>{props.tagError}</S.Error>
          </S.TitleTag>
        </S.Flexbox>
        <S.BoxIn>
          <S.Map>
            <S.Text>거래 위치</S.Text>
            <KaKaoMapPage />
          </S.Map>
          <S.AddressBox>
            <S.Location>
              <S.Text>GPS</S.Text>
              <S.InputText
                id="lng"
                onChange={props.onChangeAddress}
                readOnly
                // value={props.isAddress?.lng}
              />
              {/* <S.LocationIcon src="/location.png" alt="" /> */}
              <S.InputText
                id="lat"
                onChange={props.onChangeAddress}
                readOnly
                // value={props.isAddress?.lat}
              />
            </S.Location>
            <S.Address>
              <S.Text>주소</S.Text>
              <S.InputAddress type="text" />
              <S.InputText type="text" />
            </S.Address>
          </S.AddressBox>
        </S.BoxIn>
        <S.Text>사진첨부</S.Text>
        {props.fileUrls?.map((el, index) => (
          <Upload
            key={uuidv4()}
            index={index}
            fileUrl={el}
            onChangeFileUrls={props.onChangeFileUrls}
          />
        ))}
        <S.Text>메인 사진 설정</S.Text>
        <S.ChooseBox>
          <S.Choose type="radio" name="gender" />
          <S.TextChoose>사진1</S.TextChoose>
          <S.Choose type="radio" name="gender" />
          <S.TextChoose>사진2</S.TextChoose>
        </S.ChooseBox>
        <S.SignUp>
          <S.Cancel
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSignUp}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.Cancel>
        </S.SignUp>
      </S.WrIn>
    </S.Wr>
  );
}
