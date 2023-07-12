import { useState } from 'react';
import s from './ProductSize.module.scss';


export const ProductSize = ({ sizeList }) => {

	const [selectedSize, setSelectedSize] = useState('');

	const handleSizeChange = (e) => {
		setSelectedSize(e.target.value)
		console.log('selectedSize: ', selectedSize);
	}

	return (
		<div className={s.size}>
			<p className={s.title}>Цвет</p>
			<ul className={s.list}>
				{sizeList?.map((size, i) => {
					return (
						<li key={i} >
							<label className={s.item}>
								<input
									className={s.input}
									type='radio'
									name='size'
									value={size}
									checked={(selectedSize === size) ? true : false}
									onChange={handleSizeChange}
								/><span className={s.check}>{size}</span>
							</label>
						</li>
					)
				})}
			</ul>
		</div>
	)
}