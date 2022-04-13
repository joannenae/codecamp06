import { useEffect } from "react";
import { useRecoilState } from "recoil";
import BoardWrite from "../../../src/components/units/example/Boardwrite";
import { isEditState } from "../../../src/commons/store";

export default function GlobalStatePage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  });

  return <BoardWrite />;
}

// new
