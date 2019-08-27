let assignments = [
    {
      title: 'Product Cards',
      dueDate: 'September 3, 2019',
      topic:'HTML & CSS',
      notes:'Style cards and print to the DOM',
      assignmentUrl:'www.nfl.com'
    },
    {
      title: 'Loops',
      dueDate: 'September 10, 2019',
      topic:'Javascript',
      notes:'Loop over array of teams and print the contents to DOM',
      assignmentUrl:'www.nba.com'
    },
    {
      title: 'React',
      dueDate: 'September 17, 2019',
      topic:'Set up files to accept data',
      notes:'This is a test',
      assignmentUrl:'www.nashville.gov'
    },
    {
      title: 'CSS',
      dueDate: 'September 24, 2019',
      topic:'CSS 101 Workshop',
      notes:'High overview of the world of styling ',
      assignmentUrl:'www.google.com'
    },
    {
      title: 'Flexbox',
      dueDate: 'September 31, 2019',
      topic:'What is Flexbox?',
      notes:'Flexbox will add more to your coding experience',
      assignmentUrl:'fristartmuseum.org'
    }
  ];

  const printToDom = (stringToPrint,divId) =>{
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
  };


  const makeAssignments = (info) => {
    let assignString = ``;
      assignments.forEach((hw) => {
      assignString  += `<div class="card">`;
      assignString  += `<h1 class="title">${hw.title}</h1>`;
      assignString  += `<p  class="due-date">${hw.dueDate}</p>`;
      assignString  += `<h2 class="topic">${hw.topic}</h2>`;
      assignString  += `<p class="notes">${hw.notes}</p>`;
      assignString  += `<h3>${hw.assignmentUrl}</h3>`;
      assignString  += `</div>`;
    });
    printToDom(assignString,'assign');
};
makeAssignments();