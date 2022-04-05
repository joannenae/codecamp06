import { Component, createRef } from "react";
import Router from "next/router";

interface Istate {
  count: number;
}

export default class CounterPage extends Component {
  inputRef = createRef<HTMLInputElement>();
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("마운트됨");
    this.inputRef.current?.focus();
    // 포커스 깜빡깜빡
  }

  componentDidUpdate() {
    console.log("수정되고 다시 그려짐"); // 카운더가 진행되면 계속 진행
  }

  componentWillUnmount() {
    console.log("컴포넌트 사리짐");
    // 채팅방 나가기
    // api 요청 !!
  }

  onClickCounter = () => {
    // console.log(this.state.count);
    this.setState((prev: Istate) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove() {
    Router.push("/");
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <div>현재 카운트: {this.state.count} </div>
        <button onClick={this.onClickCounter}>카운트 올리기 ~</button>
        <button onClick={this.onClickMove}>나가기</button>
      </div>
    );
  }
}
