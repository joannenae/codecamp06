export default function HelloState(){
    
    function counter(){
        const result = document.getElementById("hi").innerText 
        if( result === "안녕하세요"){
            document.getElementById("hi").innerText = "반갑습니다"
        }else {
            document.getElementById("hi").innerText = "안녕하세요"
        }  
    } return(
        <div>
            <button id="hi" onClick={counter}>안녕하세요</button>
        </div>
    )
}
