describe('Android Elements Tests', () => {
  it('Find element by accessibility id', async () => {
    // find element by accessibilty id
    const appOpt = await $('~App');

    // click on element
    await appOpt.click();

    // assertion
    const actionBar = await $('~Action Bar');
    await expect(actionBar).toBeExisting();
  });

  it('Find Element by class name', async () => {
    //find element by classname
    const className = await $('android.widget.TextView');
    // console.log(await className.getText());

    // assertion
    await expect(className).toHaveText('API Demos');
  });

  xit('Find element by xpath', async () => {
    //xpath - (tagname[@attribute=value])
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

    //find by resource id
    await $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
    ).click();

    //find element by text
    await $('//android.widget.TextView[@text="Command two"]').click();

    //find by class
    const textAssertion = await $('//android.widget.TextView');
    await expect(textAssertion).toHaveText('You selected: 1 , Command two');
  });

  it('Find element by UIAutomator', async () => {
    //find by text contains
    await $('android=new UiSelector().textContains("Alert")').click();
  });

  it('Find multiple elements', async () => {
    const expectedList = [
      'API Demos',
      "Access'ibility",
      'Accessibility',
      'Animation',
      'App',
      'Content',
      'Graphics',
      'Media',
      'NFC',
      'OS',
      'Preference',
      'Text',
      'Views',
    ];
    const actualList = [];

    // find multiple element
    const textList = await $$('android.widget.TextView');

    // loop through them
    for (const element of textList) {
      actualList.push(await element.getText());
    }

    // assert the list
    await expect(actualList).toEqual(expectedList);
  });

  it('Working with Text field', async () => {
    // access the auto complete screen
    await $('~Views').click();
    await $('//*[@text="Auto Complete"]').click();
    await $('//*[@content-desc="1. Screen Top"]').click();

    //enter text
    const textInput = await $(
      '//*[@resource-id="io.appium.android.apis:id/edit"]'
    );
    await textInput.addValue('Canada');

    // verify the country name
    await expect(textInput).toHaveText('Canada');
  });
});
