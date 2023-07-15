import s from './Goods.module.scss';
import { Product } from '../Product/Product';
import { Container } from '../Layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from './Pagination/Pagination';
import { usePageFromSearchParams } from '../../hooks/usePageFromSearchParams';
import { useEffect } from 'react';
import { fetchCategory, setPage } from '../../features/goodsSlice';
import { useParams } from 'react-router-dom';

export const Goods = ({ title }) => {
	const dispatch = useDispatch();
	const { goodsList } = useSelector(state => state.goods);
	const page = usePageFromSearchParams(dispatch);
	const { gender, category } = useParams();


	useEffect(() => {
		const param = { gender, category };
		if (page) {
			param.page = page;
		}
		dispatch(fetchCategory(param))
	}, [dispatch, page, gender, category]);



	return (
		<section className={s.goods} >
			<Container>
				<h2 className={s.title}>{title ?? 'новинки'}</h2>
				<ul className={s.list}>
					{goodsList.map(item => <li key={item.id} > <Product  {...item} /> </li>)}
				</ul>
				<Pagination />
			</Container>
		</section>
	)
}