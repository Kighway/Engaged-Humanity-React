import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addInterest } from '../../actions'
import AvailableInterests from './available-interests-copy'

class AddInterest extends Component {
  constructor() {
    super()
      this.state = { interest_field: '' }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      interest_field: nextProps.content
    })


  }


  handleChange(event) {
    this.setState({
      interest_field: event.target.value
    })
    this.props.callback(event.target.value)

  }

  render() {
    return (
    <div className="add-interest-container">
      <div className="form">
        <input ref="interest" onChange={ this.handleChange.bind(this)} placeholder="add interest" value={ this.state.interest_field } />
      <AvailableInterests current_search={ this.state.interest_field } />
      </div>
    </div>
    )


  }

}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( {addInterest}, dispatch)
}

export default connect (null, mapDispatchtoProps)(AddInterest)
