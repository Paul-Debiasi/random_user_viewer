import DarkLogo from "../images/demicon_dark.png";

import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.scss";

export default function Footer() {
	return (
		<footer>
			<div className='footerItemContainer'>
				<div className='imageConatiner'>
					<img src={DarkLogo} alt='demicon logo footer' />
				</div>
				<div className='socialMediaContainer'>
					<ul className='socialMediaList'>
						<a
							href='https://www.facebook.com/demicon.Atlassian/'
							target='_blank'
							rel='noreferrer'
						>
							<FaFacebookF className='icons' />
						</a>
						<a
							href='https://twitter.com/_demicon'
							target='_blank'
							rel='noreferrer'
						>
							<FaTwitter className='icons' />
						</a>
						<a
							href='https://www.instagram.com/demicon_gmbh/'
							target='_blank'
							rel='noreferrer'
						>
							<FaInstagram className='icons' />
						</a>
						<a
							href='https://de.linkedin.com/company/demicon-gmbh'
							target='_blank'
							rel='noreferrer'
						>
							<FaLinkedinIn className='icons' />
						</a>
					</ul>
					<p>Join our newsletter</p>
				</div>
			</div>
		</footer>
	);
}
