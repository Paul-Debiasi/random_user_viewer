// Creating the frame for my table, the value of accessor will be key for the object the will populate the cells.
export const Parent_Colums = [
	{
		Header: "Name",
		columns: [
			{
				Header: "First Name",
				accessor: "first",
			},
			{
				Header: "Last Name",
				accessor: "last",
			},
		],
	},
	{
		Header: "Email",
		accessor: "email",
	},
	{
		Header: "Gender",
		accessor: "gender",
	},
	{
		Header: "Location",
		columns: [
			{
				Header: "City",
				accessor: "city",
			},
			{
				Header: "Country",
				accessor: "country",
			},
			{
				Header: "Street",
				accessor: "street",
			},
			{
				Header: "Number",
				accessor: "number",
			},
		],
	},
	{
		Header: "View Details",
		accessor: "view",
	},
];