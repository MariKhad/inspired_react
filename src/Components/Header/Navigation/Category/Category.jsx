import cn from "classnames";
import s from './Category.module.scss';
import { NavLink, useLocation } from "react-router-dom";
import { catalog } from "../../../../assets/const";






export const Category = () => {
	const url = useLocation().pathname;

	let gender = '';
	if (url === '/') {
		window.location.href = `women`;
	}

	const regexp = '/women|men|children';
	gender = useLocation().pathname.match(regexp)[0]?.replace(/^\//, '');
	const category = catalog.find(category => category.gender === (gender) ? gender : 'women');
	return (
		<ul className={s.category}>
			{category.list.map((item) => (
				<li key={item.link} className={s.item}>
					<NavLink
						className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
						to={`${gender}/${item.link}`}>{item.title}
					</NavLink>
				</li>
			))
			}
		</ul>
	)
}