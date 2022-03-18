export default function randomToken(){

    function random(){
        const token = String(Math.floor( Math.random() * 1000000)).padStart(6,"0")
        document.getElementById("num").innerText = token
    }

    return(
        <div>
            <div id="num">000000</div>
            <button onClick={random}>인증번호전송</button>
        </div>

    )
}