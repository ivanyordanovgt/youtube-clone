
export default function videoValidator(formValues) {
    if (!formValues.title || !formValues.id || !formValues.thumbnail || !formValues.description) {
        return "Inputs cannot be empty"
    }

    for (let value of Object.values(formValues)) {
        if (value.length < 5) {
            console.log(value)
            return 'Inputs should have at least 5 characters'
        }
    }

    return true
}