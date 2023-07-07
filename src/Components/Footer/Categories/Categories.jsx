import { NavLink } from "react-router-dom";
import s from '../Footer.module.scss';
import { useSelector } from "react-redux";

export const Categories = () => {
	const { activeGender, genderList, categories } = useSelector(state => state.navigation)

	return (
		<ul className={s.categoryList}>
			{genderList.map((gender) => (
				<li key={gender}>
					<h3 className={s.categorySubtitle}>
						<NavLink className={s.link} to={gender}>{categories[gender].title}</NavLink>
					</h3>
					<ul className={s.categorySublist}>
						{categories[gender].list.map((item) => (
							<li key={item.slug}>
								<NavLink className={s.link} to={`${activeGender}/${item.slug}`}>{item.title}</NavLink>
							</li>
						)
						)}
					</ul>
				</li>
			))
			}
		</ul>);
}
