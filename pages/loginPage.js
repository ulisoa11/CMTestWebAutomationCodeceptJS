const { waitForElementAndClick } = require('/Users/AMCO/AutomationCodeceptJSwithPlaywright/helpersMethods.js') 
const { I } = inject();
module.exports = {

 // setting locators
 fields: {
  btnAceptCookies: '.primary-button.cookies-button',
  btnEscuchaGratis: '.primary-button',
  btnEmailLogo: "img[src='/dist/imagenes/email-login.svg']",
  btnEmailContinuar: '.primary-button.enter-button',
  btnPasswordContinuar: 'Continuar',
  btnAlertWelcome: '.welcome-alert-button.welcome-primary-button'
},
labels:{
  lblbuttonDelateAccount: "//span[normalize-space()='Eliminar mi cuenta y todos los datos']",
  lblmsDelate: 'Eliminar mi cuenta y todos los datos',
  lblwaningDelate: '¡Estás a punto de eliminar tu cuenta y todos tus datos!',
  lblConfirmDalet: 'Tu cuenta y datos han sido eliminados',
  lblmjCreateAcouunt: 'Esta acción es irreversible. Para volver a utilizar Claro música, debes crear una nueva cuenta.'
},
buttons:{
  btnPrimaryDelate: "//button[@class='cmw-button cmw-button-primary']",
  btnAlertAceptDelate: "//button[normalize-space()='Confirmar']",
  btnUnderstand: 'Entendido'
},


 login(email, password){
    I.waitForVisible(this.fields.btnAceptCookies)
    I.click(this.fields.btnAceptCookies)
    I.waitForVisible(this.fields.btnEscuchaGratis, 10);
    I.click(this.fields.btnEscuchaGratis)
    I.see('Ingresa con tu número Telcel')
    I.waitForVisible( this.fields.btnEmailLogo,20)
    I.click( this.fields.btnEmailLogo)
    I.fillField('Tu correo', email);
    I.waitForVisible(this.fields.btnEmailContinuar,10)
    I.click(this.fields.btnEmailContinuar)
    I.see('Ingresa tu contraseña')
    I.fillField('password', password)
    I.click( this.fields.btnPasswordContinuar)
    I.waitForVisible( this.fields.btnAlertWelcome,10)
    I.click( this.fields.btnAlertWelcome)
  },

  loginReg(email, password){
    I.waitForVisible(this.fields.btnAceptCookies)
    I.click(this.fields.btnAceptCookies)
    I.waitForVisible(this.fields.btnEscuchaGratis, 10);
    I.click(this.fields.btnEscuchaGratis)
    I.see('Ingresa con tu número Telcel')
    I.waitForVisible( this.fields.btnEmailLogo,20)
    I.click( this.fields.btnEmailLogo)
    I.fillField('Tu correo', email);
    I.waitForVisible(this.fields.btnEmailContinuar,10)
    I.click(this.fields.btnEmailContinuar)
    I.see('Ingresa tu contraseña')
    I.see('Crear cuenta')
    I.waitForVisible("//a[normalize-space()='Crear cuenta']")
    I.click("//a[normalize-space()='Crear cuenta']")
    I.see('Crear una contraseña')
    I.wait(2)
    I.fillField("//input[@name='password']", password)
    I.click('Continuar')
    I.waitForVisible("//button[normalize-space()='Saltar']",15)
    I.click("//button[normalize-space()='Saltar']")
    I.waitForVisible("//button[normalize-space()='Ahora no']",15)
    I.click("//button[normalize-space()='Ahora no']")
    I.waitForVisible( this.fields.btnAlertWelcome,10)
    I.click( this.fields.btnAlertWelcome)
  },
  
  misDatos(){
    I.waitForVisible("//img[@class='perfil_img_nav mCS_img_loaded']",10)
    I.click("//img[@class='perfil_img_nav mCS_img_loaded']")
    I.click('Mis datos')
    I.saveScreenshot('misDatos.png');
  },

  miNombre(name){
    I.waitForVisible("//a[@href='/settings/edit-name']",10)
    I.click("//a[@href='/settings/edit-name']")
    I.see('Editar nombre')
    I.fillField("//input[@placeholder='Ingresa tu nombre']", name)
    I.click("//button[normalize-space()='Guardar']")
    //I.see('Tu perfil no ha sido actualizado, intenta nuevamente')
    I.see('Tu perfil ha sido actualizado')
    I.saveScreenshot('updateName.png')
  }, 

  eliminarCuenta(){
    I.click('#close_ticker')
    I.wait(this.labels.lblbuttonDelateAccount)
    I.scrollTo(this.labels.lblbuttonDelateAccount)
    I.click(this.labels.lblbuttonDelateAccount)
    I.see(this.labels.lblmsDelate)
    I.see(this.labels.lblwaningDelate)
    I.see(this.labels.lblmsDelate)
    I.waitForVisible(this.buttons.btnPrimaryDelate,10)
    I.click(this.buttons.btnPrimaryDelate)
    I.waitForVisible(this.buttons.btnAlertAceptDelate,10)
    I.click(this.buttons.btnAlertAceptDelate)
    I.see(this.labels.lblConfirmDalet)
    I.see(this.labels.lblmjCreateAcouunt)
    I.click(this.buttons.btnUnderstand)
    I.saveScreenshot('accountDelated.png')
  }
}
