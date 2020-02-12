import React, { PureComponent } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Counter from "./components/Counter";
import reducers from "./reducers";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends PureComponent {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div style={styles}>
          <div>
            <Counter />
          </div>
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
