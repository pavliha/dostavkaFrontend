import { withFormik } from 'formik'
import * as Yup from 'yup'
import store from '../../../store'
import * as userActions from '../../../actions/auth.action'

const loginFormik = withFormik({
  validationSchema: Yup.object().shape({

    email: Yup.string()
      .email('Неправильный email адрес!')
      .required('Это поле является обязательным'),

    password: Yup.string()
      .min(6, 'Пароль должен быть больше чем 6 символов')
      .required('Это поле является обязательным'),

  }),
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),

  handleSubmit: (values, { setSubmitting }) => {
    // eslint-disable-next-line no-console
    store.dispatch(userActions.login(values))
    setSubmitting(false)
  },
  displayName: 'LoginForm',
})

export default loginFormik
