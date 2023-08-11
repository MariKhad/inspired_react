import { useDispatch, useSelector } from "react-redux"
import { Goods } from "../Goods/Goods"
import { Container } from "../Layout/Container/Container"
import { fetchAll } from "../../features/goodsSlice";
import s from './SearchPage.module.scss';
import { useSearchParam } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useEffect } from "react";

export const SearchPage = () => {
	const dispatch = useDispatch();
	const { goodsList } = useSelector(state => state.goods);

	const [searchParams] = useSearchParam();

	useEffect(() => {
		const search = searchParams.get('q');
		const params = { search };
		dispatch(fetchAll(params));
	}, [searchParams, dispatch])

	return (
		<Container>
			{goodsList.length ?
				<Goods title='Результаты поиска' />
				:
				<div className={s.empty}>
					<h3 className={s.subtitle}>Ничего не найдено по вашему запросу {searchParams.get('q')}</h3>
					<NavLink to='/' className={s.home}>На главную</NavLink>
				</div>}
		</Container>
	)
}