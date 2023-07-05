import s from '../Footer.module.scss';

export const Contacts = () => (
	<div className={s.contacts}>
		<a className={s.link} href="mailTo:Inspired@gmail.com">Inspired@gmail.com</a>
		<a className={s.link} href="tel:8 930 490 26 20">8 930 490 26 20</a>
	</div>
)