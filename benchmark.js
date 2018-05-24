var Benchmark = require('benchmark');
var bcryptjs = require('bcryptjs');
var bcrypt = require('bcrypt');
var assert = require('assert')

var suite = new Benchmark.Suite;

var password = 'hogehoge'
var passwordHash = '$2a$11$rAJ4WhjJbiIFzTf3nq.MYODrIma2r.KCQdNkLy4flpSW5xAHLkJoe'

// add tests
suite.add('Bcryptjs#compareSync', function() {
  assert.equal(bcryptjs.compareSync(password, passwordHash), true);
})
.add('Bcrypt#compareSync', function() {
  assert.equal(bcrypt.compareSync(password, passwordHash), true);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
