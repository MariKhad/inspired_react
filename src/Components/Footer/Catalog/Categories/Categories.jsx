import catalog from "../../../../assets/const";
import s from '../../Footer.module.scss';

export const Categories = () => {
	const renderCategories = (catalog) => {
		let content = [];
		content.push(
			Object.keys(catalog).map((list, index) => {
				return (
					<li key={index + 20}>
						<h3 key={index + 15} className={s.categorySubtitle}>{Object.keys(catalog)[index]}</h3>
						<ul key={index + 25} className={s.categorySublist}>
							{catalog[list].map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</li>
				)
			}
			));
		return content;
	}

	return <ul className={s.categoryList}>{renderCategories(catalog)}</ul>

}