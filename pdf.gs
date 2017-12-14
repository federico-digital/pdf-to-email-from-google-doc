function pdf() {
  
  DocumentApp.getActiveDocument().saveAndClose();
  
// Create a PDF from the Google document
  var doc = DocumentApp.getActiveDocument();
  var ui = DocumentApp.getUi();
  var docblob = DocumentApp.getActiveDocument().getAs('application/pdf');
  docblob.setName(doc.getName() + ".pdf");

// Prepare and send the email from the connected Gmail account 
  var recipients = "[INSERT EMAIL]";
  var ds = "[INSERT IMAGE URL]";
  var ds2 = UrlFetchApp.fetch(ds).getBlob();
                            
  var subject = "[INSERT EMAIL SUBJECT]";
  var string = "Hi Mark,<br><br> Please find attached the requested pdf.<br><br>Thanks,<br>Federico";
           
   var options = {};
        options.name = "[EMAIL SENDER VISUALIZED NAME]";
        options.replyTo = recipients;
        options.htmlBody = string + "<br><br><img src='cid:firma'>";
        options.inlineImages = {firma:ds2};
        options.attachments = [docblob];
    
   MailApp.sendEmail(recipients, subject, "Hello", options);
   
}
