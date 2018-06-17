import Yup from 'yup'
import moment from 'moment'
import { withFormik } from 'formik'
import * as createCargoAction from '../../../../actions/createCargo.action'
import store from '../../../../store'

export default withFormik({
  mapPropsToValues: () => ({
    title: '',
    from: {
      formatted_address: '',
      geometry: {
        location: {
          lat: 0,
          lng: 0,
        },
      },
    },
    to: {
      formatted_address: '',
    },
    time: '18:30',
    date_from: moment().format('YYYY-MM-DD'),
    date_to: moment().format('YYYY-MM-DD'),
    pictures: [],
    dimensions: '',
    weight: '',
    volume: '',
    description: '',
    transport_type: '',

  }),

  // Custom sync validation

  validationSchema: Yup.object().shape({
    title: Yup.string().required('Это поле является обязательным для заполнения!'),
    from: Yup.object().required('Это поле является обязательным для заполнения!'),
    to: Yup.object().required('Это поле является обязательным для заполнения!'),
    date_from: Yup.date(),
    date_to: Yup.date(),
    pictures: Yup.array(),
    dimensions: Yup.string(),
    weight: Yup.number(),
    volume: Yup.number(),
    description: Yup.string(),
    transport_type: Yup.string(),
    payment: Yup.number(),
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    console.log(values)
    const form = {
      title: values.title,
      from: {
        address: values.from.formatted_address,
        lat: values.from.geometry.location.lat(),
        lng: values.from.geometry.location.lng(),
        placeId: values.from.place_id,
        date: values.date_from,
        time: values.time,
      },
      to: {
        address: values.to.formatted_address,
        lat: values.to.geometry.location.lat(),
        lng: values.to.geometry.location.lng(),
        placeId: values.to.place_id,
        date: values.date_to,
        time: values.time,
      },
      primary_picture: values.pictures[0],
      pictures: values.pictures,
      weight: `${values.weight} кг`,
      dimensions: values.dimensions,
      volume: `${values.volume} m³`,
      description: values.description,
      transport_type: values.transport_type,
      payment: `${values.payment} грн`,
    }

    store.dispatch(createCargoAction.submit(form))
    props.history.push('/cargo/created')
    setSubmitting(false)
  },

  displayName: 'CargoForm', // helps with React DevTools
})
