// server side Javascript for handling of functions
// Posts.insert - function called in the status form
// post object - attributes: user, createdAt, image, imageurl, message, likes, comments
Meteor.methods({
  'Posts.insert': function(message,imageid,imageurl){
    var post = {
      user: Meteor.user(),
      createdAt: new Date(),
      image: imageid,
      imageurl: imageurl,
      message: message,
      likes: [],
      comments: []
    };
    Posts.insert(post);
  }
});
