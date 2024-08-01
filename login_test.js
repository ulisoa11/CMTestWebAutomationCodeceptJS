
Feature('login');

Scenario('login success',  async ({ I }) => {
  I.amOnPage('https://www.claromusica.com/landing');
  I.wait(2)
  I.click('Aceptar todas');
  I.wait(2)
  I.click('Escucha gratis')
  I.wait(3)
  I.click("img[src='/dist/imagenes/email-login.svg']")
  I.wait(2)
  I.fillField('Tu correo', 'ulisoa11@gmail.com');
  I.wait(2)
  I.click('Continuar')
  I.wait(2)
  I.fillField('password','ClaroMusica1')
  I.click('Continuar')
  I.wait(4)
  I.click('Entendido')
  I.scrollTo('//div[contains(text(),"Top listas")]');
  I.click("//img[@class='perfil_img_nav mCS_img_loaded']")
  I.click('Mis datos')
  I.saveScreenshot('debug.png');

}); 

Scenario('Navergar',  async ({ I }) => {
    I.amOnPage('https://www.claromusica.com/landing');
    I.wait(2)
    I.click('Aceptar todas');
    I.wait(2)
    I.click('Escucha gratis')
    I.wait(3)
    I.click("img[src='/dist/imagenes/email-login.svg']")
    I.wait(2)
    I.fillField('Tu correo', 'ulisoa11@gmail.com');
    I.wait(2)
    I.click('Continuar')
    I.wait(2)
    I.fillField('password','ClaroMusica1')
    I.click('Continuar')
    I.wait(4)
    I.click('Entendido')
    I.click('Inicio')
    I.wait(2)
    I.see('Hola,')
    I.saveScreenshot('Inicio.png');
    I.click('Buscar')
    I.wait(2)
    I.see('Géneros más buscados')
    I.saveScreenshot('Buscar.png');
    I.click('Buscar')
    I.wait(2)
    I.saveScreenshot('Buscar.png');
    I.click('Países');
    I.wait(2);
    I.see('Países');
    I.saveScreenshot('Paises.png');

  });