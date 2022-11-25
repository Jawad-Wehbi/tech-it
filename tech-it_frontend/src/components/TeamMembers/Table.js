import { Grid, Container, Box, CircularProgress } from '@mui/material';
import { GridActionsCellItem } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useImperativeHandle, forwardRef } from 'react';
import { post } from '../../api/services';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

const Table = forwardRef((props, ref) => {
	const isCompany = true;

	const [rows, set_rows] = useState([]);
	const [pageSize, setPageSize] = useState(20);
	const [selectionModel, setSelectionModel] = React.useState([]);
	const [loaded, set_loaded] = useState(false);
	const [loading, set_loading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const urlParams = { resource: 'user', action: 'getAllMembers' };
			const response = await post(urlParams, { id: 1 });
			console.log('-------->', response);
			set_rows(
				response.data.map((obj) => {
					return flattenObject(obj);
				})
			);
			set_loaded(true);
			set_loading(false);
		};
		if (!loaded) fetchData().catch(console.error);
	}, []);

	const flattenObject = (ob) => {
		const toReturn = {};

		Object.keys(ob).map((i) => {
			if (typeof ob[i] === 'object' && ob[i] !== null) {
				const flatObject = flattenObject(ob[i]);
				Object.keys(flatObject).map((x) => {
					toReturn[`${i}.${x}`] = flatObject[x];
					return x;
				});
			} else {
				toReturn[i] = ob[i];
			}
			return i;
		});
		console.log('toReturn :>> ', toReturn);
		return toReturn;
	};

	const teamMemberColumns = [
		{ field: 'id', headerName: 'ID', flex: 1, width: 90 },
		{ field: 'assignee_type', headerName: 'Type', flex: 1, width: 150 },
		{ field: 'position', headerName: 'Position', flex: 1, minWidth: 150 },
		{ field: 'user.name', headerName: 'Name', flex: 1, minWidth: 150 },
		{
			field: 'user.email',
			headerName: 'Email',
			flex: 1,
			minWidth: 150
		}
	];

	const companyColumns = [
		{ field: 'id', headerName: 'ID', flex: 1, width: 90 },
		{ field: 'assignee_type', headerName: 'Type', flex: 1, width: 150 },
		{ field: 'position', headerName: 'Position', flex: 1, minWidth: 150 },
		{ field: 'user.name', headerName: 'Name', flex: 1, minWidth: 150 },
		{
			field: 'user.email',
			headerName: 'Email',
			flex: 1,
			minWidth: 150
		},
		{
			field: 'actions',
			headerName: 'Actions',
			type: 'actions',
			minWidth: 120,
			getActions: (params) => [
				<GridActionsCellItem
					icon={<ModeEditOutlineOutlinedIcon />}
					label="Edit"
					onClick={() => {}}
				/>,
				<GridActionsCellItem
					icon={<DeleteIcon />}
					label="Delete"
					// onClick={deleteUser(params.id)}
				/>
			]
		}
	];

	useEffect(() => {
		console.log('selectionModel', selectionModel);
		console.log('rows :>> ', rows);
	}, [selectionModel, rows]);

	useImperativeHandle(ref, () => ({
		async fetchData() {
			const urlParams = { resource: 'user', action: 'getAllMembers' };
			const response = await post(urlParams, { id: 1 });
			console.log('-------->', response);
		}
	}));

	return loading ? (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				height: '100vh',
				width: '100%'
			}}>
			<CircularProgress />
		</Box>
	) : (
		<>
			<Container maxWidth={false} disableGutters>
				<Grid container>
					<Grid item xs={12} md={12} sx={{ mx: 3 }}>
						<Box
							sx={{
								display: 'flex',
								height: '100%',
								minHeight: 600,
								width: '100%'
							}}>
							<DataGrid
								columns={isCompany ? companyColumns : teamMemberColumns}
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
								onSelectionModelChange={(newSelectionModel) => {
									setSelectionModel(newSelectionModel);
								}}
								selectionModel={selectionModel}
							/>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	);
});

export default Table;
