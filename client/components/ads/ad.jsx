// the logic above the return statement checks if the ad has an image
// ad component gets called on the main page 
Ad = React.createClass({
  render(){
    var adImage = this.props.ad.image ? <p><img src={this.props.ad.image} alt="image"/></p>:'';
    return(
      <div>
        <div className="panel panel-default">
          <div className="panel panel-header">
            <h4>{this.props.ad.title}</h4>
          </div>
          <div className="panel-body">
            {adImage}
            <div className="clearfix"></div>
            <hr/>
            {this.props.ad.text}
          </div>
        </div>
      </div>
    )
  }
});
