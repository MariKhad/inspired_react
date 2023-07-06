import { NavLink } from 'react-router-dom';
import s from './Gender.module.scss';
import cn from 'classnames';
import { catalog } from '../../../../assets/const';


export const Gender = () => (
	<ul className={s.gender}>
		{catalog.map((item) => (
			<li key={item.gender} className={s.item}>
				<NavLink
					className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
					to={item.gender}>{item.title}
				</NavLink>
			</li>
		))}
	</ul>
)