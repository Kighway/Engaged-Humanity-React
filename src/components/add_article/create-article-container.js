import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchLinkSummary } from '../../actions'
import { createArticle } from '../../actions'
import FetchLinkSummaryComponent from './fetch-article'
import validUrl from 'valid-url'
import AddInterestToArticle from './add-interest-to-article-copy'

class CreateArticleContainer extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateURL = this.validateURL.bind(this)
    this.handleCallback = this.handleCallback.bind(this)

    this.state = { title: ''
                 , description: ''
                 , password: ''
                 , input_url: ''
                 , source: ''
                 , author: ''
                 , image_url: ''
                 , date: ''
                 , interests: ''


                 , validURL: ''
                 , validTitle: ''
                 , validDescription: ''
                 , validSource: ''
                 , validAuthor: ''
                 , validImageURL: ''
                 , validDate: ''
                 , validInterests: ''
                }
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.potentialInterest && nextProps.potentialInterest !== "") {
      this.setState({
        interests: nextProps.potentialInterest
      })


    }


    if (nextProps.potentialArticle === false) {
      this.setState({
        input_url: "", title: "", description: "", image_url: "", author: "", source: "", date: "", interests: ""
      })
    }

    if (nextProps.potentialArticle && nextProps.potentialArticle.title) {
      this.setState({
        title: nextProps.potentialArticle.title
      })
    }
    if (nextProps.potentialArticle && nextProps.potentialArticle.description) {
      this.setState({
        description: nextProps.potentialArticle.description
      })
    }

    if (nextProps.potentialArticle && nextProps.potentialArticle.image && nextProps.potentialArticle.image[0]) {
      this.setState({
        image_url: nextProps.potentialArticle.image[0].url
      })
    }

    if (nextProps.potentialArticle && nextProps.potentialArticle.data &&     nextProps.potentialArticle.data.author &&     nextProps.potentialArticle.data.author[0] && nextProps.potentialArticle.data.author[0].name) {
      this.setState({
        author: nextProps.potentialArticle.data.author[0].name
      })
    }

    if (nextProps.potentialArticle && nextProps.potentialArticle.site_name) {
      this.setState({
        source: nextProps.potentialArticle.site_name
      })
    }

    if (nextProps.potentialArticle && nextProps.potentialArticle.updated_time) {
      this.setState({
        date: nextProps.potentialArticle.updated_time
      })
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

  handleNormalChange(event) {

    let input_state = {}
    input_state[event.target.getAttribute('data-ref')] = event.target.value
    this.setState( input_state )

  }



  validateForm(form_data) {
    let error_array = []

    if (!validUrl.isUri(form_data.url)) {
      error_array.push("This is not a valid url.")
      this.setState( { validURL: "This is not a valid url." } )
    }
    if (form_data.interests.split(" ").length > 1) {
      error_array.push("one interest only")
      this.setState({ validInterests: "Please add only one interest for this demo." })
    }
    if (form_data.interests === "") {
      error_array.push("no interest assigned")
      this.setState({ validInterests: "Please add one interest." })
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
      this.setState({ validAuthor: "Every story has an author." })
    }
    if (form_data.date === "") {
      error_array.push("date can't be blank.")
      this.setState({ validDate: "This story is not eternal." })
    }

    return error_array
  }


  handleSubmit(event) {
    event.preventDefault()
    const form_input = { url: this.refs.input_url.value
                        , title: this.refs.title.value
                        , description: this.refs.description.value
                        , source: this.refs.source.value
                        , author: this.refs.author.value
                        , image_url: this.state.image_url
                        , date: this.refs.date.value
                        , interests: this.state.interests
                       }

    let form_errors = this.validateForm(form_input)

    if (form_errors.length === 0) {
      console.log("Valid form.  Submit!")
      this.props.createArticle(form_input);
    } else {
      console.log("Invalid form.  Try again.")
      console.log(form_errors)
    };
  }

  handleCallback(interest_input) {
    this.setState({ interests: interest_input, validInterests: "" })
  }


  render() {
    let maybe_fetch = <div></div>

    if (this.validateURL.bind(this)()) {
      maybe_fetch = < FetchLinkSummaryComponent input_url={ this.state.input_url  }/>
    }

    var image_preview = <div></div>

    if (this.props.potentialArticle && this.props.potentialArticle.image && this.props.potentialArticle.image[0]) {
      image_preview = <img className="create-article-preview-pic" src={ this.props.potentialArticle.image[0].url } />
    }

    return (

    <div className="login-page">
      { maybe_fetch  }
      <div className="form">
        <form onSubmit={ this.handleSubmit }>

        { /* url input */ }
        <div className="create-user-error"> { this.state.validURL } </div>
        <input ref="input_url" onChange={this.handleURLChange.bind(this)} placeholder="url" value={ this.state.input_url }/>

        <div className="create-user-error"> { this.state.validInterests } </div>
        < AddInterestToArticle callback={ this.handleCallback } content={ this.state.interests } />

        { /* image preview */ }
        { image_preview }

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

        { /* date input */ }
        <div className="create-user-error"> { this.state.validDate } </div>
        <input data-validation="validDate" data-ref="date" ref="date" onChange={this.handleAChange.bind(this)} placeholder="date" value={this.state.date}/>




        { /* submit */ }
        <button type="submit"> Submit </button>
        </form>
      </div>
    </div>
    )
  }
}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( { fetchLinkSummary, createArticle }, dispatch)
}

function mapStatetoProps(state) {
  return {
    currentUser: state.currentUser,
    potentialArticle: state.config.potential_article,
    potentialInterest: state.config.potential_interest

  }
}

export default connect (mapStatetoProps, mapDispatchtoProps)(CreateArticleContainer)
