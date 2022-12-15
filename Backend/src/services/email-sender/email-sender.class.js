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

    sgMail.send(msg).then((response) => console.log('Email sent...')).catch((err) => console.log(err));

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
