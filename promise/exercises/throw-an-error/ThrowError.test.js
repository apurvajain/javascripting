const parsedPromise = require("./ThrowError");


test("promise should reject  or resolve depending on error", () => {
    expect(parsedPromise('{"obj":{"a":10}')).rejects.toEqual(
        expect.objectContaining({
          message: "Unexpected end of JSON input",
        })
      );
  });