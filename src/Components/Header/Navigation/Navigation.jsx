import { useDispatch } from "react-redux";
import { Container } from "../../Layout/Container/Container";
import { Category } from "./Category/Category";
import { Gender } from './Gender/Gender';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setActiveGender } from "../../../features/navigationSlice.js"



export const Navigation = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const gender = location.pathname.split('/')[1] || 'women';

	useEffect(() => {
		dispatch(setActiveGender(gender));
	}, [gender, dispatch])

	/* useEffect(() => {
		const gender = location.pathname.split('/')[2] || '';
		dispatch(setActiveGender(gender));
	}, [dispatch, location.pathname]) */

	return (
		<nav>
			<Container>
				<Gender />
				<Category />
			</Container>
		</nav>
	)
};