import { useEffect } from "react";
import { connect } from "react-redux";

import Goals from "./Goals";
import Todos from "./Todos";
import handleInitialData from "../actions/shared";

const App = (props) => {

  useEffect(() => {
    props.dispatch(handleInitialData())
  })

  if (props.loading === true) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <Todos />
      <Goals />
    </div>
  )
}

export default connect(state => ({
  loading: state.loading
}))(App);
