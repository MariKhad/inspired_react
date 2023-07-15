import { useDispatch, useSelector } from "react-redux"
import { Goods } from "../Goods/Goods"
import { Container } from "../Layout/Container/Container"
import { useEffect } from "react";
import { fetchCategory, setPage } from "../../features/goodsSlice";
import { useLocation } from "react-router-dom";
import { usePageFromSearchParams } from "../../hooks/usePageFromSearchParams";

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
			<Goods title='Избранное' />
		</Container>
	)
}