import React from 'react';

Homelayout = React.createClass({
  render(){
    return (
      <div>
        Header
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              Features
            </div>
            <div class="col-sm-5 col-sm-offset-1">
              Sign Up
            </div>
          </div>
        </div>
      </div>
    )
  }
});
