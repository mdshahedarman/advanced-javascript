const student =[
    {id: 21, Name: 'Alom'},
    {id: 22, Name: 'kamal'},
    {id: 23, Name: 'salam'},
    {id: 24, Name: 'jibon'},
    {id :25, Name: 'nioy'},
    {id :26, Name: 'punom'},
    {id :27, Name: 'priti'}
];
const names = students.map( s=>s.Name);
const ids = students.map(s=> s.id);
const bigger = students.filter(s.id>40);
const biggerOne = student.find(s =>s.id>40);

console.log(biggerOne);