const { waitForElementAndClick } = require('./helpersMethods')
const loginPage = require('./pages/loginPage');
const { UserData, users } = require('./users');
const prod = 'https://www.claromusica.com/landing'
const beta = 'https://www.beta.claromusica.com/'
Feature('login');
/*Scenario('login success', async ({ I }) => {
    I.amOnPage('https://www.claromusica.com/landing');
    await waitForElementAndClick(I,'.primary-button.cookies-button',10)
    await waitForElementAndClick(I,'.primary-button',5)
    I.see('Ingresa con tu número Telcel')
    await waitForElementAndClick(I,"img[src='/dist/imagenes/email-login.svg']",20)
    I.fillField('Tu correo', 'ulisoa11@gmail.com');
    await waitForElementAndClick(I, '.primary-button.enter-button')
    I.see('Ingresa tu contraseña')
    I.fillField('password', 'ClaroMusica1')
    I.click('Continuar')
    await waitForElementAndClick(I, '.welcome-alert-button.welcome-primary-button')
    I.see('Claro música')
    I.scrollTo('//div[contains(text(),"Top listas")]');
    I.click("//img[@class='perfil_img_nav mCS_img_loaded']")
    I.click('Mis datos')
    I.saveScreenshot('debug.png');
});*/

/*Scenario('update Name', async ({ I ,loginPagePage}) => {
    // Instanciar la clase
    const userData = new UserData();
    console.log("email faker  " + userData.randomUserEmail())
    console.log("paswword faker  " + userData.randomUserPassword())
    console.log("paswword faker  " + userData.randomUserName())
    I.amOnPage(beta); 
    //loginPage.login(users.reg.email, users.reg.password)
    loginPage.loginReg(userData.randomUserEmail(), users.reg.password)
    loginPage.misDatos()
    loginPage.miNombre(userData.randomUserName())
});*/

Scenario('Delate account', async ({ I ,loginPagePage}) => {
    const userData = new UserData();
    console.log("Email faker  " + userData.randomUserEmail())
    console.log("Password faker  " + userData.randomUserPassword())
    console.log("Name user faker  " + userData.randomUserName())
    I.amOnPage(beta); 
    loginPage.loginReg(userData.randomUserEmail(), "ClaroMusica1")
    loginPage.misDatos()
    loginPage.eliminarCuenta()
});