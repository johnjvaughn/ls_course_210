var Foo = {
  a: '',
  b: '',

  bar: function() {
    console.log(this.a);
  },

  baz: function() {
    console.log(this.b);
  },
  
  init: function(a, b) {
    this.a = a;
    this.b = b;
    return this;
  },
};

var myFoo = Object.create(Foo).init('bar', 'baz');

myFoo.hasOwnProperty('a');   // true;
myFoo.bar();
myFoo.baz();