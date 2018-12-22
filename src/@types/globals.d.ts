declare namespace GeocoderJS {
  //~ There's some class we can create via 'let c = new myLib.Cat(42)'
  //~ Or reference e.g. 'function f(c: myLib.Cat) { ... }
  class GeocoderJS {
    constructor(n: number);

    //~ We can read 'c.age' from a 'Cat' instance
    readonly age: number;

    //~ We can invoke 'c.purr()' from a 'Cat' instance
    purr(): void;
  }
  //~ We can invoke 'myLib.checkCat(c)' or 'myLib.checkCat(c, v);'
  function createGeocoder(c: string): any;
}
