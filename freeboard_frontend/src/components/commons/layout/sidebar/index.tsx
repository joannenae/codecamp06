import { useEffect, useState } from "react";
import * as S from "./Sidebar.styles";

export default function LayoutSideBar() {
  const [basketItems, setBasketItems] = useState([]);
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("today") || "[]");
    setBasketItems(baskets);
  }, []);
  useEffect(() => {}, [basketItems]);
  console.log(basketItems);

  return (
    <S.TodayWrapper>
      <S.Recent>최근 본 상품</S.Recent>

      {basketItems.map((el) => {
        return (
          <>
            <S.TodayRow key={el._id}>
              <S.TodayCol>{el.name}</S.TodayCol>
              <S.TodayCol>{el.tags}</S.TodayCol>
              <S.TodayImg
                src={
                  el.images[0] === "" || el?.images.length === 0
                    ? "/user.webp"
                    : el.images[0]?.startsWith("https", 0)
                    ? `${el.images[0]}`
                    : `https://storage.googleapis.com/${el.images[0]}`
                }
                // src={`https://storage.googleapis.com/${el.images[0]}`}
              />
            </S.TodayRow>
          </>
        );
      })}
    </S.TodayWrapper>
  );
}
