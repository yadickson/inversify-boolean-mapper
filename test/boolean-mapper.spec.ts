import { faker } from "@faker-js/faker";
import { expect } from "chai";
import { BooleanMapper } from "boolean-mapper";
import { BooleanMapperInterface } from "boolean-mapper-interface";

describe("BooleanMapper tests", () => {
  let mapper: BooleanMapperInterface;
  const defaultValue = false;

  beforeEach(() => {
    mapper = new BooleanMapper();
  });

  it("should return default value when input is null", () => {
    const result = mapper.mapper(null);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(defaultValue);
  });

  it("should return default value when input is real boolean true", () => {
    const result = mapper.mapper(true);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(true);
  });

  it("should return default value when input is real boolean false", () => {
    const result = mapper.mapper(false);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(defaultValue);
  });

  it("should return default value when input is undefined", () => {
    const result = mapper.mapper(undefined);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(defaultValue);
  });

  it("should return default value when input is True", () => {
    const result = mapper.mapper("True");
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(true);
  });

  it("should return default value when input is Yes", () => {
    const result = mapper.mapper("yEs");
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(true);
  });

  it("should return default value when input is Si", () => {
    const result = mapper.mapper("sI");
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(true);
  });

  it("should return default value when input is Oui", () => {
    const result = mapper.mapper("oUi");
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(true);
  });

  it("should return default value when input is true", () => {
    const result = mapper.mapper("true");
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(true);
  });

  it("should return default value when input is False", () => {
    const result = mapper.mapper("False");
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(defaultValue);
  });

  it("should return default value when input is false", () => {
    const result = mapper.mapper("false");
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(defaultValue);
  });

  it("should return default value when input is not numeric", () => {
    const alphanumeric = faker.string.alphanumeric(10);
    const result = mapper.mapper(alphanumeric);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(defaultValue);
  });

  it("should trim input and upper case", () => {
    const value = faker.datatype.boolean();
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const stringBoolean = ` ${value} `.toUpperCase();
    const result = mapper.mapper(stringBoolean);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(value);
  });

  it("should trim input", () => {
    const value = faker.datatype.boolean();
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const stringBoolean = ` ${value} `;
    const result = mapper.mapper(stringBoolean);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(value);
  });
});
