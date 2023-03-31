
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
        if (Number.isInteger(pass)) unmetRequirements.push('Password must have letters');

        return unmetRequirements
        
    },

    register(formValues) {
        const unmetRequirements = [];

        unmetRequirements.push(this.password(formValues.password))
        unmetRequirements.push(this.email(formValues.email))
        if (unmetRequirements) return unmetRequirements
        return true
    }


}