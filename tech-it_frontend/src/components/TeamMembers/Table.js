import { Grid, Container, Paper, Box, Stack, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{ field: 'user_type', headerName: 'Type', width: 150 },
	{ field: 'position', headerName: 'Position', minWidth: 150 },
	{ field: 'name', headerName: 'Name', minWidth: 150 },
	{
		field: 'email',
		headerName: 'Email',
		flex: 1,
		minWidth: 150
	}
];

const Table = () => {
	// const { columns, rowID, urlParams, createPage, columnVisibilityModel, page = '' } = props;
	// const { buttonText, createPagePath } = createPage;

	const [loading, set_loading] = useState(true);
	const [rows, set_rows] = useState([]);
	const [pageSize, setPageSize] = React.useState(20);
	const [load_data, set_load_data] = useState(false);

	return (
		<>
			<Container maxWidth={false} disableGutters>
				<Grid container>
					<Grid item xs={12} md={12} sx={{mx: 3}}>
						<Box
							sx={{
								display: 'flex',
								height: '100%',
								minHeight: 600,
								width: '100%',
							}}>
							<DataGrid
								columns={columns}
								rows={rows}
								pageSize={pageSize}
								onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
								rowsPerPageOptions={[5, 10, 20, 30]}
								autoHeight
								checkboxSelection
								disableSelectionOnClick
								getRowId={(row) => row.id}
								initialState={{
									columns: {
										columnVisibilityModel: ''
									}
								}}
								components={{
									Toolbar: GridToolbar
								}}
								componentsProps={{
									toolbar: {
										showQuickFilter: true,
										quickFilterProps: { debounceMs: 500 }
									}
								}}
							/>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Table;
