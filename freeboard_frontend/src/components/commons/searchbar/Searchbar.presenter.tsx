import { Searchbar, SearchbarInput } from "./Searchbar.styles";
import { ISearchbarUIProps } from "./Searchbar.types";

export default function SearchbarUI(props: ISearchbarUIProps) {
  return (
    <Searchbar>
      <SearchbarInput
        placeholder="검색어를 입력해 주세요."
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  );
}
