import { readAllData } from "../backend/firebase.js";
import { admin } from "./data.js";

document.querySelector('.js-login-button')
    .addEventListener(('click'), () => {
        const EadminId = document.querySelector('.js-admin-id').value;
        const Epassword = document.querySelector('.js-admin-password').value;
        if (admin.adminId === EadminId && admin.password === Epassword) {
                console.log('Login Succes');
                document.querySelector('.js-auth-card').remove();
                readAllData();
            }
            else{
               
                document.querySelector('.js-auth-card').classList.add('shake-animation');
                setTimeout(() => {
                    document.querySelector('.js-auth-card').classList.remove('shake-animation');
                }, 500);
            }
    });

   




