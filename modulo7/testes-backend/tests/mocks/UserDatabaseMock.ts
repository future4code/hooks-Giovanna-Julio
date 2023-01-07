import { UserRepository } from "../../src/business/UserRepository";
import { User } from "../../src/models/User";
import { userMock } from "./UserMock";

export class UserDatabaseMock implements UserRepository {

  public async getUserById(id: string): Promise<User | undefined> {
    return id === "id" ? userMock : undefined;
  }

}
