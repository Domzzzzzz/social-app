Signupform = React.createClass({
  render(){
    return(
      <div className="row">
        <div className="signup">
          <h1>Sign Up</h1>
          <p className="text-muted">It's free to sign up!</p>
        </div>
        <form>
          <div className="col-sm-9">
            <div className="row">
              <div className="col-sm-6 form-group">
                <input name="first_name" placeholder="First Name" type="text" ref="first_name" className="form-control"></input>
              </div>
              <div className="col-sm-6 form-group">
                <input name="last_name" placeholder="Last Name" type="text" ref="last_name" className="form-control"></input>
              </div>
            </div>
            <div className="form-group">
              <input placeholder="Email or Mobile Number" type="text" ref="email" className="form-control"></input>
            </div>
            <div className="form-group">
              <input placeholder="Password" type="password" ref="password" className="form-control"></input>
            </div>
            <button type="submit" className="btn btn-md btn-success">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
});
