import DarkLogo from "../images/demicon_dark.png";
import './Footer.scss'

export default function Footer() {
  return (
		<footer>
            <div className="footerItemContainer">
			<div className='imageConatiner'>
				<img src={DarkLogo} alt='demicon logo footer' />
			</div>
			<div className='socialMediaContainer'>
				<ul className='socialMediaList'>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<p>Join our newsletter</p>
			</div>

            </div>
		</footer>
	);
}
