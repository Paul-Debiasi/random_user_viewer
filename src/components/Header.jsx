import { useContext } from "react";
import { RandomUserContext } from "../utils/Context";
import "./Header.scss";
import Logo from "../images/demicon_logo.png";
import { useHistory } from "react-router-dom";

export default function Header() {
	const history = useHistory();
	const { userLocation, toggleLocation } = useContext(RandomUserContext);
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
