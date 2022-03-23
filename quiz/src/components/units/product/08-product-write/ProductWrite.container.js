//container

import ProductWriteUI from "./ProductWrite.presenter"
import { useState } from 'react'
import { useMutation} from '@apollo/client'
import { CREATE_PRODUCT , UPDATE_PRODUCT } from '../../../units/product/08-product-write/ProductWrite.quries'
import { useRouter } from 'next/router'

export default function ProductWrite(props){
    const router = useRouter ()
    const [isActive , setIsActive] = useState(false)

    const [myPrice, setMyPrice] = useState("")
    const [mySeller, setMySeller] = useState("")
    const [myName, setMyName] = useState("")
    const [myDetail, setMyDetail] = useState("")
    
    const [data, setData] = useState("")
    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [updateProduct] = useMutation(UPDATE_PRODUCT)

    //수정하기함수
    const onClickUpdate =  async () => {
        await updateProduct({
            variables: { price: myPrice, seller: mySeller, name: myName, detail: myDetail  }
        })
        alert("게시물 수정에 성공하였습니다!")
        router.push( `/08-05-product/${router.query.myproduct}`) //상세페이지로 이동
    }


    //등록하기함수  - 함수 이름 헷갈리면 바꿔줄것
    const callCreateProduct = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식!!
        // const result = await axios.get("https://koreanjson.com/users/1")
        // const result = await axios.get("https://koreanjson.com/products/1")
    

        const result = await createProduct({
            variables:{
                seller: mySeller,
                createProductInput: {
                    name: myName,
                    detail: myDetail,
                    price: myPrice
                }
            }
            // variables: { price: myPrice, seller: mySeller, name: myName, detail: myDetail }
        }) // graphql-api 방식
        // console.log(result)
        // console.log(result.data.createBoard.message)
        // setData(result.data.createBoard.message)
        alert("게시물 등록에 성공하였습니다!")
        router.push( `/08-05-product/${result.data.createProduct._id}`)
    }
    
    const onChangePrice = (event) => {
        setMyPrice(Number(event.target.value))

        if(event.target.value !==  "" && mySeller !== "" && myName !== "" && myDetail !== "" ){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    const onChangeSeller = (event) => {
        setMySeller(event.target.value)

        if(myPrice !== "" && event.target.value !==  "" && myName !== "" && myDetail !== "" ){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    
    const onChangeName = (event) => {
        setMyName(event.target.value)

        if(myPrice !==  "" && mySeller !==  "" && event.target.value !== "" && myDetail !== "" ){
            setIsActive(true)
        }else {
            setIsActive(false)
        }
    }
    
    const onChangeDetail = (event) => {
        setMyDetail(event.target.value)

        if(myPrice !==  "" && mySeller !== "" && myName !==  "" && event.target.value !== "" ){
            setIsActive(true)
        }else {
            setIsActive(false)
        }
    }

    return (
        <ProductWriteUI 
            onChangeSeller={onChangeSeller} 
            onChangeName={onChangeName} 
            onChangeDetail={onChangeDetail} 
            onChangePrice={onChangePrice} 
            callCreateProduct={callCreateProduct}
            onClickUpdate={onClickUpdate}
            isActive={isActive}
            isEdit={props.isEdit}
            //props라는 객체 , aaa라는 키에 객체가 들어감 
        />
    )
}
