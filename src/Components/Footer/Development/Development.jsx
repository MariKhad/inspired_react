import s from '../Footer.module.scss';

export const Development = () => (
	<div className={s.development}>
		<ul className={s.developmentList}>
			<li>
				Designer: <a className={s.link} href="https://t.me/Marshmallowww" target="_blank" rel='noreferrer'>Anastasia Ilina</a>
			</li>
			<li>
				Developer: <a className={s.link} href="https://t.me/bzzzuka" target="_blank" rel='noreferrer'>Marina Khadieva</a>
			</li>
		</ul>
	</div>
)