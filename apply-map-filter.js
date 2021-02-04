const students =[
    {id: 21, name: 'Alom'},
    {id: 22, name: 'kamal'},
    {id: 23, name: 'salam'},
    {id: 24, name: 'jibon'},
    {id :25, name: 'nioy'},
    {id :26, name: 'punom'},
    {id :27, name: 'priti'}
];
const names = students.map( s => s.name);
const ids = students.map(s => s.id);
// console.log(names);
const bigger = students.filter(s.id>40);
const biggerOne = student.find(s =>s.id>40);

console.log(biggerOne);