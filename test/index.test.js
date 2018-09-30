import Convert from "../src";

test("valid black", () => {
  expect(Convert([0, 0, 0])).toEqual([0, 0, 0]);
});

test("valid white", () => {
  expect(Convert([0, 0, 100])).toEqual([255, 255, 255]);
});

test("valid red", () => {
  expect(Convert([0, 100, 50])).toEqual([255, 0, 0]);
});

test("valid green", () => {
  expect(Convert([120, 100, 50])).toEqual([0, 255, 0]);
});

test("valid blue", () => {
  expect(Convert([240, 100, 50])).toEqual([0, 0, 255]);
});

test("valid midnight blue", () => {
  expect(Convert([210, 29, 24])).toEqual([43.452, 61.19999999999998, 78.948]);
});