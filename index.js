console.log("index.js");
// random user.me api: -  home generator se
const data = [
  {
    name: "Rohan Das",
    age: 27,
    city: "bhagalpur",
    language: "C++",
    framework: "Bootstrap",
    Image: "https://randomuser.me/api/portraits/med/men/76.jpg",
  },
  {
    name: "Rani Mukharji",
    age: 18,
    city: "Mumbai",
    language: "Python",
    framework: "Django",
    Image: "https://randomuser.me/api/portraits/med/women/77.jpg",
  },
  {
    name: "Jeevan sir",
    age: 27,
    city: "Kolkata",
    language: "js",
    framework: "Django",
    Image: "https://randomuser.me/api/portraits/med/men/78.jpg",
  },
  {
    name: "Venky",
    age: 24,
    city: "Secondarabad",
    language: "Java",
    framework: "Tailwin Css",
    Image: "https://randomuser.me/api/portraits/med/women/79.jpg",
  },
  {
    name: "Pally san",
    age: 17,
    city: "Seoul",
    language: "Java",
    framework: "flask",
    Image: "https://randomuser.me/api/portraits/med/women/80.jpg",
  },
  {
    name: "Priyanka sahu",
    age: 22,
    city: "Bilaspur",
    language: "Javascript",
    framework: "Go",
    Image: "https://randomuser.me/api/portraits/med/women/81.jpg",
  },
  {
    name: "Pramod sahu",
    age: 25,
    city: "Haiderabad",
    language: "Typescript",
    framework: "angular",
    Image: "https://randomuser.me/api/portraits/med/men/82.jpg",
  },
];

//cv iterators:-
function cvIterator(profile) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profile.length
        ? { value: profile[nextIndex++], done: false }
        : { done: true };
    },
  };
}
let candidates = cvIterator(data);
nextCv();
const next = document.getElementById("next");
next.addEventListener("click", nextCv);

function nextCv() {
  const CurrentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let pfp = document.getElementById("pfp");
  if (CurrentCandidate != undefined) {
    image.innerHTML = `<img src = '${CurrentCandidate.Image}'>`;
    pfp.innerHTML = `<ul class="list-group">
 <li class="list-group-item active" aria-current="true">Name: ${CurrentCandidate.name}</li>
 
  <li class="list-group-item">Age: ${CurrentCandidate.age}</li>
  <li class="list-group-item">Lives in: ${CurrentCandidate.city}</li>
  <li class="list-group-item">Languages: ${CurrentCandidate.language}</li>
  <li class="list-group-item">Frameworks: ${CurrentCandidate.framework}</li>
 </ul>
`;
  } else {
    alert("No more applications left");
    window.location.reload();
  }
}

//again practice
const applicants = [
  {
    Name: "Priyanka Chopra",
    Age: 37,
    Language: "Python",
    Framework: "Bootstrap",
    City: "Mumbai",
    image: "https://randomuser.me/api/portraits/med/women/75.jpg",
  },
  {
    Name: "Nick Jonas",
    Age: 27,
    Language: "C++",
    Framework: "tailwind CSS",
    City: "Newyork",
    image: "https://randomuser.me/api/portraits/med/men/76.jpg",
  },
  {
    Name: "Rohit Shetti",
    Age: 44,
    Language: "Java",
    Framework: "Angular",
    City: "Mumbai",
    image: "https://randomuser.me/api/portraits/med/men/77.jpg",
  },
  {
    Name: "Hina Khan",
    Age: 33,
    Language: "Javascript",
    Framework: "React.js",
    City: "Delhi",
    image: "https://randomuser.me/api/portraits/med/women/78.jpg",
  },
  {
    Name: "Shivendra",
    Age: 25,
    Language: "Python",
    Framework: "Angular",
    City: "Banglore",
    image: "https://randomuser.me/api/portraits/med/men/79.jpg",
  },
];

//CV iterator
function resumeIterator(resumes) {
  let i = 0;
  return {
    next: function () {
      return i < resumes.length
        ? { value: resumes[i++], done: false }
        : { done: true };
    },
  };
}

let totalCandidates = resumeIterator(applicants);
nextCvv();


let next1 = document.getElementById("next1");
next1.addEventListener("click", nextCvv);

function nextCvv() {
  let candidates = totalCandidates.next().value;
  let image1 = document.getElementById("image1");
  let pfp1 = document.getElementById("pfp1");

  if(candidates != undefined){
  image1.innerHTML = `<img src = "${candidates.image}">`;

  pfp1.innerHTML = `<ul class="list-group">
  <li class="list-group-item active success" aria-current="true">Name: ${candidates.Name}</li>
  <li class="list-group-item">Age: ${candidates.Age}</li>
  <li class="list-group-item">City: ${candidates.City}</li>
  <li class="list-group-item">Language: ${candidates.Language}</li>
  <li class="list-group-item">Framework: ${candidates.Framework}</li>

</ul>`
}
else{
    alert("No more candidates.");
    window.location.reload();
}
}
