import { Pages, Span, SpanBox } from "./Pagination.styles";
import { IPaginationUIProps } from "./Pagination.types";

export default function PaginationUI(props: IPaginationUIProps) {
  return (
    <div>
      <SpanBox>
        <Span
          onClick={props.onClickPrevPage}
          disabled={props.startPage === 1 ? true : false}
        >
          {"<"}
        </Span>
        {/* 페이지 이동  */}
        {new Array(10).fill(1).map(
          (_, index) =>
            index + props.startPage <= props.lastPage && (
              <Pages
                key={index + props.startPage}
                onClick={props.onClickPage}
                id={String(index + props.startPage)}
                isCurrent={props.startPage + index === props.current}
              >
                {` `} {index + props.startPage}
              </Pages>
            )
        )}
        <Span
          onClick={props.onClickNextPage}
          disabled={props.startPage + 10 > props.lastPage ? true : false}
        >
          {">"}
        </Span>
      </SpanBox>
    </div>
  );
}
