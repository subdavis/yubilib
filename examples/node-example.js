var HID = require('node-hid');
var yubi = require('../lib/index.js')
let device = new HID.HID("/dev/hidraw3")
console.log(device.getFeatureReport(1, 8))