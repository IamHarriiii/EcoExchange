/* eslint-disable no-undef */
/* eslint-env node */
/**
 * Unit tests for utility functions
 */
const assert = require("assert");
const {convertTo12HourFormat} = require("./utils");

// Helper function to run tests
const runTest = (name, testFn) => {
  try {
    testFn();
    console.log(`✅ PASS: ${name}`);
  } catch (error) {
    console.error(`❌ FAIL: ${name}`);
    console.error(`   Error: ${error.message}`);
    process.exitCode = 1;
  }
};

// Test regular time conversions
runTest("converts afternoon time (PM)", () => {
  assert.strictEqual(convertTo12HourFormat("14:30"), "2:30 PM");
});

runTest("converts morning time (AM)", () => {
  assert.strictEqual(convertTo12HourFormat("09:45"), "9:45 AM");
});

// Test edge cases
runTest("converts midnight (00:00)", () => {
  assert.strictEqual(convertTo12HourFormat("00:00"), "12:00 AM");
});

runTest("converts noon (12:00)", () => {
  assert.strictEqual(convertTo12HourFormat("12:00"), "12:00 PM");
});

runTest("converts 11:59 AM", () => {
  assert.strictEqual(convertTo12HourFormat("11:59"), "11:59 AM");
});

runTest("converts 11:59 PM", () => {
  assert.strictEqual(convertTo12HourFormat("23:59"), "11:59 PM");
});

// Test with single-digit hours
runTest("handles single-digit hour input", () => {
  assert.strictEqual(convertTo12HourFormat("1:05"), "1:05 AM");
});

runTest("handles single-digit hour output", () => {
  assert.strictEqual(convertTo12HourFormat("13:05"), "1:05 PM");
});

// Test invalid inputs
runTest("throws error for invalid format", () => {
  assert.throws(() => {
    convertTo12HourFormat("25:00");
  }, /Invalid time format/);
});

runTest("throws error for non-time string", () => {
  assert.throws(() => {
    convertTo12HourFormat("not-a-time");
  }, /Invalid time format/);
});
