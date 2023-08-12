import s from './TopGoods.module.scss';
import { Product } from '../../Product/Product';
import { Container } from '../../Layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory } from '../../../features/goodsSlice';

export const TopGoods = ({ params }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCategory(params));
	}, [params, dispatch]);

	const { goodsList } = useSelector(state => state.goods);


	return (
		<section >
			<Container>
				<h2 className={s.title}>Вам также может понравиться</h2>
				<ul className={s.list}>
					{goodsList?.map(item => <li key={item.id} > <Product  {...item} /> </li>)}
				</ul>
			</Container>
		</section>
	)
}

