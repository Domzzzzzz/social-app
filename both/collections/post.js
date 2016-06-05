// collection of Posts - accessed by both server & client
// creates a Mongodb collection to save posts into db
Posts = new Mongo.Collection('posts');
Posts.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});
