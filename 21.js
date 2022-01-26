saveMyProfile("krissy", 1991, 3.81, false);
function saveMyProfile(name, birthday, GPA, newuser) {
 if (birthday >= 2004) {
 // Для родившихся в 2004 году и позже...
 }
 // ...Остальной код функции...
}
var student = "krissy";
var year = 1991;
var GPA = 381/100;
var status = "existinguser";
var isNewUser = (status == "newuser");
saveMyProfile(student, year, GPA, isNewUser);