
import { useEffect } from 'react';
import s from './Count.module.scss';
import cn from 'classnames';
import { useState } from 'react';
export const Count = ({ count, handleIncrement, handleDecrement, classname }) => {

	const [minusClass, setMinusClass] = useState(s.itemDisabled);

	useEffect(() => {
		if (count === 1) {
			setMinusClass(s.itemDisabled);
		} else {
			setMinusClass('');
		}
	}, [count])

	return (
		<div className={cn(s.count, classname)}>
			<button type="button" className={cn(s.item, minusClass)} onClick={handleDecrement}>-</button>
			<span className={cn(s.number, s.item)}>{count}</span>
			<button type="button" className={s.item} onClick={handleIncrement}>+</button>
		</div>
	)

}
