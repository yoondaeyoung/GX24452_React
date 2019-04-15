/**
 * validate.js
 *
 * This validate function is invoked synchronously from Redux Form
 * whenever the form is submitted. Errors are passed back via the
 * errors object, whose props correspond to the name of the Redux
 * Form field experiencing the error.
 *
 * @see https://redux-form.com/7.4.2/examples/syncvalidation/
 *
 * @param {} values An immutable Map of values from Redux Form
 * @returns An errors object with any validation errors
 */
export const validate = (values) => {
  const errors = {};

  // TODO: Validate that the user has entered a username, first name, and last name
	if (!values.firstName) {
	  errors.firstName = 'first name is required'
	} 
	if (!values.lastName) {
	  errors.lastName = 'last nanme is equired'
	} 
	if (!values.userName) {
	    errors.userName = 'user name is required'
	}
  	return errors;
};
