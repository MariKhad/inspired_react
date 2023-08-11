import { Container } from '../../Layout/Container/Container';
import { useSelector, useDispatch } from "react-redux";
import s from './Search.module.scss';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toggleSearch } from '../../../features/searchSlice';


export const Search = () => {
	const { openSearch } = useSelector(state => state.search);

	const initialValues = {
		search: '',
	}

	const validationSchema = Yup.object({
		search: Yup.string().required('Заполните поле'),
	})

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleSubmit = ({ search }, { resetForm }) => {
		if (search) {
			navigate(`search?q=${search}`);
			resetForm();
			dispatch(toggleSearch(false));
		}
	}



	return (
		openSearch && (
			<div className={s.search}>
				<Container>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}>
						<Form className={s.form}>
							<Field type="search" name="search" className={s.input} placeholder="Найти..." />
							<ErrorMessage name='search' component={'p'} className={s.error} />
							<button className={s.btn} type='submit'>искать</button>
						</Form>
					</Formik>
				</Container>
			</div>
		)
	)
}