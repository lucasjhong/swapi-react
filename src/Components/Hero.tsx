import logo from '../image/sw-logo.png';
import './Hero.scss';

type Props = {};

const Hero = (props: Props) => {
	return (
		<div className='hero'>
			<img src={logo} alt='logo' className='logo' />
		</div>
	);
};

export default Hero;
