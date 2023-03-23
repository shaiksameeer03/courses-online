function search() {
    // Get the input value and convert it to lower case for case-insensitive search
    let input = document.getElementById("search-items").value.toLowerCase();
    
    // Get all the course names
    let courses = document.getElementsByClassName("details");
    
    // Loop through all the courses
    for (let i = 0; i < courses.length; i++) {
      let course = courses[i];
      let name = course.getElementsByTagName("h6")[0];
      
      // Check if the course name matches the search input
      if (name.innerHTML.toLowerCase().indexOf(input) > -1) {
        // If it does, show the course
        course.parentElement.style.display = "";
      } else {
        // If it doesn't, hide the course
        course.parentElement.style.display = "none";
      }
    }
  }
  