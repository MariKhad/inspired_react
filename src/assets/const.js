
export const API_URL = 'http://localhost:8024';

export const GOODS_URL = `${API_URL}/api/goods`;
export const CATEGORY_URL = `${API_URL}/api/categories`;
export const COLORS_URL = `${API_URL}/api/colors`;
//const GOODS_URL = `${API_URL}/api/goods?[param]`;


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
		gender: 'kids',
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
