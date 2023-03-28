import { Tabs, Select, Input } from "antd";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";
// 네트워크 종류
const { Option } = Select;
// Tab도 주석 처리

// const Tab = (props) => (
// <Tabs
//   defaultActiveKey="1"
//   onTabClick={props.onTabClick}
//   destroyInactiveTabPane
// >
//   <Tabs.TabPane tab="단일 민팅" key="1">
//     <S.MintingContainer>
//       <S.UploadBox>
//         <S.ImageFile type="file" onChange={props.onChangeFile} />
//         <div id="div" style={{ width: "100%" }}>
//           <S.ImageClick
//             src={props.imageUrl}
//             style={{ position: "relative" }}
//           />
//           {props.imageUrl ? (
//             <>
//               <div
//                 style={{
//                   width: "200px",
//                   color: "white",
//                   fontSize: "16px",
//                   fontWeight: 600,
//                   letterSpacing: 1,
//                   position: "absolute",
//                   left: 100,
//                   top: 170,
//                   textAlign: "center",
//                 }}
//               >
//                 {props.customerName}
//               </div>
//             </>
//           ) : (
//             <></>
//           )}
//         </div>
//       </S.UploadBox>
//       <S.Container>
//         <S.SelectBox>
//           <Select
//             placeholder="고객사 선택"
//             onChange={props.onChangeSelect}
//             style={{
//               width: "100%",
//             }}
//           >
//             {props.isModalOpen
//               ? props.custMintOne.map((el) => {
//                   return (
//                     <Option
//                       key={uuidv4()}
//                       value={el.customer_id}
//                       name={el.customer_nm}
//                     >
//                       {el.customer_nm}
//                     </Option>
//                   );
//                 })
//               : "고객사 선택"}
//           </Select>
//         </S.SelectBox>
//         <S.SelectBox>
//           <Select
//             placeholder="네트워크 선택"
//             style={{
//               width: "100%",
//             }}
//             onChange={props.onChangeNetwork}
//           >
//             <Option value="1">테스트넷</Option>
//             <Option value="2">메인넷</Option>
//           </Select>
//         </S.SelectBox>
//       </S.Container>
//     </S.MintingContainer>
//   </Tabs.TabPane>
//   <Tabs.TabPane tab="일괄 민팅" key="2">
// <S.MintingContainer>
//   <S.UploadBox>
//     <S.ImageFile type="file" onChange={props.onChangeFiles} />
//     <div id="div2" style={{ width: "100%" }}>
//       <S.ImageClick
//         src={props.imagesUrl}
//         style={{ position: "relative" }}
//       />
//       {props.imagesUrl ? (
//         <>
//           <div
//             style={{
//               width: "200px",
//               height: "35px",
//               color: "white",
//               fontSize: "16px",
//               fontWeight: 600,
//               letterSpacing: 1,
//               position: "absolute",
//               left: 100,
//               top: 115,
//               textAlign: "center",
//             }}
//           >
//             {props.customerName}
//           </div>
//         </>
//       ) : (
//         <></>
//       )}
//     </div>
//   </S.UploadBox>
//   <S.Container>
//     <S.SelectBox>
//       <Select
//         placeholder="네트워크 선택"
//         style={{
//           width: "100%",
//         }}
//         onChange={props.onChangeNetwork}
//       >
//         <Option value="1">테스트넷</Option>
//         <Option value="2">메인넷</Option>
//       </Select>
//     </S.SelectBox>
//   </S.Container>
// </S.MintingContainer>
{
  /* </Tabs.TabPane>
  </Tabs> */
}
// );
// export default Tab;

export default function Tab(props) {
  return (
    <S.MintingContainer>
      <S.UploadBox>
        <S.ImageFile type="file" onChange={props.onChangeFiles} />
        <div id="div2" style={{ width: "100%" }}>
          <S.ImageClick
            src={props.imagesUrl}
            style={{ position: "relative" }}
          />
          {props.imagesUrl ? (
            <>
              <div
                style={{
                  width: "200px",
                  height: "35px",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 600,
                  letterSpacing: 1,
                  position: "absolute",
                  left: 100,
                  top: 115,
                  textAlign: "center",
                }}
              >
                {props.customerName}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </S.UploadBox>
      <S.Container>
        <S.SelectBox>
          <Select
            placeholder="네트워크 선택"
            style={{
              width: "100%",
            }}
            onChange={props.onChangeNetwork}
          >
            <Option value="1">테스트넷</Option>
            <Option value="2">메인넷</Option>
          </Select>
        </S.SelectBox>
      </S.Container>
    </S.MintingContainer>
  );
}
