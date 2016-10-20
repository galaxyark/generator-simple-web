import React from 'react';
import { connect } from 'react-redux';

class Example extends React.Component {
  render() {
    return (
      <div>
        { this.props.data }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.example.data };
}

export default connect(mapStateToProps)(Example);
