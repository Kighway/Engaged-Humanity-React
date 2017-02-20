import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addInterest } from '../actions'
import InterestElement from '../components/interest-element'
import fuzzy from 'fuzzy'

class AvailableInterests extends Component {
  constructor() {
    super()
    this.fuzzy = fuzzy
  }

  render() {
    console.log(fuzzy)
    var interest_divs = <div> Hi </div>

    if (typeof this.props.available_interests != 'undefined') {

      var original_array = this.props.available_interests

      var word_list = original_array.map(function(item) { return item[1] })

      let accepted_list = this.fuzzy.filter(this.props.current_search, word_list)

      let accepted_interests = accepted_list.map(function(el) { return el.string }).map(function(el) { return original_array.find(function(x) { return (x[1] === el) } ) })

      if (this.props.current_search !== "") {
        interest_divs = accepted_interests.map(function(interest_array){
          return <InterestElement interestTitle={ interest_array[1]} interestId={ interest_array[0] }/>
        })
      }

    }


    return (<div className="available-interest-container">
      { interest_divs }
    </div>)
  }

}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( {addInterest}, dispatch)
}

function mapStatetoProps(state) {
  return {
    available_interests: state.config.interests
  }
}

export default connect (mapStatetoProps, mapDispatchtoProps)(AvailableInterests)
