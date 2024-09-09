import { expect } from "chai";
import { Container } from "inversify";
import sinon from "ts-sinon";
import { BooleanMapper } from "boolean-mapper";
import { BOOLEAN_MAPPER_TYPE, BooleanMapperInterface, BooleanMapperModule } from "index";

describe("BooleanMapperModule tests", () => {
  let container: Container;

  beforeEach(() => {
    container = new Container();
    container.load(new BooleanMapperModule());
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should check bind BooleanMapper", () => {
    expect(container.isBound(BOOLEAN_MAPPER_TYPE.BooleanMapper)).is.equal(true);
  });

  it("should check BooleanMapperInterface", () => {
    const util = container.get<BooleanMapperInterface>(BOOLEAN_MAPPER_TYPE.BooleanMapper);
    expect(util).instanceOf(BooleanMapper);
  });
});
