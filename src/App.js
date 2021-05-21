import React from 'react';
import Web from './routes/web';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const script = document.createElement('script');
    script.src = process.env.PUBLIC_URL + "/static/js/app.js";
    document.body.appendChild(script);
  }
  render() {
    return (
      <>
        <Web />
      </>
    )

  }
}
export default App;
