import { NavLink } from "react-router-dom";
import { Container } from "../../Layout/Container/Container"
import s from './Cart.module.scss'
import { CartItem } from "./CartItem/CartItem";

export const Cart = ({ goodsList, cartItems }) => {
	const totalPrice = cartItems?.reduce((sum, item) => {
		const product = goodsList.find(product => product.id === item.id)
		if (product) {
			return sum + (product.price * item.count);
		} else {
			return sum;
		}
	}, 0);

	return (
		<div className={s.cart}>
			<Container>
				<p className={s.title}>Корзина</p>
				{goodsList.length ?
					<ul className={s.list}>
						{cartItems?.map(item => {
							return (
								<li key={`${item.id}-${item.size}-${item.color}`} className={s.item}><CartItem {...item} goodsList={goodsList} />
								</li>
							)
						})}
					</ul>
					:
					<div className={s.empty}>
						<h3 className={s.subtitle}>В корзине пусто</h3>
						<NavLink to='/' className={s.home}>На главную</NavLink>
					</div>
				}
				<div className={s.total}>
					<p>Итого</p>
					<p>руб {totalPrice}</p>
				</div>
			</Container>
		</div >
	)
}
