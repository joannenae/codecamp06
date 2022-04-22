import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { accessTokenState } from "../../../../../../src/commons/store";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./ProductWrite.queries";
import { IProductWriteProps, IUpdateUseditemInput } from "./ProductWrite.types";

export default function ProductWrite(props: IProductWriteProps) {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUsedItem] = useMutation(UPDATE_USED_ITEM);

  const [name, setName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState("");

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [nameError, setNameError] = useState("");
  const [remarkError, setRemarkError] = useState("");
  const [contentError, setContentError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [tagError, setTagError] = useState("");

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
    if (event.target.value && remarks && contents && price && tags) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeRemark = (event: ChangeEvent<HTMLInputElement>) => {
    setRemarks(event.target.value);
    if (event.target.value !== "") {
      setRemarkError("");
    }
    if (name && event.target.value && contents && price && tags) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentError("");
    }
    if (name && remarks && event.target.value && price && tags) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
    if (event.target.value !== "") {
      setPriceError("");
    }
    if (name && remarks && contents && event.target.value && tags) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeTag = (event: ChangeEvent<HTMLInputElement>) => {
    setTags(event.target.value);
    if (event.target.value !== "") {
      setTagError("");
    }
    if (name && remarks && contents && price && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickSignUp = async () => {
    if (name === "") {
      setNameError("상품명을 입력해주세요.");
    }
    if (remarks === "") {
      setRemarkError("간단히 한 줄로 소개해주세요.");
    }
    if (contents === "") {
      setContentError("내용을 입력해주세요.");
    }
    if (price === 0) {
      setPriceError("가격을 입력해주세요.");
    }
    if (tags === "") {
      setTagError("태그를 추가해주세요");
    }
    if (
      name !== "" &&
      remarks !== "" &&
      contents !== "" &&
      price !== 0 &&
      tags !== ""
    )
      console.log(name);
    {
      try {
        const result = await createUseditem({
          variables: {
            createUseditemInput: {
              name: name,
              remarks: remarks,
              contents: contents,
              price,
              tags,
              images: fileUrls,
            },
          },
        });
        // const accessToken = result.data.loginUser.accessToken;
        // setAccessToken(accessToken); // 글로벌스테이트
        // localStorage.setItem("accessToken", accessToken); // accessToken 이 보이는지
        Modal.success({ content: "상품이 등록되었습니다." });
        console.log(result);
        router.push(`/market/${result.data.createUseditem._id}`);
      } catch (error) {
        Modal.error({ content: error.message });
      }
    }
  };

  const updateUseditemInput: IUpdateUseditemInput = {};
  if (name) updateUseditemInput.name = name;
  if (contents) updateUseditemInput.contents = contents;

  const onClickUpdate = async () => {
    try {
      await updateUsedItem({
        variables: {
          useditemId: router.query.marketid,
          // 검증에 이용되는 용도
          updateUseditemInput: {
            name,
            contents,
            remarks,
            price,
            tags,
            images: fileUrls,
            // 위 검증이 맞다면 이 내용들을 수정해줘 - playground
          },
        },
      });
      Modal.success({ content: "게시물 수정에 성공하였습니다!" });
      router.push(`/market/${router.query.marketid}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <ProductWriteUI
        isActive={isActive}
        isEdit={props.isEdit}
        data={props.data}
        nameError={nameError}
        remarkError={remarkError}
        contentError={contentError}
        priceError={priceError}
        tagError={tagError}
        onChangeName={onChangeName}
        onChangeRemark={onChangeRemark}
        onChangeContent={onChangeContent}
        onChangePrice={onChangePrice}
        onChangeTag={onChangeTag}
        onChangeFileUrls={onChangeFileUrls}
        onClickSignUp={onClickSignUp}
        onClickUpdate={onClickUpdate}
        fileUrls={fileUrls}
      />
    </>
  );
}
