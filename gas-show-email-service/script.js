function buildAddOn(e) {
  var messageId = e.gmail.messageId;
  var accessToken = e.gmail.accessToken;
  GmailApp.setCurrentMessageAccessToken(accessToken);
  
  var message = GmailApp.getMessageById(messageId);

  var messageIdHeader = message.getHeader("Message-ID");
  var midSection = CardService.newCardSection()
    .setHeader("Message-ID");
  var textParagraph = CardService.newTextParagraph()
    .setText(messageIdHeader);
  midSection.addWidget(textParagraph);

  // Extracting header from raw content
  var rawContent = message.getRawContent();
  // Finding the end of the header section
  var headerEndIndex = rawContent.indexOf("\r\n\r\n"); // RFC 2822 standard
  if (headerEndIndex === -1) {
    headerEndIndex = rawContent.indexOf("\n\n"); // Fallback for non-standard formats
  }
  var headerContent = rawContent;
  if (headerEndIndex !== -1) {
    headerContent = rawContent.substring(0, headerEndIndex);
  }
  var headersSection = CardService.newCardSection()
    .setHeader("Headers");
  var textParagraph = CardService.newTextParagraph()
    .setText(headerContent);
    headersSection.addWidget(textParagraph);

  // Email service analysis section
  var emailServices = {
    "amazonses.com": "Amazon SES",
    "sparkpost": "SparkPost",
    "mailgun": "Mailgun",
    "mtasv.net": "Postmark",
    "mailchimp": "Mailchimp",
    "mailjet.com": "Mailjet",
    "zendesk": "Zendesk",
    "marketo": "Marketo",
    "exacttarget.com": "Account Engagement (Pardot)",
    "hubspot.com": "HubSpot",
    "shopifyemail.com": "Shopify",
    "cuenote": "Cuenote",
    "hcm-nc.jp": "ラクス",
    "mpse.jp": "mpse.jp (EmberPoint)",
    "willap.jp": "WiLL Mail",
    "phm-brainpad.jp": "PHM (ブレインパッド)",
    "repica.jp": "アララ",
    "shanon-services.com": "SHANNON MARKETING PLATFORM",
    "crmstyle.com": "シナジーマーケティング",
  };
  var identifiedServices = [];
  // SendGrid detection
  if (rawContent.includes("sendgrid.info") || rawContent.includes("sendgrid.net") || rawContent.includes("geopod-ismtpd")) {
    identifiedServices.push("SendGrid");
  }
  for (var key in emailServices) {
    if (rawContent.indexOf(key) !== -1) {
      identifiedServices.push(emailServices[key]);
    }
  }
  var serviceSection = CardService.newCardSection()
    .setHeader("Email Service");
  var serviceText = identifiedServices.length > 0 ? identifiedServices.join(", ") : "不明";
  var serviceParagraph = CardService.newTextParagraph()
    .setText(serviceText);
  serviceSection.addWidget(serviceParagraph);

  // List-Unsubscribe-Post header section
  var listUnsubscribePostHeader = message.getHeader("List-Unsubscribe-Post") ? "あり" : "なし";
  var unsubscribeSection = CardService.newCardSection()
    .setHeader("List-Unsubscribe-Postヘッダ有無");
  var unsubscribeParagraph = CardService.newTextParagraph()
    .setText(listUnsubscribePostHeader);
  unsubscribeSection.addWidget(unsubscribeParagraph);

  var card = CardService.newCardBuilder()
      .addSection(serviceSection)
      .addSection(unsubscribeSection)
      .addSection(headersSection)
      .build();

  return [card];
}
