function buildAddOn(e) {
  // Activate temporary Gmail add-on scopes.
  var accessToken = e.messageMetadata.accessToken;
  GmailApp.setCurrentMessageAccessToken(accessToken);

  var messageId = e.messageMetadata.messageId;
  var message = GmailApp.getMessageById(messageId);

  // Section for text/plain part
  var section = CardService.newCardSection();
  var textPart = CardService.newTextParagraph()
    .setText(message.getPlainBody());
  section.addWidget(textPart);

  // Build the main card after adding the section.
  var card = CardService.newCardBuilder()
    .addSection(section)
    .build();

  return [card];
}