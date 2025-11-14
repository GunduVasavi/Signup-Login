// Signup Function
function signup(userName) {
    let usernames = ["vasavi", "kiran", "john"];

    if (usernames.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        usernames.push(userName);
        return "Signup Successful, Please Login";
    }
}

// Test
console.log(signup("vasavi"));  
console.log(signup("newuser"));
