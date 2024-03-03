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

  var rawContent = message.getRawContent();
  var rawSection = CardService.newCardSection()
    .setHeader("Raw");
  var textParagraph = CardService.newTextParagraph()
    .setText(rawContent);
  rawSection.addWidget(textParagraph);

  // Email service analysis section
  var emailServices = {
    "amazonses.com": "Amazon SES",
    "sparkpost": "SparkPost",
    "mailgun": "Mailgun",
    "mtasv.net": "Postmark",
    "shopifyemail.com": "Shopify",
    "cuenote": "Cuenote",
    "hcm-nc.jp": "ラクス",
    "mpse.jp": "mpse.jp (EmberPoint)",
    "willap.jp": "WiLL Mail",
    "phm-brainpad.jp": "PHM (ブレインパッド)"
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
      .addSection(rawSection)
      .build();

  return [card];
}
