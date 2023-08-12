import { ErrorMessage, Field, Form, Formik } from "formik";
import { Container } from "../../../Layout/Container/Container"
import s from './Order.module.scss'
import { PatternFormat } from "react-number-format";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { sendOrder } from "../../../../features/cartSlice";

export const Order = ({ cartItems }) => {
	const dispatch = useDispatch();
	const handleSubmitOrder = (values) => {
		dispatch(sendOrder({ order: cartItems, values }));
	}

	const validationSchema = Yup.object({
		fio: Yup.string().required("Заполните ФИО"),
		address: Yup.string().test(
			"deliveryTest",
			"Введите адрес доставки",
			function (value) {
				return this.parent.delivery === "delivery" ? !!value : true;
			},
		),
		phone: Yup.string()
			.required("Заполните номер телефона"),
		email: Yup.string()
			.email("Некорректный формат email")
			.required("Заполните email"),
		delivery: Yup.string().required("Выберите способ доставки"),
	});

	return (
		<section>
			<Container>
				<h2 className={s.title}>оформление заказа</h2>
				<Formik
					initialValues={{
						fio: 'Marina',
						address: 'Kazan',
						phone: '9080784563',
						email: '1@gmail.com',
						delivery: 'self',
					}
					}
					validationSchema={validationSchema}
					onSubmit={handleSubmitOrder}
					className={s.form}>
					<Form className={s.form}>
						<fieldset className={s.personal}>
							<label className={s.label}>
								<Field
									className={s.input}
									name="fio"
									type="text"
									placeholder="ФИО*" />
								<ErrorMessage
									className={s.error}
									name="fio"
									component={'span'}
								/>
							</label>
							<label className={s.label}>
								<Field
									className={s.input}
									type="text"
									placeholder="Адрес доставки"
									name="address"
								/>
								<ErrorMessage
									className={s.error}
									name="address"
									component={"span"}
								/>
							</label>
							<label className={s.label}>
								<Field
									className={s.input}
									name="phone"
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
							<label className={s.label}>
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
								<input className={s.radioInput} type="radio"
									name="delivery"
									value="delivery" />
								<span>Доставка</span>
							</label>
							<label className={s.radio}>
								<Field className={s.radioInput} type="radio"
									name="delivery"
									value="self" />
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
							type="submit"
						>
							Оформить
						</button>
					</Form>
				</Formik>
			</Container>
		</section>
	)
}