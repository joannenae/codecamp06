import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { accessTokenState } from "../../../../../commons/store";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
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

  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [name, setName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState("");

  const [hashArr, setHashArr] = useState(
    props?.data?.fetchUseditem?.tags || []
  );
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value && remarks && contents && price && tags) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeRemark = (event: ChangeEvent<HTMLInputElement>) => {
    setRemarks(event.target.value);
    if (name && event.target.value && contents && price && tags) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeContent = (value: string) => {
    console.log(value);
    setContents(value === "<p><br></p>" ? "" : value);

    if (name && remarks && value && price && tags) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));

    if (name && remarks && contents && event.target.value && tags) {
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

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };
  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  };

  const onClickSignUp = async () => {
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
              tags: hashArr,
              images: fileUrls,
              useditemAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        Modal.success({ content: "????????? ?????????????????????." });
        console.log(result);
        router.push(`/market/${result.data.createUseditem._id}`);
      } catch (error) {
        Modal.error({ content: "?????? ????????? ?????????????????????." });
      }
    }
  };
  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };
  const handleComplete = (data: any) => {
    setIsOpen(false);
    console.log(data.address);
    setAddress(data.address);
    setZipcode(data.zonecode);
  };

  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data.fetchUseditem.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const updateUseditemInput: IUpdateUseditemInput = {};
    if (name) updateUseditemInput.name = name;
    if (contents) updateUseditemInput.contents = contents;
    if (isChangedFiles) updateUseditemInput.images = fileUrls;

    try {
      await updateUsedItem({
        variables: {
          useditemId: router.query.marketid,
          // ????????? ???????????? ??????
          updateUseditemInput: {
            name,
            contents,
            remarks,
            price,
            tags: hashArr,
            // images: fileUrls,
            // ??? ????????? ????????? ??? ???????????? ???????????? - playground
          },
        },
      });
      Modal.success({ content: "?????? ????????? ?????????????????????!" });
      router.push(`/market/${router.query.marketid}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);
  // ??????????????? ?????? ???????????? ????????????
  useEffect(() => {
    setHashArr(props?.data?.fetchUseditem?.tags || []);
  }, [props?.data?.fetchUseditem?.tags]);

  const onClickLog = () => {
    router.push("/login");
  };

  return (
    <>
      <ProductWriteUI
        isActive={isActive}
        isEdit={props.isEdit}
        data={props.data}
        onChangeName={onChangeName}
        onChangeRemark={onChangeRemark}
        onChangeContent={onChangeContent}
        onChangePrice={onChangePrice}
        onChangeFileUrls={onChangeFileUrls}
        onClickSignUp={onClickSignUp}
        onClickUpdate={onClickUpdate}
        fileUrls={fileUrls}
        onChangeAddressDetail={onChangeAddressDetail}
        onClickAddressSearch={onClickAddressSearch}
        onCompleteAddressSearch={onCompleteAddressSearch}
        isOpen={isOpen}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        handleComplete={handleComplete}
        address={address}
        zipcode={zipcode}
        addressDetail={addressDetail}
        hashArr={hashArr}
        setHashArr={setHashArr}
        onClickLog={onClickLog}
      />
    </>
  );
}
