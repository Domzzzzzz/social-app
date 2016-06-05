// collection of ads - accessed by both server & client
// creates Mongo collection to save ads into db
DBAds = new Mongo.Collection('ads');
DBAds.allow({
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
