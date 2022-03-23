//상세보기 페이지

import {useQuery, gql} from '@apollo/client'
import { useRouter } from 'next/router' 


const FETCH_PRODUCT = gql`
query fetchProduct($productId:ID ){
    fetchProduct(productId:$productId ){
        _id
        seller
        name
        price
        detail
    }
}

`

export default function StaticRoutedPage(){
    const router = useRouter()
    
    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {productId:String(router.query.myproduct)}
    })
    
    console.log('data')
    console.log(data)

    const onClickMove = () => {
        router.push(`/08-05-product/${router.query.myproduct}/edit`)
    }

    return (
        <>
            <div>판매자: {data?.fetchProduct.seller}</div>
            <div>이름: {data?.fetchProduct.name}</div>
            <div>내용: {data?.fetchProduct.detail}</div>
            <div>가격:{data && data.fetchProduct.price}</div>
            <button onClick={onClickMove}>수정하기</button>
        </>
    )
}