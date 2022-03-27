let students = [
    {
        name:'Nik',
        age: 22,
        isMarried: true,
        scores: 81
    },
    {
        name:'Bob',
        age: 27,
        isMarried: false,
        scores: 123
    },
    {
        name:'Jon',
        age: 47,
        isMarried: true,
        scores: 91
    },
    {
        name:'Bred',
        age: 36,
        isMarried: false,
        scores: 100
    }
]
console.log(students.map((el)=>el.name))
console.log (myMap(students,el=>el.name))
function myMap (array,callback) {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr[i] = callback(array[i])
    }
    return newArr
}

console.log(students.filter(el=>el.scores <= 100))
console.log(newStudents(students,el => el.scores <=100))
function newStudents (array,callback) {
    const newFilterArray = []
    for (let i=0; i < array.length; i++){
     callback(array[i]) ? newFilterArray.push(array[i]): null
    }
    return newFilterArray
}
console.log(students.find(el=>el.name==='Bob'))
console.log(newName(students,el=>el.name==='Bob'))
function newName (array,callBack) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
       if (callBack(array[i])) {
           newArray.push(array[i])
       }
    }
    return newArray
}