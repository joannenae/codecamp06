import * as S from "./ProductDetail.styles";
import { getDate } from "../../../../../commons/libraries/utils";
import { IProductDetailUIProps } from "./ProductDetail.types";

export default function ProductDetailUI(props: IProductDetailUIProps) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/charic.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchUseditem?.writer}</S.Writer>
              <S.CreatedAt>
                {getDate(props.data?.fetchUseditem?.createdAt)}
              </S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchUseditem?.title}</S.Title>
          <S.ImageWrapper>
            {props.data?.fetchBoard.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.Image
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.ImageWrapper>
          <S.Contents>{props.data?.fetchUseditem?.contents}</S.Contents>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveEdit}>수정하기</S.Button>
        <S.Button>삭제하기</S.Button>
      </S.BottomWrapper>
      {/* 댓글 */}
    </S.Wrapper> //전체 박스
  );
}
