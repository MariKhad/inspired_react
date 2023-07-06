import { NavLink } from "react-router-dom";
import { catalog } from "../../../assets/const";
import s from '../Footer.module.scss';

export const Categories = () => {


	return (
		<ul className={s.categoryList}>
			{catalog.map((category) => (
				<li key={category.gender}>
					<h3 className={s.categorySubtitle}>
						<NavLink className={s.link} to={category.gender}>{category.title}</NavLink>
					</h3>
					<ul className={s.categorySublist}>
						{category.list.map((item) => (
							<li key={item.link}>
								<NavLink className={s.link} to={`${category.gender}/${item.link}`}>{item.title}</NavLink>
							</li>
						)
						)}
					</ul>
				</li>
			))
			}
		</ul>);
}
