import React from 'react';

const App = function(props) {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

export default App;
