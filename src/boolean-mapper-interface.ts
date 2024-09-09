export interface BooleanMapperInterface {
  mapper(input: unknown, byDefault?: boolean): boolean;
}
