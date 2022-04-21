import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { RandomUserContext } from "../utils/Context";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";
import "./SingleCard.scss";

// Destructuring the props for Match params id
const defaultUser = {
	latitude: 0,
	longitude: 0,
};
export default function SingleCard() {
	// Passing location to openStreetMap and dynamically generating the map.
	//Location is random doesn't match with the user address.
	const [singleUser, setSingleUser] = useState(defaultUser);
	const { id } = useParams();
	const { randomUser } = useContext(RandomUserContext);
	const {
		first,
		last,
		picture,
		user,
		gender,
		email,
		city,
		country,
		number,
		street,
		latitude,
		longitude,
	} = singleUser;
	const history = useHistory();
	const [map, setMap] = useState();
	const mapElement = useRef();
	const mapRef = useRef();
	mapRef.current = map;

	useEffect(() => {
		const washingtonLonLat = [longitude, latitude];
		const washingtonWebMercator = fromLonLat(washingtonLonLat);
		mapElement.current.innerHTML = ""; // Making sure all the time we set a new map the HTML is empty
		const initialMap = new Map({
			target: mapElement.current,
			layers: [
				new TileLayer({
					source: new OSM(),
				}),
			],
			view: new View({
				center: washingtonWebMercator,
				zoom: 5,
			}),
		});
		setMap(initialMap);
	}, [longitude, latitude]);

	useEffect(() => {
		setSingleUser(randomUser.find((item) => item.id === id) ?? defaultUser);
	}, [randomUser, id]);
	console.log("Single user in single card", singleUser);
	return (
		<div className='cardContainer'>
			<div className='card'>
				<h4> {`${first} ${last}`}</h4>
				<div className='imgContainer'>
					<img src={`${picture}`} alt={`${first} ${last}`} />
					<div>
						<p>
							<span>User Name :</span> {user}
						</p>
						<p>
							<span>Gender :</span> {gender}
						</p>
						<p>
							<span>Email :</span> {email}
						</p>
					</div>
				</div>
				<div className='cardInfo'>
					<p className='countryInfo'>{`${city}, ${country}`}</p>
					<p>
						<span>Address</span>: {`${street} ${number} `}
					</p>
				</div>
				<div
					style={{ height: "60%", width: "100%" }}
					ref={mapElement}
					className='mapContainer'
				/>
			</div>
			<button className='backButton' onClick={() => history.goBack()}>
				Back
			</button>
		</div>
	);
}
