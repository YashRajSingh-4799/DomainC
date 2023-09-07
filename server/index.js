const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ 
        headless: false,
        defaultViewport: false,
        userDataDir: "./tmp",
    });
    const userDefinedData = "www.yashrajsingh.com";

    // Google Domains
    const page = await browser.newPage();
    await page.goto(
      `https://domains.google.com/registrar/search?searchTerm=${userDefinedData}`
    );


    // Namecheap Domains
    const page2 = await browser.newPage();
    await page2.goto(
      `https://www.namecheap.com/domains/registration/results/?domain=${userDefinedData}`
    );

    // Domain.com Domains
    const page3 = await browser.newPage();
    await page3.goto(
      `https://www.domain.com/registration/?flow=domainDFE&search=${userDefinedData}`
    );
    // https://www.godaddy.com/en-in/domainsearch/find?checkAvail=1&domainToCheck=www.yashrajsingh.com
    // Logic to search for a domain name on GoDaddy
    // const searchInputSelector = 'input[type="text"][name="domainToCheck][class="searchInput form-control"]';
    // const searchInputSelector = 'input[type="text"][name="domainToCheck"]';


    // Enter user-defined data (search query) into the search bar
    // await page.type(searchInputSelector, userDefinedData);

    // Optionally, you can press "Enter" to submit the search
    // await page.keyboard.press("Enter");
    
    // await browser.close();
    })();