// import ReactMarkdown from 'react-markdown'

// // <ReactMarkdown># Hello *World*!</ReactMarkdown>

// const JekyllTutorialPost = () => (
//     <section id='Blog_Article' className='section blogposts'>
//     <ReactMarkdown source="./index.md" />
//     </section>
// )

// export default JekyllTutorialPost



import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import termsFrPath from './index.md'

class JekyllTutorialPost extends Component {
  markdownText = null;

  static getDerivedStateFromProps(props, state) {
    // fetch("./index.md").then((response) => response.text()).then((text) => {
    //   return text;
    // })
    // this.retrieve();

    fetch("/blogs/2018-10-23-jekyll-tutorial/index.md").then((response) => response.text()).then((text) => {
      console.log("Found the text:");
      console.log(text);
      this.markdownText = text;
      this.render()
    })
  }


  render() {
    return (
      <div className="content">
	<ReactMarkdown>{this.markdownText}</ReactMarkdown>
      </div>
    )
  }
}
// <ReactMarkdown source={this.state.terms} />

export default JekyllTutorialPost
