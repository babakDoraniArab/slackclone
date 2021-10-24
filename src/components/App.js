import React, { Component } from "react";
import { Grid, Message } from "semantic-ui-react";

import "./App.css";
import ColorPanel from "./ColorPanel/ColorPanel";
import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetaPanel";
import SidePanel from "./SidePanel/SidePanel";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Grid columns="equal" className="app" style={{ background: "#eee" }}>
        <ColorPanel />
        <SidePanel currentUser={this.props.currentUser} />
        <Grid.Column style={{ marginLeft: 320 }}>
          <Messages />
        </Grid.Column>
        <Grid.Column width={4}>
          <MetaPanel />
        </Grid.Column>
      </Grid>
    );
  }
}
const mapStateTopProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateTopProps)(App);
