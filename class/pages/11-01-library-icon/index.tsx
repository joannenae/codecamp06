import { AppleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(AppleOutlined)`
  font-size: 50px;
  color: red;
`;

export default function LibraryIconPage() {
  //   return <AppleOutlined />;
  return <MyIcon />;
}
