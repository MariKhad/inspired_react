import { Container } from '../../Layout/Container/Container';
import { useSelector } from "react-redux";
import s from './Search.module.scss';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const Search = () => {
	const { openSearch } = useSelector(state => state.search);

	const initialValues = {
		search: '',
	}

	const validationSchema = Yup({
		search: Yup.string().required('Заполните поле'),
	})

	const navigate = useNavigate();

	const handleSubmit = ({ search }) => {
		if (search) {
			navigate(`search?q=${search}`);
		}
	}



	return (
		openSearch && (
			<div className={s.search}>
				<Container>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}>
						onSubmit={handleSubmit}
						<Form className={s.form}>
							<Field type="search" name="search" className={s.input} placeholder="Найти..." />
							<ErrorMessage name='search' conponent={'p'} className={s.error} />
							<button className={s.btn} type='submit'>искать</button>
						</Form>
					</Formik>
				</Container>
			</div>
		)
	)
}