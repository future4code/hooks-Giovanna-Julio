import { IIdGenerator } from "../../../src/business/Ports";

export class IdGeneratorMock implements IIdGenerator {
    public generate = jest.fn(()=>{
        return "id"
    }) 
}