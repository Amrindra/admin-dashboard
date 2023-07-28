import './DataTable.scss';
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridValueGetterParams,
} from '@mui/x-data-grid';

type Props = {
  columns: GridColDef[];
  rows: object[];
  // slug: string;
};

const DataTable = ({ columns, rows }: Props) => {
  return (
    <div className="data-table">
      <DataGrid
        className="data-grid"
        rows={rows}
        columns={columns}
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
        pageSizeOptions={[5]}
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
