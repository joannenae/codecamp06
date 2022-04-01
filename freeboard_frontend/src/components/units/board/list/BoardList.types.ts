import { MouseEvent } from "react";

export interface IBoardListUIProps {
  data: any;
  refetch: any;
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
