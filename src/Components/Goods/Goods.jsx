import s from './Goods.module.scss';
import { Product } from '../Product/Product';
import { Container } from '../Layout/Container/Container';
import { useSelector } from 'react-redux';
import { Pagination } from '../Common/Pagination/Pagination';
import { Preloader } from '../Common/Preloader/Preloader';

export const Goods = ({ title }) => {
	const { goodsList, totalCount, status } = useSelector(state => state.goods);

	return (
		<section className={s.goods} >
			<Container>
				<h2 className={s.title}>
					{title ?? 'новинки'}
					{totalCount > 0 ? <sup>&nbsp;({totalCount})</sup> : ''}</h2>
				{status === 'loading'
					? <Preloader />
					: <>
						<ul className={s.list}>
							{goodsList.map(item => <li key={item.id} > <Product  {...item} /> </li>)}
						</ul>
						<Pagination />
					</>}
			</Container>
		</section>
	)
}