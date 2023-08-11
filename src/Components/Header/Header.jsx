import { Top } from "./Top/Top";
import { Navigation } from "./Navigation/Navigation";
import s from '../Header/Header.module.scss';
import { Search } from "./Search/Search";

export const Header = () => (
	<header className={s.header}>
		<Top />
		<Search />
		<Navigation />
	</header>
)