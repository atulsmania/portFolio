import React from "react";
import { Navbar, MainContent /*Footer*/ } from "./components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Home: false,
      Projects: true,
      Certifications: false,
      Connect: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(id) {
    this.setState({
      Home: false,
      Projects: false,
      Certifications: false,
      Connect: false,
      [id]: true,
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar highlight={this.state} handleClick={this.handleClick} />
        <MainContent render={this.state} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
