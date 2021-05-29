import React from 'react';
// import logo from './logo.svg';
import './style.css';
import MainNavbar from './components/MainNavbar';
import SideNavbar from './components/SideNavbar';
import MainContent from './components/MainContent';
import SideContent from './components/SideContent';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      side: '',
      main: 'fields',
      fields: [],
      error: null
    }
    this.handleSideNavFieldClick = this.handleSideNavFieldClick.bind(this);
    this.handleFieldClick = this.handleFieldClick.bind(this);
  }

  componentDidMount() {
    fetch('/garden/fields')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            fields: result.fields
          });
        },
        (error) => {
          this.setState({
            error: error
          });
        }
      )
  }

  handleSideNavFieldClick () {
    this.setState({
      side: 'fields'
    });
  }

  handleFieldClick() {
    this.setState({
      main: 'topic'
    })
  }

  render() {
    const {side, main, fields, error} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <MainNavbar />
          <SideNavbar handler={this.handleSideNavFieldClick} />
        </header>
        <section className="main">
          <MainContent handler={this.handleFieldClick} fields={fields} error={error} show={main} />
          <SideContent handler={this.handleFieldClick} fields={fields} error={error} show={side} />
        </section>
        <Footer />
      </div>
    );
  }
  
}

export default App;