import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/es/Card/Card'
import formItems from './formItems'
import FormItem from './FormItem'
import connector from '../../connector'
import Button from '@material-ui/core/es/Button/Button'

const styles = theme => ({})

class CargoForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    const { classes, selected } = this.props
    return (
      <Card className={classes.root}>

        {selected.map((itemName, index) =>
          <FormItem
            key={index}
            label={formItems[itemName].label}>
            {formItems[itemName].component}
          </FormItem>
        )}
        <Button variant="raised" color="primary" fullWidth>Добавить груз</Button>
      </Card>
    )

  }
}

CargoForm.propTypes = {}

export default withStyles(styles)(connector(CargoForm))
