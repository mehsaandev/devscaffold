import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';


const roles = ['Active', 'Inactive'];
const randomRole = () => {
  return randomArrayItem(roles);
};

const initialRows = [
  {
    id: randomId(),
    name: 'Home',
    path: '/home',
    page: 'Index.js',
    crteateDate: randomCreatedDate(),
    updateDate: randomCreatedDate(),
    status: randomRole(),
  },
  {
    id: randomId(),
    name: 'Home',
    path: '/home',
    page: 'Index.js',
    crteateDate: randomCreatedDate(),
    updateDate: randomCreatedDate(),
    status: randomRole(),
  },{
    id: randomId(),
    name: 'Home',
    path: '/home',
    page: 'Index.js',
    crteateDate: randomCreatedDate(),
    updateDate: randomCreatedDate(),
    status: randomRole(),
  },{
    id: randomId(),
    name: 'Home',
    path: '/home',
    page: 'Index.js',
    crteateDate: randomCreatedDate(),
    updateDate: randomCreatedDate(),
    status: randomRole(),
  },{
    id: randomId(),
    name: 'Home',
    path: '/home',
    page: 'Index.js',
    crteateDate: randomCreatedDate(),
    updateDate: randomCreatedDate(),
    status: randomRole(),
  },{
    id: randomId(),
    name: 'Home',
    path: '/home',
    page: 'Index.js',
    crteateDate: randomCreatedDate(),
    updateDate: randomCreatedDate(),
    status: randomRole(),
  },
];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', path: '', page: '',isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add Route
      </Button>
      
      
    </GridToolbarContainer>
  );
}

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: 'name', headerName: 'Route Name', width: 180, editable: true },
    {
      field: 'path',
      headerName: 'Route Path',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'page',
      headerName: 'Target Page',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'createDate',
      headerName: 'Date Created',
      type: 'date',
      width: 180,
      editable: true,
    },
    {
      field: 'updateDate',
      headerName: 'Date Updated',
      type: 'date',
      width: 180,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 220,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['Active', 'Inactive'],
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];
  return (
    <div class="bg-slate-200 w-screen h-screen">
    <div class="bg-white rounded-lg h-screen mx-8 p-8">
      <p class="font-sans font-bold text-2xl mb-4"> Project Routes</p>
      <div class="flex justify-between flex-wrap mb-4 ">
        <div >
        <div class="flex rounded-md shadow-sm ring-1  ring-gray-300 sm:max-w-md">
            <input type="text"  class="block flex-1 border-0 bg-transparent py-1.5 px-1.5 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6" placeholder="Search"/>
          </div>
        </div>
        <div >
        <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">+  Add Routes</a>
        </div>
      </div>
      <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
    </div>
    </div>
  );
}