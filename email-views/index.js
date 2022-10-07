const path = require('path');
const fs = require('fs');
const handlebars = require('handlebars');

const verifyEmailSource = fs.readFileSync( path.resolve(__dirname, './verify.handlebars'), 'utf8' );
const forgotPasswordEmailSource = fs.readFileSync( path.resolve(__dirname, './forgotpassword.handlebars'), 'utf-8')
const fa2AuthSorurce = fs.readFileSync( path.resolve(__dirname, './fA2Auth.handlebars'), 'utf-8')

const verifyEmailTemplate = handlebars.compile(verifyEmailSource);
const forgotPasswordTemplate = handlebars.compile(forgotPasswordEmailSource)
const fA2AuthTemplate = handlebars.compile(fa2AuthSorurce)

module.exports = {
  verifyEmailTemplate,
  forgotPasswordTemplate,
  fA2AuthTemplate
};
