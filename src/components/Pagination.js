import { useContext, useMemo, useEffect, useState } from "react";
import { RandomUserContext } from "../utils/Context";
import { useTable, usePagination } from "react-table";
import { Parent_Colums } from "../utils/Columns";
import "./Table.scss";

export default function Pagination() {
	const { randomUser,user, userLocation } = useContext(RandomUserContext);
	const columns = useMemo(() => Parent_Colums, []);
	const [filteredUser, setFilteredUser] = useState(randomUser);

	const data = useMemo(() => {
		if (filteredUser.length === 0) {
			return randomUser;
		}

		return filteredUser;
	}, [filteredUser, randomUser]);
	
	const tableInstance = useTable(
		{
			columns,
			data,
		},
		usePagination
	);
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		canNextPage,
		previousPage,
		canPreviousPage,
		pageOptions,
		state,
		setPageSize,
		prepareRow,
	} = tableInstance;

	const { pageIndex, pageSize } = state;
	console.log(userLocation);
	console.log(randomUser)

	useEffect(() => {

	const filteredUser = () => {
		const user = randomUser.filter((item) => item.Country === userLocation);

		setFilteredUser(user);
	};

	filteredUser();
	}, [userLocation])

	console.log("filteredUser", filteredUser);
	return (
		<div className='tableContainer'>
			<table
				className='Table'
				cellSpacing='10px'
				cellPadding='10px'
				{...getTableProps}
			>
				<thead>
					{headerGroups.map((header) => (
						<tr {...header.getHeaderGroupProps()}>
							{header.headers.map((col) => (
								<th {...col.getHeaderProps()}>{col.render("Header")}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps}>
					{page.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			{randomUser.length > 0 ? (
				<>
					<span>{`${pageIndex + 1} of ${pageOptions.length}`}</span>
					<select
						value={pageSize}
						onChange={(e) => setPageSize(Number(e.target.value))}
					>
						{[10, 30, 50].map((pages) => (
							<option key={pages} value={pages}>
								Show {pages}
							</option>
						))}
					</select>
					<div>
						<button onClick={() => previousPage()} disabled={!canPreviousPage}>
							Previous
						</button>
						<button onClick={() => nextPage()} disabled={!canNextPage}>
							Next
						</button>
					</div>
				</>
			) : null}
		</div>
	);
}