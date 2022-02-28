
const studentsList = document.getElementById('studentList');
const searchBar = document.getElementById('searchBar');
let stuData = [];

searchBar.addEventListener('keyup' , (e) => {
    console.log(e);
});

const corsHeaders = {
    'Access-Control-Allow-Headers' : '*',
    'Access-Control-Allow-Methods' : 'POST',
    'Access-Control-Allow-Origin' : '*'
}

async function handelReequest(request){
    if(request.method === 'OPTIONS') {
        return new Response( "OK" , {headers:corsHeaders})
    }
}

const loadstudents = async() => {
    try {
        const res = await fetch('http://localhost:3000/Students');
        let stuData = await res.json();
        displayStudents(stuData);
      

    } catch (err) {
        console.log(err);
    }
};

const displayStudents = (students) => {
    const htmlString = students
    .map((student) => {
        return `<li>
        <p>First Name : ${student.firstname}</p>
        <p>Last Name :${student.lastname}</p>
        <p>Address :${student.Address}</p>
        <p>Contact of Student :${student.ContactInfo}</p>
    </li>`;
    })
    .join('');
studentsList.innerHTML = htmlString;

} 

loadstudents();