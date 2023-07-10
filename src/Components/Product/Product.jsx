import { NavLink } from 'react-router-dom';
import { API_URL } from '../../assets/const';
import s from './Product.module.scss';
import { ReactComponent as Like } from '../../assets/Like.svg';
import { ColorList } from '../Colorlist/ColorList';

export const Product = ({ id, pic, title, price, colors }) => {


	return (
		<article className={s.product}>
			<NavLink to={`product/${id}`} className={s.link}>
				<img className={s.image} src={`${API_URL}/${pic}`} />
				<h3 className={s.title}>{title}</h3>
			</NavLink>
			<div className={s.row}>
				<p className={s.price}>руб {price}</p>
				<button><Like /></button>
			</div>
			<ColorList colors={colors} />
		</article>
	)

}