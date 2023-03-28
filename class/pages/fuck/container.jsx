import * as S from "./admin.styles";
import { useState, useCallback, useMemo, useEffect } from "react";
import axios from "axios";
import AdminPresenter from "./admin.presenter";

export default function AdminContainer() {
  const [adminData, setAdminData] = useState([]);
  const [adminId, setAdminId] = useState([]);
  const [select, setSelect] = useState([]);
  const [button, setButton] = useState(true);

  const AdminInfo = async () => {
    try {
      await axios({
        method: "GET",
        url: "/v1/admin/user-list",
      }).then((response) => {
        console.log(response);
        if (response.data.result_status === 200) {
          setAdminData(response.data.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AdminInfo();
  }, []);

  const checkOnlyOne = (checkThis, el) => {
    console.log(el);
    const checkboxes = document.getElementsByName("test");

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
    }
    setSelect(el.id);
  };
  console.log(select);

  const disableButton = () => {};

  const onClickEdit = () => {};

  return (
    <>
      <AdminPresenter
        adminData={adminData}
        select={select}
        checkOnlyOne={checkOnlyOne}
        disableButton={disableButton}
      />
    </>
  );
}
