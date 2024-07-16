import LoginPage from "../pageobjects/login.page.ts";

describe("Open eMIMS Plus Mobile App", () => {
  let loginButton: any;

  before(async () => {
    // Ensure the app is opened and the login button is located before running tests
    loginButton = await LoginPage.getloginButton();
  });


  it("should launch the app and check if the login button is displayed", async () => {
    // Assert that the login button is displayed
    const isDisplayed = await loginButton.waitForDisplayed({ timeout: 5000 });
    console.log("Login button displayed:", isDisplayed);
    expect(isDisplayed).toBe(true);
  });

  it("should click login button", async () => {
    const loginButton = await LoginPage.getloginButton();

    await loginButton.click();
    console.log(await loginButton.getText());
    console.log("Login button clicked");
  });
});

// import  {dummy}  from "../pageobjects/dummy.page"

// describe("Dummy Test", () => {
//     it("should load the dummy module", () => {
//         dummy();
//     });
// });
