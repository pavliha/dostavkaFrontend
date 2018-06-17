import { connect } from 'react-redux'

const initMapStateToProps = state => state.addCargoFormReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
