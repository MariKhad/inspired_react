import { Container } from "../../Layout/Container/Container";
import { useSelector, useDispatch } from 'react-redux';
import s from './ErrorPage.module.scss';
import { useEffect } from "react";
import { useLocation, useNavigate, useRouteError } from 'react-router-dom';
import { fetchColors } from "../../../features/colorsSlice";
import { fetchNavigation } from "../../../features/navigationSlice";
import { useRef } from "react";


export const ErrorPage = () => {
	const error = useRouteError();
	const status = useSelector(state => state.statusServer)
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const timerIdRef = useRef(null);

	/* 	useEffect(() => {
			if (status && location.pathname === "/404") {
				navigate("/");
			}
		}); */

	useEffect(() => {
		if (!status && location.pathname === '/404') {
			clearInterval(timerIdRef.current);

			timerIdRef.current = setInterval(() => {
				dispatch(fetchColors());
				dispatch(fetchNavigation());
			}, 2000)
		}
		return () => {
			clearInterval(timerIdRef.current);
		}
	}, [status, location, dispatch]);

	return (
		<Container className={s.error}>
			<h2 className={s.title}>Произошла ошибка, попробуйте зайти позднее</h2>
			<p className={s.message}>{error?.message ?? 'Неизвестная ошибка'}</p>
		</Container>
	)
}

