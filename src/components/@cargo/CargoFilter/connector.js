import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as cargoActions from '../../../actions/cargo.action'
import * as cargoFormActions from '../../../actions/createCargo.action'

const initMapStateToProps = state => state.addCargoFormReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    cargo: bindActionCreators(cargoActions, dispatch),
    filter: bindActionCreators(cargoFormActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
