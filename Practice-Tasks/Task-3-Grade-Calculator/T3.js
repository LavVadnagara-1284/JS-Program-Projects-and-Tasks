let gradeVal = Number(prompt('Please enter your grade in number: '));

if (isNaN(gradeVal) || gradeVal < 0 || gradeVal > 100) {
    alert('Invalid input! Please enter a number between 0 and 100.');
}
else if (gradeVal >= 90 && gradeVal <= 100) {
    alert('Your grade is A');
}
else if (gradeVal >= 80 && gradeVal <= 89) {
    alert('Your grade is B');
}
else if (gradeVal >= 70 && gradeVal <= 79) {
    alert('Your grade is C');
}
else if (gradeVal >= 60 && gradeVal <= 69) {
    alert('Your grade is D');
}
else {
    alert('Your have failed');
}