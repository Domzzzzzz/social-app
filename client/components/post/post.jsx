// Posts contain the users avatar & image uploaded from status form
// Post component is called in the main page
// Posts have like button + number of likes
// the logic above the return statement checks
// if an image was attached before the post is returned
// post data will be grabbed from the db and rendered here
Post = React.createClass({
  render(){
    var dimage = '';
    if(this.props.post.imageurl){
      dimage = (
        <div>
          <div className="panel-thumbnail">
            <img src={this.props.post.imageurl} className="img-responsive postimage img-thumbnail"/>
          </div>
        </div>
      );
    }
    return(
      <div className="col-sm-12">
        <div className="panel panel-white post panel-shadow">
          <div className="post-heading">
            <div className="pull-left image">
              <img src="http://placehold.it/48x48" className="img-thumbnail avatar"/>
            </div>
            <div className="pull-left meta">
              <div className="title h5">
                <b>Dominic LaRouche</b>&nbsp;
                Created a post
              </div>
              <h6 className="text-muted time">an hour ago</h6>
            </div>
          </div>
          <div className="col-md-12 post-description">
            <h3>{this.props.post.message}</h3><br/>
          </div>
          <div className="col-md-12">
            {dimage} <br/>
          </div>
          <div className="actions">
            <a href="#" className="btn btn-default stat-item">
              <i className="fa fa-thumbs-up icon"></i>
            </a>&nbsp;
            10 Likes
          </div>
          <div className="post-footer">
            Comment list
          </div>
        </div>
      </div>
    )
  }
});
