const fizbuzz = require('./fizbuzz');



test("should return '1' when passed 1", () => {
       const result = fizbuzz();
       expect(result).toBe('1');
});

