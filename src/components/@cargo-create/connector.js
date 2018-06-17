import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions/createCargo.action'

const initMapStateToProps = store => store.createCargoReducer

const initMapDispatchToProps = (dispatch) => ({
  actions: {
    cargo: bindActionCreators(actions, dispatch)

  }
})

export default connect(initMapStateToProps, initMapDispatchToProps)
