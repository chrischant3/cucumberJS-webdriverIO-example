const pageUrl = '/'

const title = (browser) => {
    return browser.getTitle();
};

function PageModel(browser) {
    return {
        openPage: () => browser.url(pageUrl),
        title: () => title(browser)
    }
}

module.exports = PageModel;