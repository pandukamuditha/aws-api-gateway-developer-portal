import GuidesContent from 'components/GuidesContent'
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import ModernSidebar from '../components/ModernSidebar/ModernSidebar'

class Guides extends Component {
  state = {}

  constructor (props) {
    super(props)
    this.state = { activeItem: 'about' }
  }

  onItemChange = (activeItem) => {
    this.setState({ activeItem: activeItem })
  }

  render () {
    return (
      <div>
        <Grid centered>
          <Grid.Column width={3}>
            <div className="modern-sidebar">
              <ModernSidebar
                activeItem={this.state.activeItem}
                onItemChange={this.onItemChange}
              ></ModernSidebar>
            </div>
          </Grid.Column>

          <Grid.Column width={13}>
            <div className="guide-content">
              <GuidesContent
                activeItem={this.state.activeItem}>
              </GuidesContent>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Guides
