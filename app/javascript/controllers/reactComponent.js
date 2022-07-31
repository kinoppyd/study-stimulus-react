import ReactDOM from "react-dom";
import React from "react";

const Hello = (props) => {
  return (
    <input type="text" onChange={props.onChange} />
  )
}

function render(node, props)  {
  const root = ReactDOM.createRoot(node);
  root.render(<Hello {...props} />);
}

function destroy(node) {
  ReactDOM.unmoundComponentAtNode(node);
}

export {
  render,
  destroy
}
