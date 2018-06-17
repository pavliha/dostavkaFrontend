import { withFormik } from 'formik'
import * as Yup from 'yup'
import store from '../../../../store'
import * as userActions from '../../../../actions/auth.action'

const registerFormik = withFormik({
  validationSchema: Yup.object().shape({

    name: Yup.string()
      .required('Это поле является обязательным'),

    phone: Yup.string()
      .required('Это поле является обязательным'),

    email: Yup.string()
      .email('Неправильный email адрес!')
      .required('Это поле является обязательным'),

    password: Yup.string()
      .min(6, 'Пароль должен быть больше чем 6 символов')
      .required('Это поле является обязательным'),

  }),
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    password: '',
  }),

  handleSubmit: (values, { setSubmitting }) => {
    // eslint-disable-next-line no-console
    store.dispatch(userActions.register(values))
    setSubmitting(false)
  },
  displayName: 'RegisterForm',
})

export default registerFormik
