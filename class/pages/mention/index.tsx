// import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAt } from "@fortawesome/free-solid-svg-icons";
const MessForm = ({ userObj }) => {
  const [mention, setMention] = useState("");
  const [mess, setmess] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    if (mention) {
      //멘션내용 처리
    }
    setMention("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    if (value.search("@") != -1) {
      const ment = value
        .split(" ")
        .filter((it) => it.includes("@"))
        .toString();
      setMention(ment.substring(ment.search("@") + 1, ment.length));
    }
  };

  const onMentionClick = () => {
    setmess(mess + "@");
  };
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        />
      </head>

      <form onSubmit={onSubmit}>
        <div>
          {mention && (
            <div className="mention">
              <span>
                To : <FontAwesomeIcon icon={faAt} id="at" /> {mention}
              </span>
            </div>
          )}
          <span onClick={onMentionClick} id="addMention">
            <FontAwesomeIcon icon={faAt} id="at" />
          </span>

          <TextareaAutosize
            id="messText"
            value={mess}
            onChange={onChange}
            type="text"
            placeholder="What are you doing?"
          />
          <input id="messSubmit" type="submit" value="&#xf054;" />
        </div>
      </form>
    </>
  );
};
export default MessForm;
