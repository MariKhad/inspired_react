import { NavLink, useLocation, useParams } from 'react-router-dom';
import s from './Pagintaion.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { fetchCategory, setPage } from '../../../features/goodsSlice';
import { useEffect } from 'react';



export const Pagination = () => {
	const pathname = useLocation().pathname;
	const { page, pages } = useSelector(state => state.goods);
	const dispatch = useDispatch();

	const { gender, category } = useParams();

	const param = { gender, category };

	const handlePageChange = newPage => {
		dispatch(setPage(newPage))
	}

	const handlePrevPage = () => {
		if (page > 1) {
			handlePageChange(page - 1);
		}
	}
	const handleNextPage = () => {
		if (page < pages) {
			handlePageChange(page + 1);
		}
	}


	const renderPaginationItems = () => {
		const paginationItems = [];

		let startPage = Math.max(1, page - 1);
		let endPage = Math.min(startPage + 2, pages);
		if (page === pages && page !== 1) {
			startPage = startPage - 1;
		}


		for (let i = startPage; i <= endPage; i++) {
			paginationItems.push(
				<li key={i} className={s.item}>
					<NavLink
						to={`${pathname}?page=${i}`}
						className={cn(s.link, i === +page && page === 1 && s.linkActive)}
						onClick={() => handlePageChange(i)}>
						{i}
					</NavLink>
				</li>
			)
		}
		return paginationItems;
	}

	if (pages > 1) {
		return (<div className={s.pagination}>
			<NavLink to={`${pathname}?page=${page - 1}`}
				className={cn(s.arrow, (page === 1) ? s.disabled : '')}
				onClick={handlePrevPage}>
				&lt;
			</NavLink>
			<ul className={s.list}>
				{renderPaginationItems()}
			</ul>
			<NavLink to={`${pathname}?page=${page + 1}`}
				className={cn(s.arrow, (page === pages && page !== 1) ? s.disabled : '')}
				onClick={handleNextPage}
			>&gt;
			</NavLink>
		</div>
		)
	} else {
		return (
			<div className={s.pagination}>
				<ul className={s.list}>
					{renderPaginationItems()}
				</ul>
			</div >
		)
	}
}