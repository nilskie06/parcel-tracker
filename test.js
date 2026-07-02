const pkg = require('./index.js');
const assert = require('assert');

console.log('Testing @ph-itdev/parcel-tracker...');

// Basic smoke test
assert.ok(pkg, 'Module should export something');
const keys = Object.keys(pkg);
console.log('  Exports:', keys.join(', '));
assert.ok(keys.length > 0, 'Should have exports');

console.log('✓ All smoke tests passed');
