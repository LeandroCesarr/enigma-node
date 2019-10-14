import auth from './components/auth'
import secret from './components/secret';
import admin from './components/admin';

const form = document.querySelector('[data-auth]');
const secretForm = document.querySelector('[data-secret]');

if (secretForm) secret();
if (form) auth();

admin.init();