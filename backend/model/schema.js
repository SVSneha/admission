var mongoose=require('mongoose')

const studentSchema = new mongoose.Schema({
    UGCollegeName: {},
    UGYearOfPassing: {},
    address: {},
    dob: {},
    gender: {},
    name: {},
    phone: {},
    sem1: {},
    sem2: {},
    sem3: {},
    sem4: {},
    sem5: {},
    sem6: {},
    tenthMarkInPercentage: {},
    tenthSchoolName: {},
    tenthYearOfPassing: {},
    twelthMarkInPercentage: {},
    twelthSchoolName: {},
    twelthYearOfPassing: {}
});
const Student = mongoose.model("student", studentSchema);
module.exports=Student
