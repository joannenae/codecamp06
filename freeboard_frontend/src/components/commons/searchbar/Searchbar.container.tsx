import { ChangeEvent } from "react";
import SearchbarUI from "./Searchbar.presenter";
import { ISearchbarProps } from "./Searchbar.types";
import _ from "lodash";

export default function Searchbar(props: ISearchbarProps) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data, page: 1 });
    props.refetchBoardsCount({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <SearchbarUI onChangeSearchbar={onChangeSearchbar} />;
}
