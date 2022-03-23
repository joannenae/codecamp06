//presenter

import {SubmitButton , WriterInput} from './ProductWrite.styles'

export default function ProductWriteUI(props){

    return (
        <div>
        {/* <div>{data}</div> */}
        <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
        판매자: <input type="text" onChange={props.onChangeSeller} /><br />
        이름: <input type="text" onChange={props.onChangeName} /><br />
        내용: <input type="text" onChange={props.onChangeDetail} /><br />
        가격: <WriterInput type="text" onChange={props.onChangePrice} /><br />
        <SubmitButton onClick={props.isEdit ? props.onClickUpdate : props.callCreateProduct} isActive={props.isActive}>
            {props.isEdit ? "수정" : "등록"}하기
        </SubmitButton>
        </div>
    )
}
