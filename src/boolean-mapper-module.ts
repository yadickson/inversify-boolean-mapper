import { ContainerModule } from "inversify";
import { BooleanMapper } from "boolean-mapper";
import { BooleanMapperInterface } from "boolean-mapper-interface";
import { BOOLEAN_MAPPER_TYPE } from "boolean-mapper-type";

export class BooleanMapperModule extends ContainerModule {
  constructor() {
    super((bind) => {
      bind<BooleanMapperInterface>(BOOLEAN_MAPPER_TYPE.BooleanMapper).to(BooleanMapper);
    });
  }
}
