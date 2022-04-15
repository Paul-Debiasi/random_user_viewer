export const Columns = [
	{
		Header: "First Name",
		Footer: "First Name",
		accessor: "First",
	},
	{
		Header: "Last Name",
		Footer: "Last Name",
		accessor: "Last",
	},
	{
		Header: "Gender",
		Footer: "Gender",
		accessor: "Gender",
	},
	{
		Header: "Email",
		Footer: "Email",
		accessor: "Email",
	},
	{
		Header: "City",
		Footer: "City",
		accessor: "City",
	},
	{
		Header: "Country",
		Footer: "Country",
		accessor: "Country",
	},
	{
		Header: "Street",
		Footer: "Street",
		accessor: "Street ",
	},
	{
		Header: "Number",
		Footer: "Number",
		accessor: "Number",
	},
];

export const Parent_Colums = [
	{
		Header: "Name",
		Footer: "Name",
		columns: [
			{
				Header: "First Name",
				Footer: "First Name",
				accessor: "First",
			},
			{
				Header: "Last Name",
				Footer: "Last Name",
				accessor: "Last",
			},
		],
	},
	{
		Header: "Email",
		Footer: "Email",
		accessor: "Email",
	},
	{
		Header: "Gender",
		Footer: "Gender",
		accessor: "Gender",
	},
	{
		Header: "Location",
		Footer: "Location",
		columns: [
			{
				Header: "City",
				Footer: "City",
				accessor: "City",
			},
			{
				Header: "Country",
				Footer: "Country",
				accessor: "Country",
			},
			{
				Header: "Street",
				Footer: "Street",
				accessor: "Street ",
			},
			{
				Header: "Number",
				Footer: "Number",
				accessor: "Number",
			},
		],
	},
	{
		Header: "View Details",
		Footer: "View Details",
		accessor: "View",
	},
];