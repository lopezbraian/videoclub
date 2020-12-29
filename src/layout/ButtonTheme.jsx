import React from 'react'
import { Switch } from '@material-ui/core'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import './style-buttonTheme.scss'
import { connect } from 'react-redux'
import { changeModeDark } from '../redux/Actions/uiActions'

const ButtonTheme = (props) => {
  const [state, setState] = React.useState(props.ui.modeDark)

  const handleChange = (event) => {
    setState(event.target.checked)
    props.onClickChange(event.target.checked)
  }
  return (
    <div className="wrapp-button-theme">
      <WbSunnyIcon style={{ color: 'white' }}/>
      <Switch
          checked={state}
          onChange={handleChange}
          name="checkedA"
      />
      <Brightness2Icon style={{ color: 'white' }}/>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    ui: state.ui
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClickChange: (boolean) => {
      dispatch(changeModeDark(boolean))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonTheme)
