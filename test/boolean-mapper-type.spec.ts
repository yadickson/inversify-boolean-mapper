import { expect } from "chai";
import { BOOLEAN_MAPPER_TYPE } from "boolean-mapper-type";

describe("BooleanMapperType tests", () => {
  it("should check BooleanMapper value", () => {
    expect(BOOLEAN_MAPPER_TYPE.BooleanMapper).is.equal(Symbol.for("BOOLEAN_MAPPER_TYPE -> BooleanMapperInterface"));
  });
});
