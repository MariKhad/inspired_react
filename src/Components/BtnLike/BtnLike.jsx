import s from './BtnLike.module.scss'
import { ReactComponent as LikeSVG } from '../../assets/like.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../features/favoritesSlice';
import cn from 'classnames';

export const BtnLike = ({ id }) => {
	const dispatch = useDispatch();
	const isFavorite = useSelector((state) => state.favorites.includes(id));


	const handleToggleFavorite = () => {
		if (isFavorite) {
			dispatch(removeFromFavorites({ id }))
		} else {
			dispatch(addToFavorites({ id }))
		}
	}

	return (
		<button
			className={cn(s.like, isFavorite ? s.active : '')}
			type='button'
			aria-label='Добавить в избранное'
			onClick={handleToggleFavorite}
		><LikeSVG /></button>
	)
}