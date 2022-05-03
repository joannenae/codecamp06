import * as S from "./ProductListItem.styles";
export default function ProductListItemUI(props) {
  return (
    <S.Wr onClick={props.onClickProductList(props.el)}>
      <S.ItemImage
        src={
          props.el.images[0] === "" || props.el?.images.length === 0
            ? "/user.webp"
            : props.el.images[0]?.startsWith("https", 0)
            ? `${props.el.images[0]}`
            : `https://storage.googleapis.com/${props.el.images[0]}`
        }
      />
      <S.Col>
        <S.Name>{props.el?.name}</S.Name>
        <S.Remark>{props.el?.remarks}</S.Remark>
        <S.Tag>{props.el.tags[0]}</S.Tag>
        <S.Row>
          <S.IconImage src="/name.png" />
          <S.Span>{props.el?.seller.name}</S.Span>
          <S.IconImage src="/heart.png" />
          <S.Span>{props.el?.pickedCount}</S.Span>
        </S.Row>
      </S.Col>
      <S.Coll>
        <S.Row>
          {/* <S.Icon src="/money.png" /> */}
          <S.Price>{props.el?.price} ₩</S.Price>
        </S.Row>
      </S.Coll>
    </S.Wr>
  );
}
