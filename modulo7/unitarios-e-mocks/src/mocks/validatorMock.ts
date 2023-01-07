// It is better to mock the validateCharacter function since its the one being injected in the other function, not the other way around.
describe("Validator mocks testing", ()=>{
    test("Creating Mocks output true", () => {
    const validatorMock = jest.fn(() => {
			return true
		});
    });

    test("Creating Mocks output false", () => {
        const validatorMock = jest.fn(() => {
                return false
            });
    });
})
