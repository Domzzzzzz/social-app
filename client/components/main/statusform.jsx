// form will be able to accept image input if user decides to upload image
// Status form is called on the main newsfeed page
Statusform = React.createClass({
  getInitialState(){
    return{
      image:'',
      filename:''
    }
  },
  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-content">
          <div className="panel-heading">
            Update Status
          </div>
          <form className="form center-block">
            <input type="hidden" ref="imageid" value={this.state.image}/>
            <div className="panel-body">
              <div className="form-group">
                <textarea placeholder="What's up?" className="form-control input-lg" ref="sharing" id="sharing">

                </textarea>
                <h3>{this.state.filename||''}</h3>
              </div>
              <div className="panel-footer">
                <div>
                  <ul className="pull-left list-inline">
                    <li><input ref="file" type="file" className="filepicker" id="file"/></li>
                  </ul>
                  <button className="btn btn-primary btn-sm postbutton">Post</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
});