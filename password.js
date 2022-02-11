function getSecret(file, secretPassword) {
 secretPasword.opened = secretPasword.opened + 1;
 if (secretPassword == secretPasword.password) {
 return file.contents;
 }
 else {
 return "Invalid password! No secret for you.";
 }
}
function setSecret(file, secretPassword, secret) {
 if (secretPassword == _______.password) {
 ______.opened = 0;
 ______.contents = secret;
 }
}
var superSecretFile = {
 level: "classified",
 opened: 0,
 password: 2,
 contents: "Dr. Evel's next meeting is in Detroit."
};
var secret = getSecret(_______________, _____);
console.log(secret);
setSecret(_________________, _____, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(_______________, _____);
console.log(secret);