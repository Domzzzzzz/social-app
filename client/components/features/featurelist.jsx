// contains a features array of json objects
// array items will be displayed on home page
// uses .map to loop through and display the feature array items
Featurelist = React.createClass({
  features: [
    {icon:"fa fa-image fa-2x",bigtext:" See pics & updates",littletext:"your friends & family are posting."},
    {icon:"fa fa-share-alt fa-2x",bigtext:" Share what\'s on your mind",littletext:"with your friends & family."},
    {icon:"fa fa-group fa-2x",bigtext:" Meet new people",littletext:"& make friends from all over the world."},
    {icon:"fa fa-search fa-2x",bigtext:" Find everything you need",littletext:"with our awesome search feature."}
  ],
  render(){
    var rows = this.features.map(function(feature){
      return(
        <li key={feature.icon}>
          <h3 className="btn btn-lg">
            <i className={feature.icon}></i>
            <span>
              <b> {feature.bigtext}</b>
              <small> {feature.littletext}</small>
            </span>
          </h3>
        </li>
      )
    });
    return(
      <div>
        <h2 className="col-md-11 featurelist hidden-xs">
          Social Meet - a place to connect with family, friends, & people from all over the world!
        </h2>
        <ul className="ds-btn hidden-xs">
          {rows}
        </ul>
      </div>
    )
  }
});
