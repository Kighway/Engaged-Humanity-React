import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleFollowing } from '../../actions'
import { searchFollowing } from '../../actions'

class SearchFollowingContainer extends Component {
  constructor() {
    super()
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handlePotentialClick = this.handlePotentialClick.bind(this)
      this.state = { search_field: '' }
  }

  handleChange(event) {
    this.setState({
      search_field: event.target.value
    })
  }

  handleSubmit() {
    event.preventDefault()
    this.state.search_field = ""
    const query = { query: this.refs.following.value }
    if ( query.query != "") {
      this.props.searchFollowing(query);
    }
  }


  handlePotentialClick(event) {
    let potential_id = event.target.getAttribute("data-id")
    this.props.toggleFollowing({id: potential_id})
  }

  render() {

    // don't send back self, or followings already followed,
    // unless the behavior will be different,
    // as in "go to show page" vs "delete following"
    var potential_divs = <div></div>

    if (!this.props.potential_followings || this.props.potential_followings.length === 0) {
      potential_divs = <div></div>
    } else {
      let test = this.props.potential_followings
      potential_divs = test.map(function(potential_following) {
        return (

        // shape this into something
// <<<<<<< final-stylings
        <div onClick={ this.handlePotentialClick } data-id={ potential_following.id } className="search-potential-following">

          <div className="search-potential-name">
            { potential_following.username }
          </div>

// =======
//         <div className="search-potential-following" >
//           <img className="potential-profile-pic" src={ potential_following.profile_url } onClick={ this.handlePotentialClick } data-id={ potential_following.id } />
//           <div className="search-potential-name" onClick={ this.handlePotentialClick } data-id={ potential_following.id } > { potential_following.username }  </div>
// >>>>>>> master
        </div>
      )}, this)

    }


    return (
    <div className="search-following-container">
      <input className="search-input" ref="following" onChange={ this.handleChange.bind(this)} placeholder="search" value={ this.state.search_field } />
      <div className="search-submit" onClick={this.handleSubmit.bind(this)}> Submit </div>
      <div className="potential-followings-container">
        { potential_divs }
      </div>
    </div>
    )
  }

}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( { searchFollowing, toggleFollowing }, dispatch)
}

function mapStatetoProps(state) {
  return {
    potential_followings: state.config.potential_followings,
    searchField: state.config.searchField
  }
}


export default connect (mapStatetoProps, mapDispatchtoProps)(SearchFollowingContainer)
