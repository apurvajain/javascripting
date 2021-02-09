//call by reference for object
//call by value for number, string, boolean

const student = {
    name:'Swetha',
    major:{
        cluster: 'Electronics',
        branch: 'ECE'
    }
}

const studentCopy = student
studentCopy.major.branch = 'CSE'

console.log(studentCopy) //branch: 'CSE'
console.log(student)  //branch: 'CSE'