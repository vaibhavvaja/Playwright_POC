import { test, expect } from '@playwright/test';


test.describe.parallel('suite', () => {

test('basic test', async ({ page }) => {

  await page.goto('https://time.is/');
  await page.locator(':nth-match(:text("AGREE"), 2)').click();
  expect (await page.locator('#dd').screenshot()).toMatchSnapshot('date.png');
  await page.locator('#top > div.icon-nav.tr > a').click();
  await page.locator('text=About').click();
  expect (await page.textContent('#cvwr > p:nth-child(12)')).toMatchSnapshot('disclaimer.text');
});

test('Admiral Test check', async ({page}) => {

  await page.goto('https://quote.admiral.com/Admiral/instaquote/details/msn');
  await page.fill('#postcode','CF24 3EX');
  expect(await page.screenshot()).toMatchSnapshot('HHIQ.png');
  expect(await page.textContent('body > eui-root > div:nth-child(3) > eui-instaquote > eui-instaquote-details > adm-wrap')).toMatchSnapshot('allContents.txt');  
})

});