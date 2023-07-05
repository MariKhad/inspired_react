import { Container } from "../Layout/Container/Container";
import s from './Footer.module.scss';
import { Catalog } from "./Catalog/Catalog";
import { Social } from "./Social/Social";
import { Contacts } from "./Contacts/Contacts";
import { Copyright } from "./Copyright/Copyright";
import { Development } from "./Development/Development";

export const Footer = () => (
	<footer>
		<Container className={s.container}>
			<Catalog />
			<Social />
			<Contacts />
			<Copyright />
			<Development />
		</Container>
	</footer>
)