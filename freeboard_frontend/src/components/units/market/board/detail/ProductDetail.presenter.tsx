import * as S from "./ProductDetail.styles";
import { getDate } from "../../../../../commons/libraries/utils";
import { IProductDetailUIProps } from "./ProductDetail.types";
import DOMPurify from "dompurify";
import KaKaoMapPage from "../../../../commons/map";
import CommentWrite from "../../../comment/write/Commentwrite.container";
import CommentList from "../../../comment/list/Commentlist.container";

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
        {/* 내용 */}
        <S.Body>
          {/* 상단 */}
          <S.Topbox>
            <S.ImageBox>
              <S.DetailImg
                src={
                  props.data?.fetchUseditem?.images[0] === "" ||
                  props.data?.fetchUseditem?.images.length === 0
                    ? "/user.webp"
                    : props.data?.fetchUseditem?.images[0]?.startsWith(
                        "https",
                        0
                      )
                    ? `${props.data?.fetchUseditem?.images[0]}`
                    : `https://storage.googleapis.com/${props.data?.fetchUseditem?.images[0]}`
                }
                // src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.images[0]}`}
              />
            </S.ImageBox>
            <S.TopIn>
              <S.DetailCon>
                <S.Edit>
                  {" "}
                  <S.Name>{props.data?.fetchUseditem?.name}</S.Name>
                  <img
                    src="/edit.png"
                    alt=""
                    style={{ width: 20, height: 23 }}
                    onClick={props.onClickMoveToBoardEdit}
                  />
                </S.Edit>

                <S.Price>{props.data?.fetchUseditem?.price}원</S.Price>
                <S.Remark>{props.data?.fetchUseditem?.remarks}</S.Remark>
                <S.Tag>{props.tagarray}</S.Tag>
              </S.DetailCon>
              <S.Button>
                <S.Pick onClick={props.onClickPick}>
                  {props.data?.fetchUseditem?.pickedCount}
                </S.Pick>
                <S.Basket
                  onClick={
                    props.isBaskets
                      ? props.onClickDeleteBasket(props.data)
                      : props.onClickBasket(props.data)
                  }
                >
                  {props.isBaskets ? "담기 취소" : "장바구니"}
                </S.Basket>
                <S.Buy
                  onClick={props.onClickBuy(props.data?.fetchUseditem?._id)}
                >
                  바로구매
                </S.Buy>
              </S.Button>
            </S.TopIn>
          </S.Topbox>
          {/* 왼쪽 */}
          <S.Container>
            <S.Left>
              <S.PriceInfo>상품정보</S.PriceInfo>
              <S.Contents>
                {" "}
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
              <S.Place>
                <S.Location src="/location.png" />
                거래지역
              </S.Place>
              <S.Map>
                <KaKaoMapPage address={props.address} />
              </S.Map>
            </S.Left>
            {/* 오른쪽 */}
            <S.Right>
              <S.MarketInfo>상점정보</S.MarketInfo>
              <S.Username>{props.data?.fetchUseditem?.seller.name}</S.Username>
              <S.CommentArea>
                {" "}
                <CommentWrite />
                <CommentList />
              </S.CommentArea>
            </S.Right>
          </S.Container>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.ButtonGo onClick={props.onClickMoveList}>목록으로</S.ButtonGo>
        <S.ButtonGo onClick={props.onClickMoveBuy}>구매하기</S.ButtonGo>
      </S.BottomWrapper>
      {/* 댓글 */}
    </S.Wrapper> //전체 박스
  );
}
