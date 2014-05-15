var JutoPDFCreator = {
  createPDF: function(filename) {
    var doc = new jsPDF();
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'From within Cordova.');
    var uristring = doc.output('datauristring');
    
    // the email plugin uses a non-standard URI format, so the filename can be specified.
    if (filename) {
      var uristringparts = uristring.split(',');
      uristringparts[0] = "base64:" + escape(filename) + "//";

      var moddeduristring =  uristringparts.join("");
      return moddeduristring;
    } else {
      return uristring;
    }
  },
  displayPDF: function(uristring) {
    var ref = window.open(uristring, "_blank", "EnableViewPortScale=yes,location=no,disallowoverscroll=yes,allowInlineMediaPlayback=yes,toolbarposition=top,transitionstyle=fliphorizontal");
    return ref;
  },
  createAndDisplayPDF: function(filename) {
    var uristring = this.createPDF(filename);
    var ref = this.displayPDF(uristring);
    return ref;
  },
  emailPDF: function(datauri) {
    if (!window.plugin || !window.plugin.email) {
      console.error("no cordova-plugin-email-composer available");
      return;
    }

    var emailProperties = {
      to: ["mikecunneen@example.com"], // email addresses for TO field
//                cc: [], // email addresses for CC field
//                bcc: [], // email addresses for BCC field
      attachments: [datauri], // paths to the files you want to attach or base64 encoded data streams
      subject: "Sample PDF", // subject of the email
      body: "Sample PDF is attached.<br/>", // email body (could be HTML code, in this case set isHtml to true)
      isHtml: true // indicats if the body is HTML or plain text
    };
    var emailCallback = function() {
       console.log('email view dismissed');
    };
    window.plugin.email.isServiceAvailable(
            function(isAvailable) {
              window.plugin.email.open(emailProperties, emailCallback, this);
            }
    );
  },
  createAndEmailPDF: function(filename) {
    var uristring = this.createPDF(filename);
    this.emailPDF(uristring);
  }
};