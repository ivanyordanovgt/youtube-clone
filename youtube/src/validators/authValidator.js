
export const authValidator = {

    email(email) {
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(emailRegex)) {
          return true;
        } else {
          return false;
        }
    },

    password(pass) {
        const unmetRequirements = [];

        if (pass.length < 8) unmetRequirements.push('Password must cointain 8 characters');
        if (isNumeric(pass)) unmetRequirements.push('Password must have letters');
        
    }


}