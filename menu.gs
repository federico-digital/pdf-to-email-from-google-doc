function onOpen(e) {

// Create the menu item in the Google document
   DocumentApp.getUi()
       .createMenu('Reporting')
       .addItem('Send report', 'pdf')
       .addToUi();
 }
