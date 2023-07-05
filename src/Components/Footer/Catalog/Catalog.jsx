import cn from 'classnames'
import s from '../Footer.module.scss'
import { Categories } from './Categories/Categories'

export const Catalog = () => (
	<div className={s.category} >
		<h2 className={cn(s.categoryTitle, s.title)}>каталог</h2>
		<Categories />
	</div>
)
