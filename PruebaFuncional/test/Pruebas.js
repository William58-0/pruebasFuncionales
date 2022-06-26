require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');

describe('registroCorrecto', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().withCapabilities(webdriver.Capabilities.chrome()).build() 
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('registroCorrecto', async function() {
    await driver.get("http://localhost:3000/registro")
    await driver.manage().window().setRect({ width: 1382, height: 744 })
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label/input")).click()
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label/input")).sendKeys("william")
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label[2]/input")).sendKeys("borrayo")
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label[3]/input")).sendKeys("wiliamborrayo@gmail.com")
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label[4]/input")).sendKeys("2001-10-19")
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label[5]/input")).sendKeys("1234")
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label[6]/input")).sendKeys("1234")
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/button")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath("(//button[@type=\'button\'])[3]")).click()
    await driver.close()
  })
})

describe('registroIncorrecto', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().withCapabilities(webdriver.Capabilities.chrome()).build() 
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('registroIncorrecto', async function() {
    await driver.get("http://localhost:3000/registro")
    await driver.manage().window().setRect({ width: 1382, height: 744 })
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label/input")).click()
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label/input")).sendKeys("william")
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label[2]/input")).click()
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label[2]/input")).sendKeys("borrayo")
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label[5]/input")).click()
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label[5]/input")).sendKeys("1234")
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label[6]/input")).click()
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label[6]/input")).sendKeys("1234")
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/button")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath("(//button[@type=\'button\'])[3]")).click()
    await driver.close()
  })
})


describe('inicioSesionCorrecto', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().withCapabilities(webdriver.Capabilities.chrome()).build() 
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('inicioSesionCorrecto', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1050, height: 708 })
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label/input")).click()
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label/input")).sendKeys("wiliamborrayo@gmail.com")
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label[2]/input")).click()
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label[2]/input")).sendKeys("1234")
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/button")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath("(//button[@type=\'button\'])[3]")).click()
    await driver.close()
  })
})

describe('inicioSesionIncorrecto', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().withCapabilities(webdriver.Capabilities.chrome()).build() 
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('inicioSesionIncorrecto', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1050, height: 708 })
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label/input")).click()
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label/input")).sendKeys("wiliamborrayo@gmail.com")
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label[2]/input")).click()
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label[2]/input")).sendKeys("4321")
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/button")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath("(//button[@type=\'button\'])[3]")).click()
    await driver.close()
  })
})

describe('asignacionCorrecta', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().withCapabilities(webdriver.Capabilities.chrome()).build() 
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('asignacionCorrecta', async function() {
    await driver.get("http://localhost:3000/asignacion")
    await driver.manage().window().setRect({ width: 1382, height: 744 })
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label[2]/select")).click()
    {
      const dropdown = await driver.findElement(By.css("label:nth-child(6) > select"))
      await dropdown.findElement(By.xpath("//option[. = 'Lenguaje']")).click()
    }
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/button")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath("(//button[@type=\'button\'])[3]")).click()
    await driver.close()
  })
})

describe('asignacionIncorrecta', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().withCapabilities(webdriver.Capabilities.chrome()).build() 
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('asignacionIncorrecta', async function() {
    await driver.get("http://localhost:3000/asignacion")
    await driver.manage().window().setRect({ width: 1382, height: 744 })
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/label[2]/select")).click()
    {
      const dropdown = await driver.findElement(By.css("label:nth-child(6) > select"))
      await dropdown.findElement(By.xpath("//option[. = 'Lenguaje']")).click()
    }
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/form/button")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath("(//button[@type=\'button\'])[3]")).click()
    await driver.close()
  })
})


