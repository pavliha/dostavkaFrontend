import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/es/Card/Card'
import formItems from './formItems'
import FormItem from './FormItem'
import connector from '../../connector'
import Button from '@material-ui/core/es/Button/Button'
import filterBadges from '../../../../utils/filterBadges'
import Badge from './FormBadge'

const styles = theme => ({})

class CargoForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    const { classes, selected, badges, actions } = this.props
    return (
      <Card className={classes.root}>

        {selected.map((itemName, index) =>
          <FormItem
            key={index}
            label={formItems[itemName].label}>
            {formItems[itemName].component}
          </FormItem>
        )}

        {filterBadges(badges, selected).map((badge) => {

          const value = Object.values(badge)[0]
          const key = Object.keys(badge)[0]
          return <Badge onClick={() => actions.cargoForm.add(key)} key={key}>{value}</Badge>
        })}

        <Button variant="raised" color="primary" fullWidth>Добавить груз</Button>
      </Card>
    )

  }
}

CargoForm.propTypes = {
  badges: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
}

export default withStyles(styles)(connector(CargoForm))
