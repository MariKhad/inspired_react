/* import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header"; */
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements
}
	from "react-router-dom";
import { Root } from "./routes/Root";
import { MainPage } from "./Components/Pages/MainPage/MainPage";
import { ErrorPage } from "./Components/Pages/ErrorPage/ErrorPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNavigation } from "./features/navigationSlice";
import { fetchColors } from "./features/colorsSlice";
import { ProductPage } from "./Components/Pages/ProductPage/ProductPage";
import { CartPage } from "./Components/Pages/CartPage/CartPage";
import { FavoritePage } from "./Components/Pages/FavoritPage/FavoritPage";
import { SearchPage } from "./Components/Pages/SearchPage/SearchPage";



const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route index element={<MainPage />} />
			<Route path="catalog/:gender/:category?" element={<MainPage />} />
			<Route path="/product/:id" element={<ProductPage />} />
			<Route path="/cart" element={<CartPage />} />
			<Route path="/favorites" element={<FavoritePage />} />
			<Route path="/search" element={<SearchPage />} />
			<Route path="*" element={<ErrorPage />} />
		</Route >
	)
);


export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchNavigation());
		dispatch(fetchColors());
	}, [dispatch]);

	return <RouterProvider router={router}></RouterProvider>

}
