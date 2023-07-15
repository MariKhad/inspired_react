import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Layout/Container/Container";
import s from './ProductPage.module.scss';
import cn from 'classnames';
import { fetchProduct } from "../../features/productSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../assets/const";
import { ColorList } from "../Colorlist/ColorList";
import { Count } from "../Count/Count";
import { ProductSize } from "./ProductSize/ProductSize";
import { TopGoods } from "../TopGoods/TopGoods";
import { setActiveGender } from "../../features/navigationSlice";
import { useMedia } from "react-use";
import { BtnLike } from "../BtnLike/BtnLike";

export const ProductPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const { product } = useSelector(state => state.product);
	const [count, setCount] = useState(1);
	const [goodsCount, setGoodsCount] = useState(4);
	const isLowerBound = useMedia('(min-width: 940px)');
	const isUpperBound = useMedia('(max-width: 1239px)');

	useEffect(() => {
		dispatch(setActiveGender(product?.gender));
	}, [product, dispatch]);

	useEffect(() => {
		if (isLowerBound && isUpperBound) {
			setGoodsCount(3)
		} else {
			setGoodsCount(4)
		}
	}, [isLowerBound, isUpperBound]);


	const params = {
		gender: product?.gender,
		category: product?.category,
		count: goodsCount,
		top: true,
		exclude: product?.id,
	}
	const handleIncrement = () => {
		setCount(prevCount => prevCount + 1)
	}

	const handleDecrement = () => {
		if (count > 1) {
			setCount(prevCount => prevCount - 1);
		}
	}

	const [selectedColor, setSelectedColor] = useState('');

	const handleColorChange = (e) => {
		setSelectedColor(e.target.value)
		console.log('selectedColor: ', selectedColor);
	}

	useEffect(() => {
		dispatch(fetchProduct(id))
	}, [id, dispatch]);

	return (
		<>
			<section className={s.card} >
				<Container className={s.container}>
					<img src={`${API_URL}/${product?.pic}`} alt={`${product?.title}`} className={s.image} />
					<form className={s.content}>
						<h2 className={s.title}>{product.title}</h2>
						<p className={s.price}>руб {product.price}</p>
						<div className={s.vendorCode}>
							<span className={s.subtitle}>Артикул</span>
							<span className={s.id}>{product.id}</span>
						</div>
						<div className={s.color}>
							<p className={cn(s.subtitle, s.colorTitle)}>Цвет</p>
							<ColorList colors={product.colors}
								selectedColor={selectedColor}
								handleColorChange={handleColorChange}
							/>
						</div>
						<ProductSize sizeList={product.size} />
						<div className={s.description}>
							<p className={cn(s.subtitle, s.descriptionTitle)}>Описание</p>
							<p className={s.descriptionText}>{product.description}</p>
						</div>
						<div className={s.control}>
							<Count
								count={count}
								handleIncrement={handleIncrement}
								handleDecrement={handleDecrement}
							/>
							<button type='submit' className={s.addCart}>в корзину</button>
							<BtnLike id={id} />
						</div>
					</form>
				</Container>
			</section>
			<TopGoods params={params} />
		</>
	)
}

{/* 	<p className={cn(s.subtitle, s.sizeTitle)}>Размер</p><div className={s.sizeList}></div> */ }