import { Link } from "react-router-dom";
import "./DataTable.scss";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = ({ columns, rows, slug }: Props) => {
  const queryClient = useQueryClient();
  // When this mutation succeeds, invalidate any queries with the `` query key
  const mutation = useMutation({
    mutationFn: (id: number) => {
      return fetch(`import.meta.env.VITE_REACT_APP_API_URL/${slug}/${id}`, {
        method: "delete",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`all${slug}`] });
    },
  });

  const handleDelete = (id: number) => {
    mutation.mutate(id);
  };

  // Action column field
  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${slug}/${params.row.id}`}>
            <img src="/viewIcon.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/deleteIcon.svg" alt="This is a delete icon" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="data-table">
      <DataGrid
        className="data-grid"
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            // by passing quickFilterProps: { debounceMs: 500 }, it helps to delay the immidate search, instead it will wait for 500ms before searching
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
};

export default DataTable;
