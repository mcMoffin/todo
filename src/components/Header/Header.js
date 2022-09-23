import $ from 'jquery';
import Btn from '../Button/Button';

const Header = () => {
	function toggleMode() {
		$('body').toggleClass('light');
		$('.color-mode').toggleClass('light');
	}

	return (
		<header className="header">
			<h1>Todo</h1>
			<Btn className="color-mode" onClick={toggleMode}></Btn>
		</header>
	);
};

export default Header;
