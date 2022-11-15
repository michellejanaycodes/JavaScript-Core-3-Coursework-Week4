//password less than 8 characters, null, 1 uppercase, at least 1 number "Password rejected"

const passwordVerifier = (password) =>
  password &&
  password.length >= 8 &&
  password.search(/[A-Z]/) >= 1 &&
  password.search(/[0-9]/) >= 1
    ? "Password accepted"
    : "Password rejected";
    
module.exports = passwordVerifier;
