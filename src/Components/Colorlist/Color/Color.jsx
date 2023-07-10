import { useRef } from 'react';
import s from './Color.module.scss';

export const Color = ({ color, check }) => {

	const refColor = useRef(color);

	document.body.style.setProperty('--data-color', refColor)
	const checked = (check) ? 'false' : 'true';
	console.log('checked: ', checked);


	return (
		<li>
			<input type="radio" name="color" className={s.color} value="color" checked={checked} onChange={!checked} />
		</li>
	)
}

