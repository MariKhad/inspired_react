import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory, fetchGender } from '../../features/goodsSlice';
import { setActiveGender } from '../../features/navigationSlice';
import { Goods } from '../Goods/Goods';
import { useParams } from 'react-router-dom';
import { Banner } from './Banner/Banner';

export const MainPage = () => {

	const dispatch = useDispatch();
	const { gender, category } = useParams();
	const { activeGender, categories } = useSelector(state => state.navigation);

	const genderData = categories[activeGender];
	const categoryData = genderData?.list.find(item => item.slug === category)

	useEffect(() => {
		dispatch(setActiveGender(gender));
	}, [gender, dispatch]);


	useEffect(() => {
		if (gender && category) {
			dispatch(fetchCategory({ gender, category }))
			return;
		}
		if (gender) {
			dispatch(fetchGender(gender));
			return
		}
		if (!gender) {
			dispatch(fetchGender('women'))
			window.location.href = 'catalog/women'
		}
	}, [gender, category, dispatch]);


	if (!category) {
		return (
			<>
				<Banner data={genderData?.banner} />
				<Goods categoryData={categoryData} />
			</>
		)
	} else {
		return (
			<>
				<Goods categoryData={categoryData} />
			</>
		)
	}
};
