import { DogImg, Wrapper } from "./OpenapiList.styles";
import { IOpenapiListUIProps } from "./OpenapiList.types";
import { v4 as uuidv4 } from "uuid";

export default function OpenapiListUI(props: IOpenapiListUIProps) {
  return (
    <Wrapper>
      <div>
        {props.imgUrls.map((el: any, index: number) => (
          <>
            <DogImg key={uuidv4()} src={el} />
            {(index + 1) % 3 === 0 && <br />}
          </>
        ))}
      </div>
    </Wrapper>
  );
}
