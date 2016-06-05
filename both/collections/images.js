// collection for Images - accessed by both server & client
// stores array holds the files uploaded & defines path to store them in
Images = new FS.Collection('images',{
  stores: [new FS.Store.FileSystem('images',{path:'~/uploads'})]
});
Images.allow({
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
