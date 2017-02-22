import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchLinkSummary } from '../../actions'
import FetchLinkSummaryComponent from './fetch-article'
import validUrl from 'valid-url'



class CreateArticleContainer extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateURL = this.validateURL.bind(this)

    this.state = { username: ''
                 , title: ''
                 , description: ''
                 , password: ''
                 , input_url: ''
                 , source: ''
                 , author: ''
                 , image_url: ''
                 , date: ''

                 , validURL: ''
                 , validTitle: ''
                 , validDescription: ''
                 , validSource: ''
                 , validAuthor: ''
                 , validImageURL: ''
                 , validDate: ''

                }
  }

  handleURLChange(event){
    if (event.target.value === "") {
      this.setState({
        validURL: "no longer initial state"
      })

    }
    this.setState({
      input_url: event.target.value
    })

    if (event.target.value === "") {
      this.setState( { validURL: "This field cannot be empty." } )
    }

//    this.setState({validUsername: true});
//    this.props.checkUsername({input: event.target.value})
  }


  validateURL() {

    if (validUrl.isUri(this.state.input_url)){
      return true
    } else {
      return false
    }
  }


  handleAChange(event) {

    let error_hash = {}
    error_hash[event.target.getAttribute('data-validation')] = "This field cannot be empty."
    let no_error_hash = {}
    no_error_hash[event.target.getAttribute('data-validation')] = ""
    let input_state = {}
    input_state[event.target.getAttribute('data-ref')] = event.target.value

    if (event.target.value === "") {
      this.setState( error_hash )
    } else {
      this.setState( no_error_hash )
    }

    this.setState( input_state )

  }




  validateForm(form_data) {
    let error_array = []

    if (!validUrl.isUri(event.target.value)) {
      error_array.push("This is not a valid url.")
      this.setState( { validURL: "This is not a valid url." } )
    }

    if (form_data.title === "") {
      error_array.push("first name can't be blank.")
      this.setState({ validTitle: "This field cannot be empty." })
    }
    if (form_data.description === "") {
      error_array.push("last name can't be blank.")
      this.setState({ validDescription: "This field cannot be empty." })
    }
    if (form_data.source === "") {
      error_array.push("source can't be blank.")
      this.setState({ validSource: "Every story has a source." })
    }
    if (form_data.author === "") {
      error_array.push("source can't be blank.")
      this.setState({ validSource: "Every story has an author." })
    }
    if (form_data.image_url === "") {
      error_array.push("Image url maybe can be blank?")
      this.setState({ validSource: "Image url maybe can be blank?" })
    }
    if (form_data.date === "") {
      error_array.push("date can't be blank.")
      this.setState({ validSource: "This story is not eternal." })
    }



    return error_array
  }


  handleSubmit(event) {
    event.preventDefault()
    const form_input = { input_url: this.refs.input_url.value
                        , title: this.refs.title.value
                        , description: this.refs.description.value
                        , source: this.refs.source.value
                        , author: this.refs.author.value
                       }

    let form_errors = this.validateForm(form_input)

    if (form_errors.length === 0) {
      console.log("Valid form.  Submit!")
      this.props.createUser(form_input);
    } else {
      console.log("Invalid form.  Try again.")
      console.log(form_errors)
    };
  }

  render() {

    let maybe_fetch = <div></div>

    if (this.validateURL.bind(this)()) {
      maybe_fetch = < FetchLinkSummaryComponent input_url={ this.state.input_url  }/>
    }

    return (

      // create_table "articles", force: :cascade do |t|
      //   t.string   "title"
      //   t.string   "description"
      //   t.string   "link"
      //   t.string   "source"
      //   t.string   "author"
      //   t.string   "image_url"
      //   t.string   "date"
      //   t.datetime "created_at",  null: false
      //   t.datetime "updated_at",  null: false



    <div className="login-page">
      { maybe_fetch  }
      <div className="form">
        <form onSubmit={ this.handleSubmit }>

        { /* url input */ }
        <div className="create-user-error"> { this.state.validURL } </div>
        <input ref="input_url" onChange={this.handleURLChange.bind(this)} placeholder="url" value={ this.state.input_url }/>

        { /* title input */ }
        <div className="create-user-error"> { this.state.validTitle } </div>
        <input data-validation="validTitle" data-ref="title" ref="title" onChange={this.handleAChange.bind(this)} placeholder="title" value={this.state.title}/>

        { /* description input */ }
        <div className="create-user-error"> { this.state.validDescription } </div>
        <input data-validation="validDescription" data-ref="description" ref="description" onChange={this.handleAChange.bind(this)} placeholder="description" value={this.state.description}/>

        { /* source input */ }
        <div className="create-user-error"> { this.state.validSource } </div>
        <input data-validation="validSource" data-ref="source" ref="source" onChange={this.handleAChange.bind(this)} placeholder="source" value={this.state.source}/>

        { /* author input */ }
        <div className="create-user-error"> { this.state.validAuthor } </div>
        <input data-validation="validAuthor" data-ref="author" ref="author" onChange={this.handleAChange.bind(this)} placeholder="author" value={this.state.author}/>

        { /* image url input */ }
        <div className="create-user-error"> { this.state.validImageURL } </div>
        <input data-validation="validImageURL" data-ref="image_url" ref="image_url" onChange={this.handleAChange.bind(this)} placeholder="image_url" value={this.state.author}/>

        { /* image preview */ }


        { /* date input */ }
        <div className="create-user-error"> { this.state.validDate } </div>
        <input data-validation="validDate" data-ref="date" ref="date" onChange={this.handleAChange.bind(this)} placeholder="date" value={this.state.author}/>




        { /* submit */ }
        <button type="submit"> Submit </button>
        </form>
      </div>
    </div>
    )
  }
}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( { fetchLinkSummary }, dispatch)
}

function mapStatetoProps(state) {
  return {
    currentUser: state.currentUser,
    potentialArticle: state.config.potential_article

  }
}

export default connect (mapStatetoProps, mapDispatchtoProps)(CreateArticleContainer)
