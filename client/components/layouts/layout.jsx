import React from 'react';

Layout = React.createClass({
  render(){
    return (
      <div class="wrapper">
        <div class="box">
          <div class="srow row-offcanvas row-offcanvas-left push-down-50">
            Navbar
            {this.props.sidebar}
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }
});
