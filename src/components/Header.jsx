import { useEffect, useContext } from "react";
import { RandomUserContext } from "../utils/Context";
import { v4 as uuidv4 } from 'uuid';
import "./Header.scss";

export default function Header() {
	const {
		setRandomUser,
		userLocation,
		toggleLocation,
	} = useContext(RandomUserContext);

	let more = 10;

	useEffect(() => {
	const getRandomUser = async () => {
		const url = `https://randomuser.me/api/?results=${more}`;

		try {
			const data = await fetch(url);
			const response = await data.json();
			const newRandomUserObj = [...response.results];
	
			const dataTable = newRandomUserObj.map((item) => {
				return {
					id : uuidv4(),
					First: item.name.first,
					Last: item.name.last,
					Gender: item.gender,
					Email: item.email,
					City: item.location.city,
					Country: item.location.country,
					Street: item.location.street.name,
					Number: item.location.street.number,
					Latitude: item.location.coordinates.latitude,
					Longitude: item.location.coordinates.longitude,
					View: "View",
				};
			});
			setRandomUser([...dataTable]);

		} catch (e) {
			console.log("Error ->", e.message);
		}
	};
		getRandomUser();

	}, []);

	const handleSearch = (event) => toggleLocation(event.target.value);

	return (
		<div className='Header'>
			<input
				onChange={handleSearch}
				value={userLocation}
				type='search'
				placeholder='Type to filter by country'
			/>
		</div>
	);
}
