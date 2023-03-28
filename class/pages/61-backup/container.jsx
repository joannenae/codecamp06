import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid, GridCellModes } from "@mui/x-data-grid";
import * as S from "./admin.styles";
import { useState, useCallback, useMemo, useEffect } from "react";
import axios from "axios";

function EditToolbar(props) {
  const {
    selectedCellParams,
    cellMode,
    cellModesModel,
    setCellModesModel,
    adminId,
  } = props;

  const handleSaveOrEdit = async () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field } = selectedCellParams;
    if (cellMode === "edit") {
      try {
        await axios({
          method: "POST",
          url: "/v1/admin/auth",
          params: {
            admin_id: adminId,
          },
        }).then((response) => {
          console.log(response);
        });
      } catch (error) {
        console.log(error);
      }
      setCellModesModel({
        ...cellModesModel,
        [id]: { ...cellModesModel[id], [field]: { mode: GridCellModes.View } },
      });
    } else {
      console.log("2");
      setCellModesModel({
        ...cellModesModel,
        [id]: { ...cellModesModel[id], [field]: { mode: GridCellModes.Edit } },
      });
    }
  };

  const handleCancel = () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field } = selectedCellParams;
    setCellModesModel({
      ...cellModesModel,
      [id]: {
        ...cellModesModel[id],
        [field]: { mode: GridCellModes.View, ignoreModifications: true },
      },
    });
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        p: 1,
      }}
    >
      <Button
        onClick={handleSaveOrEdit}
        onMouseDown={handleMouseDown}
        disabled={!selectedCellParams}
        variant="outlined"
      >
        {cellMode === "edit" ? "Save" : "Edit"}
      </Button>
      <Button
        onClick={handleCancel}
        onMouseDown={handleMouseDown}
        disabled={cellMode === "view"}
        variant="outlined"
        sx={{ ml: 1 }}
      >
        Cancel
      </Button>
    </Box>
  );
}

EditToolbar.propTypes = {
  cellMode: PropTypes.oneOf(["edit", "view"]).isRequired,
  cellModesModel: PropTypes.object.isRequired,
  selectedCellParams: PropTypes.shape({
    field: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }),
  setCellModesModel: PropTypes.func.isRequired,
};

export default function AdminContainer() {
  const [selectedCellParams, setSelectedCellParams] = useState(null);
  const [cellModesModel, setCellModesModel] = useState({});
  const [page, setPage] = useState(0);
  const [adminData, setAdminData] = useState([]);
  const [adminId, setAdminId] = useState([]);

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

  const handleCellFocus = useCallback((event) => {
    const row = event.currentTarget.parentElement;
    const id = row.dataset.id;
    const field = event.currentTarget.dataset.field;
    setSelectedCellParams({ id, field });
    setAdminId(id);
  }, []);

  const cellMode = useMemo(() => {
    if (!selectedCellParams) {
      return "view";
    }
    const { id, field } = selectedCellParams;
    return cellModesModel[id]?.[field]?.mode || "view";
  }, [cellModesModel, selectedCellParams]);

  const handleCellKeyDown = useCallback(
    (params, event) => {
      if (cellMode === "edit") {
        event.defaultMuiPrevented = true;
      }
    },
    [cellMode]
  );

  return (
    <>
      <S.Wrapper>
        <S.Title>
          관리 계정 가입 요청 <br />
        </S.Title>
        <S.Span>Admin 관리자 요청을 확인할 수 있습니다.</S.Span>
      </S.Wrapper>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <DataGrid
          pagination
          pageSize={10}
          rowsPerPageOptions={[10, 20]}
          page={page}
          onPageChange={(newPage) => setPage(newPage)}
          rows={adminData}
          columns={[...columns]}
          autoHeight
          disableColumnMenu
          disableColumnSelector={true}
          onCellKeyDown={handleCellKeyDown}
          cellModesModel={cellModesModel}
          // checkboxSelection
          onCellModesModelChange={(model) => setCellModesModel(model)}
          components={{
            Toolbar: EditToolbar,
          }}
          componentsProps={{
            toolbar: {
              cellMode,
              selectedCellParams,
              setSelectedCellParams,
              cellModesModel,
              setCellModesModel,
            },
            cell: {
              onFocus: handleCellFocus,
            },
          }}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </div>
    </>
  );
}

const columns = [
  { field: "nm", headerName: "이름", width: 180, flex: 1 },
  { field: "email", headerName: "이메일", width: 300, flex: 1 },
  { field: "phone", headerName: "연락처", width: 200, flex: 1 },
  {
    field: "confirmed",
    headerName: "상태",
    width: 200,
    flex: 1,
    editable: true,
    type: "singleSelect",
    valueOptions: [
      { value: 1, label: "승인" },
      { value: 2, label: "미승인" },
    ],
    // valueFormatter: (params) => params.value.label,
    //   valueFormatter: ({ id: rowId, value, field, api }) => {
    //     const colDef = api.getColumn(field);
    //     const option = colDef.valueOptions.find(
    //       ({ value: optionValue }) => value === optionValue
    //     );
    //     return option.label;
    //   },
  },
  { field: "grade", headerName: "등급", width: 120, flex: 1 },
];
