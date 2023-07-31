import { ErrorMessage, Field, Form, Formik } from "formik";
import { Container } from "../../Layout/Container/Container"
import s from './Order.module.scss'
import { PatternFormat } from "react-number-format";
import * as Yup from 'yup';

export const Order = ({ cartItems }) => {

	const handleSubmitOrder = (values) => {
		console.log('жмяк');
		console.log({ cartItems, values });
	}

	const validationSchema = Yup.object({
		fio: Yup.string().required('Заполните ФИО'),
		address: Yup.string(),
		phone: Yup.string().required('Введите номер телефона').matches(/^\+\d{1}\(\d{3}\)\-\d{3}\-\d{4}\$/, 'Некорректный формат'),
		email: Yup.string().email('Некорректный формат email').required('Заполните email'),
		delivery: Yup.string(),
	})

	return (
		<section>
			<Container>
				<h2 className={s.title}>оформление заказа</h2>
				<Formik
					initialValues={{
						fio: 'Vitek',
						address: 'Kazan',
						phone: '89046716925',
						email: 'lynx-89@inbox.ru',
						delivery: 'self',
					}
					}
					onSubmit={handleSubmitOrder}
					validationSchema={validationSchema}
					className={s.form}>
					<Form className={s.form}>
						<fieldset className={s.personal}>
							<label className={s.label}>
								<Field className={s.input}
									name="fio"
									type="text"
									placeholder="ФИО*" />
								<ErrorMessage
									className={s.error}
									name="fio"
									component={'span'}
								/>
							</label>
							<label>
								<Field className={s.input}
									name="address"
									type="text"
									placeholder="Адрес доставки" />
								<ErrorMessage
									className={s.error}
									name="address"
									component={'span'}
								/>
							</label>
							<label>
								<Field className={s.input}
									name="phone"
									type="text"
									as={PatternFormat}
									format="+7(###)###-####"
									mask="_"
									placeholder="Телефон*" />
								<ErrorMessage
									className={s.error}
									name="phone"
									component={'span'}
								/>
							</label>
							<label>
								<Field className={s.input}
									name="email"
									type='email'
									placeholder="Email*" />
								<ErrorMessage
									className={s.error}
									name="email"
									component={'span'}
								/>
							</label>
						</fieldset>
						<fieldset className={s.radioList}>
							<label className={s.radio}>
								<input className={s.radioInput} type="radio" name="delivery" value="delivery" />
								<span>Доставка</span>
							</label>
							<label className={s.radio}>
								<Field className={s.radioInput} type="radio" name="delivery" value="self" />
								<span>Самовывоз</span>
							</label>
							<ErrorMessage
								className={s.error}
								name="delivery"
								component={'span'}
							/>
						</fieldset>
						<button
							className={s.submit}
							type="submit">
							Оформить
						</button>
					</Form>

				</Formik>
			</Container>
		</section>
	)
}