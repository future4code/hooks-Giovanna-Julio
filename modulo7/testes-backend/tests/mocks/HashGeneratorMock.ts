import { IHashManager } from "../../../src/business/Ports";

export class HashGeneratorMock implements IHashManager {
  public hash = jest.fn(async () => {
    return "hash";
  });

  public compareHash = jest.fn(async (s: string, hash: string) => {
    return s === hash;
  });
}
