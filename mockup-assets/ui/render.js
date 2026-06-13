const pw = require('/opt/node22/lib/node_modules/playwright');
(async () => {
  const browser = await pw.chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
  });
  const page = await ctx.newPage();
  for (const name of ['collection', 'stats-creature', 'stats-armory']) {
    await page.goto('file://' + __dirname + '/' + name + '.html');
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'ui_' + name.replace(/-/g, '_') + '.png' });
    console.log('rendered', name);
  }
  await browser.close();
})();
