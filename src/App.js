import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import Router from './router/router';
import 'toastr/build/toastr.min.css';
//CSS
import "../src/assets/vendor/perfect-scrollbar.css";
import "../src/assets/css/app.css";
import "../src/assets/css/app_1.css";
import "../src/assets/css/app.rtl.css";
import "../src/assets/css/vendor-material-icons.css";
import "../src/assets/css/vendor-material-icons.rtl.css";
import "../src/assets/css/vendor-fontawesome-free.css";
import "../src/assets/css/vendor-ion-rangeslider.css";
import "../src/assets/css/vendor-ion-rangeslider.rtl.css";
import "../src/assets/css/customeCSS.css";
import "../src/assets/css/uikit.css";
import "../src/assets/css/tailwind.css";
import "../src/assets/css/style.css";
import "../src/assets/css/icons.css";
import "../src/assets/css/style_1.css";
import "../src/assets/css/animate.css";
import "aos/dist/aos.css";


const store = createStore.create();

class App extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
