# Send a Google document as PDF attachment by email
Automatically create a PDF from a Google document and send it via email.<br><br>

1. Open a new <a href="https://docs.google.com/document/">Google document</a>
1. Click on 'Tools > Script editor'
1. Copy the code in this repository in new scripts files inside your new App Script project
1. In the pdf.gs code, substitute:
   1. [INSERT EMAIL] at line 12 with the recipient / recipients of the email (if multiple, separate emails with comma)
   1. [INSERT IMAGE URL] at line 13 with the URL of the image you want to include in the email body after text
   1. [INSERT EMAIL SUBJECT] at line 16 with the desired email subject
   1. The text of the string at line 17 with your own text; this will be the email content, the HTML tag <br> serves as line break
   1. [EMAIL SENDER VISUALIZED NAME] at line 20 with the desired sender's name
   1. "Hello" at line 26 with the desired fallback body text, for devices uncapable of rendering HTML
   
1. Save all files in the App Script project and close it
1. Refresh the document page, update its content and click on the menu to 'Email > Send PDF'
1. Your document will automatically be exported in PDF and sent to the recipients specified in pdf.gs
