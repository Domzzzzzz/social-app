// mixin allows React to access the data available to Meteor
// create error message for failed registration
// handle form submissions with onSubmit()
// create user object and params for storing data into DB
// set up redirect to dashboard after a user is successfully created
Signupform = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    let data = {};
    data.currentUser = Meteor.user();
    return data;
  },
  getInitialState(){
    return {
      message:'',
      messageClass:'hidden'
    }
  },
  displayError(message){
    this.setState({message:message, messageClass:'alert alert-danger registerError'});
  },
  handleSubmit(e){
    e.preventDefault();
    this.setState({message:'',messageClass:'hidden'});
    var that = this;
    var first_name = ReactDOM.findDOMNode(this.refs.first_name).value.trim();
    var last_name = ReactDOM.findDOMNode(this.refs.last_name).value.trim();
    var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    var user = {
      email: email,
      password: password,
      profile: {
        fullname:(first_name + last_name).toLowerCase(),
        firstname: first_name,
        lastname: last_name,
        avatar:'http://placehold.it/150x150',
        friends:[]
      }
    };
    Accounts.createUser(user,function(e){
      if(e){
        that.displayError(e.reason);
      }
      else {
        FlowRouter.go('/dashboard');
      }
    })
  },
  render(){
    return(
      <div className="row">
        <div className="signup">
          <h1>Sign Up</h1>
          <p className="text-muted">It's free to sign up!</p>
        </div>
        <form role="form" onSubmit={this.handleSubmit}>
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
            <span className={this.state.messageClass}>{this.state.message}</span>
          </div>
        </form>
      </div>
    )
  }
});
