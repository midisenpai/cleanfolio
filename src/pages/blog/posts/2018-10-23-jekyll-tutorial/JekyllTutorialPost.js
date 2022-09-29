/* eslint-disable */
import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class JekyllTutorialPost extends Component {

  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      terms: null
    }

    fetch("/blogs/2018-10-23-jekyll-tutorial/index.md").then((response) => response.text()).then((text) => {
      this.setState({terms: text});
    })
  }

  render() {
    return (
	<section className="content">
	  <ReactMarkdown>
	    {this.state.terms}
	  </ReactMarkdown>
	</section>
    )
  }
}

export default JekyllTutorialPost
