const { executePromise, createPromise } = require("./ThrowAnError");

test("promise should reject depending on the input", () => {
  expect(createPromise('{"lala":{"tataxs"}')).rejects.toEqual(
    expect.objectContaining({
      message: "Unexpected token u in JSON at position 0",
    })
  );
});
