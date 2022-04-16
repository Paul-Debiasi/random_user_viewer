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
		Footer: "",
		columns: [
			{
				Header: "First Name",
				Footer: "",
				accessor: "first",
			},
			{
				Header: "Last Name",
				Footer: "",
				accessor: "last",
			},
		],
	},
	{
		Header: "Email",
		Footer: "",
		accessor: "email",
	},
	{
		Header: "Gender",
		Footer: "Gender",
		accessor: "gender",
	},
	{
		Header: "Location",
		Footer: "",
		columns: [
			{
				Header: "City",
				Footer: "",
				accessor: "city",
			},
			{
				Header: "Country",
				Footer: "",
				accessor: "country",
			},
			{
				Header: "Street",
				Footer: "",
				accessor: "street ",
			},
			{
				Header: "Number",
				Footer: "Number",
				accessor: "number",
			},
		],
	},
	{
		Header: "View Details",
		Footer: "View",
		accessor: "view",
	},
];