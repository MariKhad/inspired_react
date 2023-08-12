import { useDispatch, useSelector } from "react-redux"
import { Goods } from "../../Goods/Goods"
import { Container } from "../../Layout/Container/Container"
import { useEffect } from "react";
import { fetchCategory } from "../../../features/goodsSlice";
import { usePageFromSearchParams } from "../../../hooks/usePageFromSearchParams";
import s from './FavoritePage.module.scss'
import { NavLink } from "react-router-dom";

export const FavoritePage = () => {
	const dispatch = useDispatch();
	const favorites = useSelector(state => state.favorites);

	const page = usePageFromSearchParams(dispatch);

	useEffect(() => {
		const param = { list: favorites };
		if (page) {
			param.page = page;
		}
		dispatch(fetchCategory(param))
	}, [dispatch, favorites, page]);

	return (
		<Container>
			{favorites.length ?
				<Goods title='Избранное' />
				:
				<div className={s.empty}>
					<h3 className={s.subtitle}>В избранном пока пусто</h3>
					<NavLink to='/' className={s.home}>На главную</NavLink>
				</div>}
		</Container>
	)
}