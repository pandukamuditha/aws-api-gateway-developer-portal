import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class ModernSidebar extends Component {
  handleItemClick = (e, { name }) => {
    this.props.onItemChange(name)
  }

  render () {
    const { activeItem } = this.props

    return (
      <Menu vertical size="large" color='grey'>
        <Menu.Item>
          <Menu.Header>Overview</Menu.Header>
          <Menu.Menu>
            <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            >
              <p>About the API Documentation</p>
            </Menu.Item>
            <Menu.Item
              name='quickstart'
              active={activeItem === 'quickstart'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='postmanCollection'
              active={activeItem === 'postmanCollection'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='authentication'
              active={activeItem === 'authentication'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='headers'
              active={activeItem === 'headers'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='statusCodes'
              active={activeItem === 'statusCodes'}
              onClick={this.handleItemClick}
            >
              <p>Status Codes & Messages</p>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}

export default ModernSidebar
