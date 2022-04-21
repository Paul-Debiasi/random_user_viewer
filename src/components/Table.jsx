import { useContext, useMemo, useEffect, useState } from "react";
import { RandomUserContext } from "../utils/Context";
import { useTable, usePagination } from "react-table";
import { Parent_Colums } from "../utils/Columns";
import { Link } from "react-router-dom";
import "./Table.scss";

	// Using React-table to create a dynamically generated table
export default function Pagination() {
	// Calling my state from context API
	const { randomUser, userLocation } = useContext(RandomUserContext);
	// Using the Table frame create in utils/Columns
	const columns = useMemo(() => Parent_Colums, []);
	const [filteredUser, setFilteredUser] = useState(randomUser);
	// Choosing which state/data pass to the table
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
	// Destructuring what is needed from React-table to generate it
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

	const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

	useEffect(() => {
		const filteredUser = () => {
			const user = randomUser.filter(
				(item) => item.country === capitalize(userLocation)
			);

			setFilteredUser(user);
		};

		filteredUser();
	}, [userLocation, randomUser]);

	return (
		<div className='tableContainer'>
			<div className='tableAdnButtons'>
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
											<td
												{...cell.getCellProps()}
												data-label={cell.column.Header}
											>
												{/* Creating the link to single user profile */}
												{cell.value === "View" ? (
													<>
														<Link to={`/view/${row.original.id}`}>
															{cell.render("Cell")}
														</Link>
													</>
												) : (
													cell.render("Cell")
												)}
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
				{/* The table's controllers */}
				{randomUser.length > 0 ? (
					<>
						<div className='OptionsContainer'>
							<select
								className='optionSelection'
								value={pageSize}
								onChange={(e) => setPageSize(Number(e.target.value))}
							>
								{[10, 30, 50].map((pages) => (
									<option key={pages} value={pages}>
										Show {pages}
									</option>
								))}
							</select>
							<div className='pageOption'>
								{canPreviousPage && (
									<button onClick={() => previousPage()}>Previous</button>
								)}
								{canNextPage && (
									<button onClick={() => nextPage()}>Next</button>
								)}
							</div>
							<div className='pageOptionLength'>
								<span>{`${pageIndex + 1} of ${pageOptions.length}`}</span>
							</div>
						</div>
					</>
				) : null}
			</div>
		</div>
	);
}
