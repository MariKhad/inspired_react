/* export const catalog = {
	'Жeнщины': ['Бюстгальтеры',
		'Трусы',
		'Носки',
		'Халаты',
		'Теробелье',
		'Пижамы'],
	'Мужчины': ['Трусы',
		'Носки',
		'Халаты',
		'Термобелье'],
	'Дети': ['Трусы',
		'Носки'],
	'Младенцы': ['Трусы',
		'Носки',
		'Термобелье',
		'Боди']
} */

export const catalog = [
	{
		gender: 'women',
		title: 'Женщины',
		list: [
			{ link: 'bra', title: 'Бюстгальтеры' },
			{ link: 'tights', title: 'Колготки' },
			{ link: 'combo', title: 'Комбинации', },
			{ link: 'underwear', title: 'Трусы' },
			{ link: 'socks', title: 'Носки' },
			{ link: 'bathrobes', title: 'Халаты' },
			{ link: 'thermal', title: 'Теробелье', },
			{ link: 'corset', title: 'Корсеты' },
		]
	},

	{
		gender: 'men',
		title: 'Мужчины',
		list: [
			{ link: 'underwear', title: 'Трусы', },
			{ link: 'socks', title: 'Носки', },
			{ link: 'bathrobes', title: 'Халаты', },
			{ link: 'thermal', title: 'Теробелье', },
			{ link: 'pijamas', title: 'Пижамы' },
		]
	},

	{
		gender: 'children',
		title: 'Дети',
		list: [
			{ link: 'underwear', title: 'Трусы', },
			{ link: 'socks', title: 'Носки', },
			{ link: 'bathrobes', title: 'Халаты', },
			{ link: 'thermal', title: 'Теробелье', },
			{ link: 'pijamas', title: 'Пижамы' },
			{ link: 'tights', title: 'Колготки' },
		]
	}
]
