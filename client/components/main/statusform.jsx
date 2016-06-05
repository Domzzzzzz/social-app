// form will be able to accept img input if user decides to upload img
// Status form is called on the main newsfeed page
// uploadFile - function for uploading a file with a post with onChange method
// uses cfs standard-packages & filesystem packages for file uploads
// FS.Utility - if multiple files uploaded, loops through and displays files
// submitForm - function to include file upload and msg in posts - called onSubmit
// var message - references the text area & grabs msg user types for their post
// Meteor.call - calls Posts.insert function which is defined server-side
// Posts.insert - checks if img & msg exists then inserts into db, otherwise displays error
Statusform = React.createClass({
  getInitialState(){
    return{
      image:'',
      filename:''
    }
  },
  resetFields(){
    ReactDOM.findDOMNode(this.refs.sharing).value = '';
    ReactDOM.findDOMNode(this.refs.imageid).value = '';
    ReactDOM.findDOMNode(this.refs.sharing).focus();
    this.refs.form.reset();
  },
  submitForm(e){
    e.preventDefault();
    var message = this.refs.sharing.value;
    var imageid = this.refs.imageid.value;
    if(imageid){
      var image = Images.findOne({_id:imageid});
      var imageurl = image.url();
    }
    Meteor.call('Posts.insert',message,imageid,imageurl,function(err){
      if(err){
        console.log(err);
      }
    });
    this.setState({image:'',filename:''});
    this.resetFields();
  },
  uploadFile(e){
    e.preventDefault();
    var that = this;
    FS.Utility.eachFile(e,function(file){
      Images.insert(file,function(err,fileObj){
        that.setState({image:fileObj._id,filename:fileObj.data.blob.name});
      })
    })
  },
  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-content">
          <div className="panel-heading">
            Update Status
          </div>
          <form ref="form" onSubmit={this.submitForm} className="form center-block">
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
                    <li><input onChange={this.uploadFile} ref="file" type="file" className="filepicker" id="file"/></li>
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
