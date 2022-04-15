import { useEffect, useContext, useState } from "react";
import { RandomUserContext } from "../utils/Context";
import "./Header.scss";

export default function Header() {
	const { randomUser, setRandomUser,user, setUser } =
		useContext(RandomUserContext);
	const [searchRandomUser, setSearchRandomUser] = useState([]);
	const [searched, setSearched] = useState("");
	let more = 100;

	const handleChange = (e) => {
		setSearched(e.target.value);
		// setRandomUser(user)
	};

	useEffect(() => {
	const getRandomUser = async () => {
		const url = `https://randomuser.me/api/?results=${more}`;
		try {
			const data = await fetch(url);
			const response = await data.json();
			console.log("Response in API call", response.results);
			// setSearchRandomUser([...response.results]);
			const newRandomUserObj = [...response.results];
	
			const dataTable = newRandomUserObj.map((item) => {
				return {
					First: item.name.first,
					Last: item.name.last,
					Gender: item.gender,
					Email: item.email,
					City: item.location.city,
					Country: item.location.country,
					Street: item.location.street.name,
					Number: item.location.street.number,
					View: "View",
				};
			});
			setRandomUser([...dataTable]);
			console.log("Random User", randomUser);
			setUser([...dataTable]);
		} catch (e) {
			console.log("Error ->", e.message);
		}
	};
		getRandomUser();
	}, []);
	
	const handleSearch = () => {
		if (!searched) return;
		const filteredRandomUser = [...randomUser];
		console.log("Random User in seach button", filteredRandomUser);
		let filterList = filteredRandomUser.filter(
			(item) =>
				item.Country.toLowerCase().includes(searched.toLocaleLowerCase()) &&
				item
		);
		setRandomUser([...filterList]);
		setSearched("");
	};

	return (
		<div className='Header'>
			<input
				onChange={handleChange}
				value={searched}
				type='search'
				placeholder='Search User'
			></input>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
}
