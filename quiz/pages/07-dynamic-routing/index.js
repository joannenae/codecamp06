import {useState} from 'react'
import { useMutation , gql} from '@apollo/client'
import { useRouter } from 'next/router'

const CREATE_PRODUCT = gql`

    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`

export default function MutationProduct(){

    const router = useRouter()
    const[createProduct] = useMutation(CREATE_PRODUCT)

    const [seller , setSeller] = useState("")
    const [name , setName] = useState("")
    const [detail , setDetail] = useState("")
    const [price , setPrice] = useState("")

    const [data , setData ] = useState("")

    const onClickSubmit = async () => {
        try{
            const result = await createProduct({
                variables:{
                    seller: seller,
                    createProductInput: {
                        name: name,
                        detail: detail,
                        price: price
                    }
                }
            })
            console.log(result)
            console.log(result.data.createProduct.message)
            setData(result.data.createProduct.message)

            alert('게시물 등록에 성공하였습니당!')
            alert('상세 페이지로 이동해볼까용?')
            router.push(`/quiz/08-dynamic-routed/${result.data.createProduct._id}`)
            
        }catch(error){
            alert(error.message)

        } finally { // 무조건 실행됨.

        }
    }

    //이벤트 핸들러 함수
    const onChangeSeller = (event) => {
        setSeller(event.target.value)
    }
    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangeDetail = (event) => {
        setDetail(event.target.value)
    }
    const onChangePrice = (event) => {
        setPrice(Number(event.target.value))
    }

    return (
        <>
            판매자: <input type="text" onChange={onChangeSeller}/><br />
            상품명: <input type="text" onChange={onChangeName}/><br />
            상품내용: <input type="text" onChange={onChangeDetail}/><br />
            상품가격: <input type="text" onChange={onChangePrice}/><br />
            <button onClick={onClickSubmit}>상품 등록하기</button>
        </>
    )
}