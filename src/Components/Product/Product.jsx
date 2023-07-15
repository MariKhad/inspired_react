import { NavLink } from 'react-router-dom';
import { API_URL } from '../../assets/const';
import s from './Product.module.scss';
import { ColorList } from '../Colorlist/ColorList';
import { BtnLike } from '../BtnLike/BtnLike';

export const Product = ({ id, pic, title, price, colors, description }) => {


	return (
		<article className={s.product}>
			<NavLink to={`/product/${id}`} className={s.link}>
				<img className={s.image} src={`${API_URL}/${pic}`} alt={`${title} ${description}`} />
				<h3 className={s.title}>{title}</h3>
			</NavLink>
			<div className={s.row}>
				<p className={s.price}>руб {price}</p>
				<BtnLike id={id} />
			</div>
			<ColorList colors={colors} />
		</article>
	)

}