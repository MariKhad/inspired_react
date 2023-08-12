import { Container } from '../../Layout/Container/Container'
import s from './Top.module.scss'
import cn from 'classnames';
import logo from '/src/assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LikeSVG } from '../../../assets/like.svg';
import { ReactComponent as SearchSVG } from '../../../assets/search.svg';
import { ReactComponent as CartSVG } from '../../../assets/cart.svg';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSearch } from '../../../features/searchSlice';



export const Top = () => {

	const { countItems } = useSelector(state => state.cart);
	const dispatch = useDispatch();

	const handleOpenSearch = () => {
		dispatch(toggleSearch());
	}

	return (
		<div className={s.top}>
			<Container className={s.container}>
				<a className={cn(s.link, s.phone)} href='tel:8 930 490 26 20'>8 930 490 26 20</a>
				<NavLink className={s.logo} to='/'>
					<img src={logo} alt='Логотип Inspired' />
				</NavLink>
				<div className={s.navigation}>
					<ul className={s.navList}>
						<li className={s.navItem}>
							<button className={s.link} onClick={handleOpenSearch}>
								<SearchSVG />
							</button>
						</li>
						<li className={s.navItem}>
							<NavLink to='/cart' className={s.link}>
								<CartSVG />
								<span className={s.linkCount}>{countItems}</span>
							</NavLink>
						</li>
						<li className={s.navItem}>
							<NavLink to='/favorites' className={cn(s.link, s.like)}>
								<LikeSVG />
							</NavLink>
						</li>
					</ul>
				</div>
			</Container>
		</div>

	)
};