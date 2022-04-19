import { useEffect, useContext } from "react";
import { RandomUserContext } from "../utils/Context";
import { v4 as uuidv4 } from "uuid";
import "./Header.scss";
import Logo from "../images/demicon_logo.png";
import { useHistory } from "react-router-dom";

export default function Header() {
	const history = useHistory();
	const { setRandomUser, userLocation, toggleLocation } =
		useContext(RandomUserContext);

	let more = 1000;

	const getRandomUser = async () => {
		const url = `https://randomuser.me/api/?results=${more}&seed=foobar`;

		try {
			const data = await fetch(url);
			const response = await data.json();
			const newRandomUserObj = [...response.results];
			const dataTable = newRandomUserObj.map((item) => {
				return {
					id: uuidv4(),
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

	const handleSearch = (event) => toggleLocation(event.target.value);

	return (
		<div className='Header'>
			<div className='Header_logo_input'>
				<div>
					<img onClick={() => history.push("/")} src={Logo} alt='' />
				</div>
				<input
					className='input-search'
					onChange={handleSearch}
					value={userLocation}
					type='search'
					placeholder='Filter by country'
				/>
			</div>
		</div>
	);
}
