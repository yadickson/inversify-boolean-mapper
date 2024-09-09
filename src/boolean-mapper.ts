import { injectable } from "inversify";
import { BooleanMapperInterface } from "boolean-mapper-interface";

@injectable()
export class BooleanMapper implements BooleanMapperInterface {
  public mapper(input: unknown, byDefault: boolean | undefined = false): boolean {
    const value = (input?.toString().trim() || byDefault).toString().toLowerCase();
    return value === "true" || value === "yes" || value === "oui" || value === "si";
  }
}
