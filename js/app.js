function fn() {
    var user = document.getElementById("user-name").value;
    let teacher = document.getElementById("teacher-check")
    let students = document.getElementById("student-check")
    let parents = document.getElementById("parents-check")
    if (user > 0) {
        if (teacher.checked == true) {
            location.replace("../teacher.html");
        }
        else if (students.checked == true) {
            location.replace("../students.html");
        }
        else if (multi.checked == true) {
            location.replace("../parents.html");
        }
    }
    else {
        alert("Please select any choice")
    };
}
