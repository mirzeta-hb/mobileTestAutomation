export class AndroidHomeScreen{
    get allowPermission() { return $('id=com.android.permissioncontroller:id/permission_allow_button') // find element by id
    }
    get serviceUrlField() {return $('id=com.metrix.metrixmobile:id/serviceUrl')}
    get connectButton() {return  $('id=com.metrix.metrixmobile:id/validateUrl')}
    get personInputField() {return $('id=com.metrix.metrixmobile:id/personId')}

    async navigateToLoginPage(url: string){
        await this.allowPermission.click();
        (await this.serviceUrlField).click();
        (await this.serviceUrlField).setValue(url);
        (await this.connectButton).click();
    }

    async checkUsernameInputField(){
       return await expect(this.personInputField).toBeDisplayed();

    }

}