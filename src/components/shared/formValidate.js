export const registerOptions = {
    		Name :{ 
                required: {
                    value: true,
                    message: "Please Enter Name"
                  }, 
                  pattern: {
                    // value: /^[a-zA-Z]+$/,
                    value: /^[a-zA-Z ]*$/,
                    message: "Invalid Name"
                  },
                  maxLength: {
                    value: 20,
                    message: "Cannot Exceed 20"
                  },
                  minLength: {
                    value: 5,
                    message: "Invalid Name"
                  }
            },
    		Email : { 
                required: {
                    value: true,
                    message: "Email is required"
                  }, 
                  pattern: {
                    value: /[^@\s]+@[^@\s]+\.[^@\s]{3}/i,
                    message: "Please Enter Valid Email"
                 }
            },
    		Telephone : { 
                required: {
                    value: true,
                    message: "Please Enter your mobile Number"
                  }, 
                  pattern: {
                    value: /^[0-9+-]+$/,
                    message: "Invalid mobile Number"
                  }, 
                  minLength: {
                    value: 10,
                    message: "Invalid mobile Number"
                  }, 
                  maxLength: {
                    value: 10,
                    message: "Invalid mobile Number"
                  }
            },
    		Subject : { 
                required: {
                    value: true,
                    message: "Please Enter Subject"
                  }, 
                  maxLength: {
                    value: 50,
                    message: "Cannot exceed 50 characters"
                  }
            },
    		// Message : { 
        //         required: {
        //             value: true,
        //             message: "Please Enter Message"
        //           }, 
        //           maxLength: {
        //             value: 280,
        //             message: "Cannot exceed 280 characters."
        //           }
        //     }
    		password: {
    			required: "Password is required",
    			minLength: {
    			  value: 8,
    			  message: "Password must have at least 8 characters"
    			}
    		 }
}

