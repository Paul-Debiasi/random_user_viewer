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
			console.log(response.results)
			const newRandomUserObj = [...response.results];
	
			const dataTable = newRandomUserObj.map((item) => {
				return {
					id : uuidv4(),
					first: item.name.first,
					last: item.name.last,
					gender: item.gender,
					email: item.email,
					city: item.location.city,
					country: item.location.country,
					street: item.location.street.name,
					number: item.location.street.number,
					latitude: item.location.coordinates.latitude,
					longitude: item.location.coordinates.longitude,
					picture: item.picture.large,
					view: "View",
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
