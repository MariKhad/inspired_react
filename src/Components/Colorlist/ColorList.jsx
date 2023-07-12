import { useSelector } from 'react-redux';
import s from './ColorList.module.scss';
import { Color } from './Color/Color';
import { useRef } from 'react';
import cn from 'classnames';
import { ColorLabel } from './ColorLabel/ColorLabel';

export const ColorList = ({ colors, selectedColor, handleColorChange }) => {
	const { colorList } = useSelector(state => state.colors);


	return handleColorChange ? (
		<div className={s.colorList}>
			{colors?.map((id, i) => {
				const color = colorList?.find(color => color.id === id);
				return (
					<ColorLabel
						key={id}
						color={color}
						check={!i}
						handleColorChange={handleColorChange}
						selectedColor={selectedColor} />
				)
			})}
		</div>
	)
		: (
			<ul className={s.colorList}>
				{colors?.map((id, i) => {
					const color = colorList?.find(color => color.id === id);
					return (
						<Color key={id} color={color?.code} check={!i} />
					)
				})}
			</ul>
		)
}