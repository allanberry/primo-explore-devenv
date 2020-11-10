// const browzinePrimoAdapter = require("./browzine-primo-adapter");

const env = require('../../../../../env.js');

function appendJournalsCard() {
  var new_card = document.createElement("md-card");

  new_card.className = "default-card";
  new_card.innerHTML = `
  <md-card-title>
    <md-card-title-text>
      <span class="md-headline">Browzine</span>
    </md-card-title-text>
  </md-card-title>
  <md-card-content>
    <p><a href="https://browzine.com/libraries/81">Browzine</a> lets you flip through and read UIC Library-subscribed Journals, equivalent to browsing through physical Library stacks.</p>
  </md-card-content>
  <md-card-footer layout="row" style="text-align: right">
    <a class="uic_button md-button md-accent md-raised" href="https://browzine.com/libraries/81">Visit Browzine</a></a>
  </md-card-footer>`;

  function placeCard() {
    const existing_card = document.querySelectorAll("md-card")[0];
    if (window.location.href.match("jsearch")) {
      if (existing_card) {
        existing_card.parentElement.append(new_card);
      }
    }
  }

  // initial appearance on direct load
  const observer = new MutationObserver(function (mutations, me) {
    const existing_card = document.querySelectorAll("md-card")[0];
    if (existing_card) {
      placeCard();
      me.disconnect(); // stop observing
    }
  });

  // subsequent appearances after navigation
  let loc = window.location.href;
  setInterval(function () {
    if (loc != window.location.href) {
      placeCard();
      loc = window.location.href;
    }
  }, 100); // check every 100ms

  observer.observe(document, {
    childList: true,
    subtree: true,
  });
}

/**
 * adapted from https://thirdiron.atlassian.net/wiki/spaces/BrowZineAPIDocs/pages/79200260/Ex+Libris+Primo+Integration
 */
function primoIntegration(app) {
  // Load BrowZine Adapter

  window.browzine = {
    libraryId: env.BROWZINE_LIBRARYID,
    apiKey: env.BROWZINE_APIKEY,

    journalCoverImagesEnabled: true,
 
    journalBrowZineWebLinkTextEnabled: true,
    journalBrowZineWebLinkText: "View Journal Contents",
 
    articleBrowZineWebLinkTextEnabled: true,
    articleBrowZineWebLinkText: "View Issue Contents",
 
    articlePDFDownloadLinkEnabled: true,
    articlePDFDownloadLinkText: "Download PDF",
 
    articleLinkEnabled: true,
    articleLinkText: "Read Article",
 
    printRecordsIntegrationEnabled: true,
 
    unpaywallEmailAddressKey: "enter-your-email@your-institution-domain.edu",
 
    articlePDFDownloadViaUnpaywallEnabled: true,
    articlePDFDownloadViaUnpaywallText: "Download PDF (via Unpaywall)",
 
    articleLinkViaUnpaywallEnabled: true,
    articleLinkViaUnpaywallText: "Read Article (via Unpaywall)",
 
    articleAcceptedManuscriptPDFViaUnpaywallEnabled: true,
    articleAcceptedManuscriptPDFViaUnpaywallText: "Download PDF (Accepted Manuscript via Unpaywall)",
 
    articleAcceptedManuscriptArticleLinkViaUnpaywallEnabled: true,
    articleAcceptedManuscriptArticleLinkViaUnpaywallText: "Read Article (Accepted Manuscript via Unpaywall)",
  };



  var w = document.createElement("script");
  w.type = "text/javascript";
  w.async = true;
  w.src = "https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js";
  var b = document.body;
  b.appendChild(w);

  app.controller('prmSearchResultAvailabilityLineAfterController', function($scope) {
    window.browzine.primo.searchResult($scope);
  });

  app.component('prmSearchResultAvailabilityLineAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmSearchResultAvailabilityLineAfterController'
  });

}

module.exports = {
  appendJournalsCard,
  primoIntegration,
};
