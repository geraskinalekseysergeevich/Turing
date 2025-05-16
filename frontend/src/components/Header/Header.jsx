import logo from '../../static/images/logo.png'
import classes from './Header.module.css'

const Header = ({ resetStates }) => {
	return (
		<div className={classes.header__container}>
			<div className={classes.logo}>
				<img src={logo} alt="logoicon" onClick={() => resetStates()} />
			</div>
		</div>
	)
}

export default Header
