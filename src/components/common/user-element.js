import React, { Component } from 'react'

// expected props: user

class UserElement extends Component {

  render() {

      return (
        <div>
          <img className="user-profile-pic" src={ this.props.user.profile_url } />

          <div className="user-element-name">
            {this.props.user.first_name} {this.props.user.last_name }
            </div>

          <div className="user-element-username">
            { this.props.user.username }
          </div>



        </div>
      )
    }
}

export default UserElement
