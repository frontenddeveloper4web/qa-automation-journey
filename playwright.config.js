module.exports = {
    reporter: [
      ['list'], // show in terminal
      ['html', { open: 'never', outputFolder: 'playwright-report' }] // save HTML
    ],
  
    use: {
      screenshot: 'on',
      trace: 'on',
      video: 'retain-on-failure'
    },
  
    testDir: 'tests'
  };