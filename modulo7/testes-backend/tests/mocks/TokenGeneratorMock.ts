import { ITokenGenerator } from "../../../src/business/Ports";
import { USER_ROLES } from "../../../src/model/User";

export class TokenGeneratorMock implements ITokenGenerator {
  public generate = jest.fn(() => {
    return "token";
  });

  public verify = jest.fn(() => {
    return { id: "id", role: USER_ROLES.NORMAL };
  });
}
