import { useSelector } from 'react-redux';
import s from './ColorList.module.scss';
import { Color } from './Color/Color';

export const ColorList = ({ colors }) => {
	const { colorList } = useSelector(state => state.colors);
	return (
		<ul className={s.colorList}>
			{colors?.map((id, i) => {
				const color = colorList?.find(color => color.id === id);
				document.body.style.setProperty('--data-color', color?.code);
				console.log('color?.code: ', color?.code);

				return (
					<Color key={id} color={color?.code} check={!i} />
				)
			})}
		</ul>
	)
}