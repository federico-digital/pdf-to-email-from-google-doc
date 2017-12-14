function onOpen(e) {

// Create the menu item in the Google document
   DocumentApp.getUi()
       .createMenu('Email')
       .addItem('Send PDF', 'pdf')
       .addToUi();
 }
