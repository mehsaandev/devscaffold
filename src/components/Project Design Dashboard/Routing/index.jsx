import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Route Name', minWidth: 170 },
  { id: 'path', label: 'Route Path', minWidth: 100 },
  {
    id: 'page',
    label: 'Target Page',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'create',
    label: 'Date Created',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'update',
    label: 'Date Updated',
    minWidth: 170,
    align: 'right',
    type: 'date',
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    type: 'date',
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
    align: 'right',
  },
];

function createData(name, path, page, create, update, status, action) {
  return { name,path,page,create,update,status,action };
}

const rows = [
  createData('Home', '/home', 'index.js', '1/2/2000','1/2/2000',3287263),
  createData('Home', '/home', 'index.js', '1/2/2000','1/2/2000', 3287263),
  createData('Home', '/home', 'index.js', '1/2/2000','1/2/2000', 3287263),
  
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}