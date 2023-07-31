import { environments } from "../../common-data-set/common-data";
import { AndroidHomeScreen} from "../../screenobjects/android/android-home-screen";
import { assert } from "chai";

describe('Smoke test example', () => {
//environments list we want to run tests on
const allEnvironments = environments();

allEnvironments.forEach((environment) => {
  it('Login to Android app', async()=> {

   const androidHomeScreen = new AndroidHomeScreen();
   await androidHomeScreen.navigateToLoginPage(environment);
   
   //chai is assertion library used with mocha
   await assert.ok(androidHomeScreen.checkUsernameInputField());
   
    
  })
})

})