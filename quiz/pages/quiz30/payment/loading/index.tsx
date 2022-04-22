import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  const [amount, setAmount] = useState(500);
  const router = useRouter();

  const onChangeValue = (event) => {
    setAmount(event.target.value);
  };

  const requestPay = (e) => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp99601684"); // Example: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 중복되지 않게 -> 주석하면 랜덤으로 설정됨
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/quiz30/payment/complete", // 결제 끝나고 이 페이지로 이동
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          router.push(`/quiz30/payment/complete`);

          console.log(rsp);
          // 백엔드에 결제 관련 데이터 넘겨주기(=> 즉 mutation 실행하기)
          // ex) createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패하였습니다. 다시 시도해주세요");
        }
      }
    );
  };
  return (
    <div>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <select onChange={onChangeValue}>
        <option value={500}>500</option>
        <option value={1000}>1000</option>
        <option value={2000}>2000</option>
        <option value={5000}>5000</option>
      </select>
      <button onClick={requestPay}>충전하기</button>
    </div>
  );
}
