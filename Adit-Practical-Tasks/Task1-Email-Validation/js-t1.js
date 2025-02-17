// let emailInput = "lav.vadnagara@adit.com";
let emailInput = "lav.vadnagara@adit.cm";
let emailRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|mil|co|io|info|biz|us|uk|in|ca|au)$/i;

if (emailRegex.test(emailInput)) {
  console.log("Valid email");
} else {
  console.log("Invalid email");
}
