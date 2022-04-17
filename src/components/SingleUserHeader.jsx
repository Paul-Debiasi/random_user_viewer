import { useHistory } from "react-router-dom";
import Logo from "../images/demicon_logo.png";
import "./SingleUserHeader.scss";

export default function SingleUserHeader() {
	const history = useHistory();
	return (
		<div className='HeaderSingle'>
			<div className='HeaderLogo'>
				<div>
					<img onClick={() => history.push("/")} src={Logo} alt='' />
				</div>
			</div>
		</div>
	);
}
