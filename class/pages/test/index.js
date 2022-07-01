import React from "react";
import { render } from "react-dom";
import { MentionsInput, Mention } from "react-mentions";

const users = [
  {
    id: "1",
    display: "Jimmy",
  },
  {
    id: "2",
    display: "Ketut",
  },
  {
    id: "3",
    display: "Gede",
  },
];

class App extends React.Component {
  state = {
    comments: [],
    comment: "",
  };

  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmitComment = (e) => {
    e.preventDefault();

    this.setState({
      comments: [...this.state.comments, this.state.comment],
      comment: "",
    });
  };

  render() {
    const { comments, comment } = this.state;
    return (
      <div>
        {comments.map((comment) => (
          <Linkify>{comment}</Linkify>
        ))}

        <hr />
        <MentionsInput
          markup="@[__display__](__id__)"
          value={comment}
          onChange={this.handleCommentChange}
        >
          <Mention trigger="@" data={users} />
        </MentionsInput>

        <button onClick={this.handleSubmitComment}>Comment</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
