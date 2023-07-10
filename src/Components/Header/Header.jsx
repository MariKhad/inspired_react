import { Top } from "./Top/Top";
import { Navigation } from "./Navigation/Navigation";
import s from '../Header/Header.module.scss';

export const Header = () => (
	<header className={s.header}>
		<Top />
		<Navigation />
	</header>
)