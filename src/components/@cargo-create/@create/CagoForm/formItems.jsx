import React from 'react'
import TextField from '@material-ui/core/es/TextField/TextField'

export default {
  title: {
    label: 'Что у вас за груз?',
    component: <TextField
      name="title"
      fullWidth
      placeholder="Например: Ящик картошки"
      label="Название груза"
    />,
  },

  from: {
    label: 'Откуда забирать?',
    component: <TextField
      id="from"
      name="from"
      fullWidth
      label="Адрес"
    />,
  },

  to: {
    label: 'Куда отвезти?',
    component: <TextField
      id="to"
      name="to"
      fullWidth
      label="Адрес"
    />,
  },
}
