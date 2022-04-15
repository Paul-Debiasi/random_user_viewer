import {useHistory} from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './SingleCard.scss'
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

export default function SingleCard({ first, last, latitude , longitude , city, country, street,number,picture }) {
const  history = useHistory()

function createIcon(url) {
	return new L.Icon({
		iconUrl: url,
	});
}

	return (
		<div className='card-container'>
      <span>{[latitude, longitude]}</span>
			<h4> {`${first} ${last}`}</h4>
			<img src={`${picture}`} alt={`${first} ${last}`} />
			<MapContainer
				className='leaflet-container'
				center={[latitude, longitude]}
				zoom={5}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker
					position={[latitude, longitude]}
					icon={createIcon(
						"https://user-images.githubusercontent.com/1596072/85960867-3baf9700-b9af-11ea-854e-7ef6e656d447.png"
					)}
				/>
				
			</MapContainer>
			<p>{`${city} - ${country}`}</p>
			<p>{`Address: ${street} ${number} `}</p>
			<button onClick={() => history.push("/")}>Back</button>
		</div>
	);
}
