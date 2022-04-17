import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";
import "./SingleCard.scss";

export default function SingleCard({
	first,
	last,
	latitude = 0,
	longitude = 0,
	city,
	country,
	street,
	number,
	picture,
	email,
	user,
	gender,
}) {
	const washingtonLonLat = [longitude, latitude];
	console.log(washingtonLonLat);
	const washingtonWebMercator = fromLonLat(washingtonLonLat);
	const history = useHistory();
	const [map, setMap] = useState();
	const mapElement = useRef();
	const mapRef = useRef();
	mapRef.current = map;

	useEffect(() => {
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
	}, []);
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
					<p className='countryInfo'>
						{`${city}, ${country}`}
						
					</p>
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
			<button className='backButton' onClick={() => history.push("/")}>
				Back
			</button>
		</div>
	);
}
