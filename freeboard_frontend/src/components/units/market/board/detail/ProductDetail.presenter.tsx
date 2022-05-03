import * as S from "./ProductDetail.styles";
import { getDate } from "../../../../../commons/libraries/utils";
import { IProductDetailUIProps } from "./ProductDetail.types";
import DOMPurify from "dompurify";
import KaKaoMapPage from "../../../../commons/map";

export default function ProductDetailUI(props: IProductDetailUIProps) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/charic.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchUseditem?.name}</S.Writer>
              <S.CreatedAt>
                {getDate(props.data?.fetchUseditem?.createdAt)}
              </S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchUseditem?.title}</S.Title>
          <S.ImageWrapper>
            {props.data?.fetchUseditem.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.Image
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.ImageWrapper>
          <S.Contents>
            {typeof window !== "undefined" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    props.data?.fetchUseditem?.contents
                  ),
                }}
              ></div>
            )}
          </S.Contents>
          {/* 
          {props.data?.fetchUseditem?.useditemAddress ? (
            // <KaKaoMapPage
            //   address1={props.data?.fetchUseditem.useditemAddress}
            //   // mapfixed={true}
            // />
          ) : (
            ""
          )} */}
          {/* <KaKaoMapPage address1={props.data?.fetchUseditem} /> */}
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveBuy}>구매하기</S.Button>
      </S.BottomWrapper>
      {/* 댓글 */}
    </S.Wrapper> //전체 박스
  );
}
