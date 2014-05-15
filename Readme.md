Cordova PDF Example
==

This example demonstrates creating and displaying or emailing a PDF from within cordova using jsPDF.

It also provides an example of attaching a PDF to an email with a custom filename, and opening the email UI (using the plugin from [Cordova Email Composer Plugin](https://github.com/katzer/cordova-plugin-email-composer.git) ).

It is created as a NetBeans project. To use cordova-cli directly, you'll need to add the following plugins manually:

```
cordova add org.apache.cordova.inappbrowser

cordova add https://github.com/katzer/cordova-plugin-email-composer.git
```

The In-App Browser is used to display a PDF.