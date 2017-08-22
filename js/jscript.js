
var students = [
    { first_name: 'Michael', last_name: 'Jordan' },
    { first_name: 'John', last_name: 'Rosales' },
    { first_name: 'Mark', last_name: 'Guillen' },
    { first_name: 'KB', last_name: 'Tonel' }
]

var users = {
    'Students': [
        { first_name: 'Michael', last_name: 'Jordan' },
        { first_name: 'John', last_name: 'Rosales' },
        { first_name: 'Mark', last_name: 'Guillen' },
        { first_name: 'KB', last_name: 'Tonel' }
    ],
    'Instructors': [
        { first_name: 'Michael', last_name: 'Choi' },
        { first_name: 'Martin', last_name: 'Puryear' }
    ]
}

function returnNames(){
    console.log("Students");
    var counter = 1;
    for (var student in students)
    {
    
        counter++;
        var fullname = students[student].first_name + students[student].last_name
        var nameLength =fullname.length;
        console.log(counter + " " + students[student].first_name + " " + students[student].last_name + " " + nameLength);
    }
}


returnNames();
