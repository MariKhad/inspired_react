import { NavLink, useLocation, useParams } from 'react-router-dom';
import s from './Pagintaion.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { useEffect, useState } from 'react';



export const Pagination = () => {
	const [pagePagination, setPagePagination] = useState('');
	const pathname = useLocation().pathname;
	const { page, pages } = useSelector(state => state.goods);

	useEffect(() => {
		setPagePagination(page)
	}, [page]);

	const { gender, category } = useParams();

	const param = { gender, category };

	const handlePageChange = newPage => {
		setPagePagination(newPage)
	}

	const handlePrevPage = () => {
		if (pagePagination > 1) {
			handlePageChange(pagePagination - 1);
		}
	}
	const handleNextPage = () => {
		if (pagePagination < pages) {
			handlePageChange(pagePagination + 1);
		}
	}


	const renderPaginationItems = () => {
		const paginationItems = [];

		let startPage = pagePagination === pages && pages > 2
			? pagePagination - 2
			: Math.max(1, pagePagination - 1);
		let endPage = Math.min(startPage + 2, pages);



		for (let i = startPage; i <= endPage; i++) {
			paginationItems.push(
				<li key={i} className={s.item}>
					<NavLink
						to={`${pathname}?page=${i}`}
						className={cn(s.link, i === pagePagination ?? s.linkActive)}
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
			<button to={`${pathname}?page=${pagePagination - 1}`}
				className={s.arrow}
				onClick={handlePrevPage}
				disabled={pagePagination <= 2}>
				&lt;
			</button>
			<ul className={s.list}>
				{renderPaginationItems()}
			</ul>
			<button to={`${pathname}?page=${pagePagination + 1}`}
				className={s.arrow}
				onClick={handleNextPage}
				disabled={pagePagination === pages && pagePagination >= pages - 1}
			>&gt;
			</button>
		</div >
		)
	}
}