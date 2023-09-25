function Calculation(){
    const StudentMarks =ParseFloat(prompt(Entre))
}
let grade;
if (StudentMarks > 79){
    grade ="A"
}else if (StudentMarks >=60){
    grade ="B"
}else if (StudentMarks >= 50){
    grade ="C"
}else if (StudentMarks >=40){
    grade ="D"
}else{
    grade ="E"


}alert(`Grade: ${grade}`);
calculateGrade();