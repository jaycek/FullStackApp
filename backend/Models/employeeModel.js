import mongoose from 'mongoose'

async function main() {
  await mongoose.connect('mongodb+srv://user1:NWdH60okKMkYY5zx@cluster0.fsqnz3x.mongodb.net/FSDCrashCourse');

  
}

main().then(console.log("Connected to DB")).catch(err => console.log(err));

const employeeSchema = new mongoose.Schema({
    name: String,
    age:Number,
    rank:String
});

const Employee = mongoose.model('employees', employeeSchema);
// Employee.collection.createIndex({name:1},{unique:true})

export default Employee;