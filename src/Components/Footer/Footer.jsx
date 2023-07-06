import { Container } from "../Layout/Container/Container";
import s from './Footer.module.scss';
import { Social } from "./Social/Social";
import { Contacts } from "./Contacts/Contacts";
import { Copyright } from "./Copyright/Copyright";
import { Development } from "./Development/Development";
import cn from 'classnames';
import { Categories } from "./Categories/Categories";

export const Footer = () => (
	<footer>
		<Container>
			<div className={s.container}>
				<div className={s.category}>
					<h2 className={cn(s.categoryTitle, s.title)}>каталог</h2>
					<Categories />
				</div>
				<Social />
				<Contacts />
				<Copyright />
				<Development />
			</div>
		</Container>
	</footer>
)