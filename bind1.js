Function.prototype.mybind = function(context){
  let that = this;
  let args1 = Array.prototype.slice.call(arguments,1);
  let bindFn = function(){
      let args2 = Array.prototype.slice.call(arguments);
      return that.apply(this instanceof bindFn?this:context,args1.concat(args2)); 
  }
  let Fn = function(){};
  Fn.prototype = this.prototype;
  bindFn.prototype = new Fn();
  return bindFn;
}