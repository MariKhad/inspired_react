import s from './Count.module.scss';
import cn from 'classnames';



export const Count = ({ count, handleIncrement, handleDecrement, className }) => {

	return (
		<div className={cn(s.count, className)}>
			<button type="button" className={s.item} onClick={handleDecrement}>-</button>
			<span className={cn(s.number, s.item)}>{count}</span>
			<button type="button" className={s.item} onClick={handleIncrement}>+</button>
		</div>
	)

}
