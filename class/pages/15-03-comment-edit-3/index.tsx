import { useQuery, gql } from "@apollo/client";
import BoardCommentItem from "../../src/components/units/board/15-board-comment";

const FETCH_BOARDS = gql`
  query fetchBoard {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;
export default function MapBoardPage() {
  // const [ count , setCount ] = uesState(3)
  // const [myIndex, setMyIndex] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);
  const { data } = useQuery(FETCH_BOARDS);

  // const onClickEdit = (event) => {
  //   const aaa = myIndex;
  //   aaa[event.target.id] = true;
  //   setMyIndex([...aaa]);
  // };

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <BoardCommentItem key={el._id} el={el} />
      ))}
    </>
  );
}
