describe("first test", () => {
	it("Should check for a title", () => {
		cy.visit("/")
		cy.findByText("My App").should("be.visible")
	})
})
