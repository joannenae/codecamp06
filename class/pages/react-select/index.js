import React, { MouseEventHandler, useState } from "react";
import Select, {
  components,
  ControlProps,
  Props,
  StylesConfig,
} from "react-select";
// import { ColourOption, colourOptions } from "../data";

const EMOJIS = ["👍", "🤙", "👏", "👌", "🙌", "✌️", "🖖", "👐"];

export const colourOptions = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

const Control = ({ children, ...props }) => {
  // @ts-ignore
  const { emoji, onEmojiClick } = props.selectProps;
  const style = { cursor: "pointer" };

  return (
    <components.Control {...props}>
      <span onMouseDown={onEmojiClick} style={style}>
        {emoji}
      </span>
      {children}
    </components.Control>
  );
};

const CustomSelectProps = (props) => {
  const [clickCount, setClickCount] = useState(0);
  const [status, setStatus] = useState(false);

  const onClick = (e) => {
    setClickCount(clickCount + 1);
    e.preventDefault();
    e.stopPropagation();
  };

  const styles = {
    control: (css) => ({ ...css, paddingLeft: "1rem" }),
  };

  const emoji = EMOJIS[clickCount % EMOJIS.length];

  const onClickChange = () => {
    setStatus(true);
  };

  colourOptions.map((el) => {
    console.log(el.label);
    return <>{el.label}</>;
  });

  //   console.log(colourOptions);

  return (
    <>
      <Select
        {...props}
        emoji={emoji}
        onEmojiClick={onClick}
        components={{ Control }}
        isSearchable
        name="emoji"
        options={status === true ? "이거" : colourOptions}
        styles={styles}
      />
      <button onClick={onClickChange}>클릭</button>
    </>
  );
};

export default CustomSelectProps;
