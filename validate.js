function validate(phoneNumber) {
 if (phoneNumber.length > 8 ||
 phoneNumber.length < 7) {
 return false;
 }
 for (var i = 0; i < phoneNumber.length; i++) {
 if (i === 3) {
 if (phoneNumber.length === 8 && 
phoneNumber.charAt(i) !== '-') {
 return false;
 } else if (phoneNumber.length === 7 &&
 isNaN(phoneNumber.charAt(i))) {
 return false;
 }
 } else if (isNaN(phoneNumber.charAt(i))) {
 return false;
 }
 }
 return true;
}