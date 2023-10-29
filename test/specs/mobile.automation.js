describe('Open Application until Home Page is visible',() => {
    it('should open apps', async() => {
        await $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_name']").click();
        await $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_name']").setValue("Novan");
        await $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_weight']").click();
        await $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_weight']").setValue("100");
        await $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_height']").click();
        await $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_height']").setValue("180");
        await $("//android.widget.RadioButton[@resource-id='com.fghilmany.dietmealapp:id/rb_male']").click();
        await driver.hideKeyboard();
        await $("//android.widget.Button[@resource-id='com.fghilmany.dietmealapp:id/bt_next']").click();
        await $("//android.widget.RadioButton[@resource-id='com.fghilmany.dietmealapp:id/rb_rest']").click();
        await $("//android.widget.Button[@resource-id='com.fghilmany.dietmealapp:id/bt_finish']").click();
    })
})