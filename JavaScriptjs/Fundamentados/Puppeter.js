const puppeteer = require('puppeteer');

async function automate() {
    const browser = await puppeteer.launch({ headless: false }); // Mostrar interface gráfica
    const page = await browser.newPage();
    
    await page.goto('https://example.com'); // URL desejada
    
    // Capturar título da página
    const title = await page.title();
    console.log(`Título da página: ${title}`);
    
    // Tirar um print da página
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    console.log('Screenshot salva!');
    
    // Preencher um formulário fictício
    await page.type('input[name="email"]', 'teste@email.com');
    await page.type('input[name="password"]', 'senha123');
    await page.click('button[type="submit"]');
    console.log('Formulário preenchido e enviado!');
    
    // Esperar a navegação para a próxima página
    await page.waitForNavigation();
    console.log('Navegação concluída!');
    
    await browser.close();
}

automate();
