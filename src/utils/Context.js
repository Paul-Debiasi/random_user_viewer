import { createContext, useState, useEffect } from "react";
export const RandomUserContext = createContext();

// Managing the states, it will allow me to have to the props around the app

function RandomUserContextProvider({ children }) {
	const [randomUser, setRandomUser] = useState([]);
	const [user, setUser] = useState([]);
	const [userLocation, toggleLocation] = useState("");

	let more = 1000;
	// We moved the fetching in a component that is always rendered in this way we always have random user array
	const getRandomUser = async () => {
		const url = `https://randomuser.me/api/?results=${more}&seed=foobar`;

		try {
			const data = await fetch(url);
			const response = await data.json();
			const newRandomUserObj = [...response.results];
			// Creating a new object with the key and value needed to populate the table, or the single user card, using uuid to create new ids.
			const dataTable = newRandomUserObj.map((item) => {
				return {
					id: item.login.uuid,
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
					user: item.login.username,
					view: "View",
				};
			});
			setRandomUser([...dataTable]);
		} catch (e) {
			console.log("Error ->", e.message);
		}
	};
	useEffect(() => {
		getRandomUser();
	}, []);

	return (
		<RandomUserContext.Provider
			value={{
				randomUser,
				setRandomUser,
				user,
				setUser,
				userLocation,
				toggleLocation,
			}}
		>
			{children}
		</RandomUserContext.Provider>
	);
}

export default RandomUserContextProvider;
