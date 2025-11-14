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
// Login Function
function login(userName, password) {
    let usernames = ["vasavi", "kiran", "john"];
    let correctPassword = "Emp@123";

    if (!usernames.includes(userName)) {
        return "User Not Found, Please Signup";
    } else if (password !== correctPassword) {
        return "Wrong Password....";
    } else {
        return "Login Successful...";
    }
}

// Test login
console.log(login("vasavi", "Emp@123"));  // Login Successful...
console.log(login("vasavi", "wrong"));    // Wrong Password....
console.log(login("newuser", "Emp@123")); // User Not Found, Please Signup
