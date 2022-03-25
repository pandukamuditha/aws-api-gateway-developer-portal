import { Container, Header } from 'semantic-ui-react'
import React, { Component } from 'react'
import { AboutPage, Quickstart } from '../content/GuidesContent'

class GuidesContent extends Component {
  render () {
    const { activeItem } = this.props
    let header = ''
    let content = ''

    switch (activeItem) {
      case 'about':
        header = 'About the API Documentation'
        content = <AboutPage></AboutPage>
        break
      case 'quickstart':
        header = 'Quickstart'
        content = <Quickstart></Quickstart>
        break
      default:
    }

    return (
      <Container>
        <Header size='huge' dividing>{header}</Header>
        <div>{content}</div>
      </Container>
    )
  }
}

export default GuidesContent
