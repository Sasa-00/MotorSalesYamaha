const sgMail = require('@sendgrid/mail');

/* eslint-disable no-unused-vars */
exports.EmailSender = class EmailSender {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    return [];
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    sgMail.setApiKey('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');

    let msg = '';

    if(data.type === 'contact'){
      msg = {
        to: data.email,
        from: {
          name: 'Yamaha Srbija',
          email: 'miljatovicsasa9@gmail.com'
        },
        subject: 'Sa kontakt stranice',
        html: data.text,
      };
    } else {
      msg = {
        to: data.email,
        from: {
          name: 'Yamaha Srbija',
          email: 'miljatovicsasa9@gmail.com'
        },
        subject: 'Test Termin',
        html: '<strong>Zakazali ste probnu voznju u nasem salonu.</strong>',
      };
    }

    sgMail.send(msg).then((response) => {
      console.log('Email sent...');
      console.log(response);
    }).catch((err) => console.log(err));

    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
};
