import { gql } from "@apollo/client"

export const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
        }
    }
`

export const UPDATE_PRODUCT = gql`
    mutation updateProduct($name: String , $detail: String , $price: Int) {
        updateProduct(name: $name, detail: $detail, price: $price){
            _id
            message
        }
    }
`