

// BIO
bio.display = function() {
    var name = HTMLheaderName.replace("%data%", bio.name);
    var role = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(role);
    $("#header").prepend(name);
    var affinity = HTMLcontactGeneric.replace("%data%", bio.contacts.affinity);
    affinity = affinity.replace("%contact%", "affinity");
    $("#topContacts, #footerContacts").append(affinity);
    var wand = HTMLcontactGeneric.replace("%data%", bio.contacts.wand);
    wand = wand.replace("%contact%", "wand");
    $("#topContacts, #footerContacts").append(wand);
    var locations = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(locations);
    var biopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(biopic);
    var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(welcomeMessage);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var skill = HTMLskills.replace("%data%", bio.skills[i]);
            $(".flex-column:last").append(skill);
        }
    }
};

// WORK EXPERIENCE
work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var employer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var title = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var dates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var loc = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var description = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(employer + title);
        $(".work-entry:last").append(dates);
        $(".work-entry:last").append(loc);
        $(".work-entry:last").append(description);
    }
};


// PROJECTS
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var title = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(title);
        var dates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(dates);
        var description = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(description);
        var image = HTMLprojectImage.replace("%data%", projects.projects[i].images);
        $(".project-entry:last").append(image);
    }
};

// EDUCATION
education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var name = HTMLschoolName.replace("%data%", education.schools[i].name);
        var degree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(name + degree);
        var dates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(dates);
        var location = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(location);
        for (var m = 0; m < education.schools[i].majors.length; m++){
          var major = HTMLschoolMajor.replace("%data%", education.schools[i].majors[m]);
          $(".education-entry:last").append(major);
      }
    }
    $("#education").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++){
      $("#education").append(HTMLschoolStart);
      var title = HTMLonlineTitle.replace("#", education.onlineCourses[i].url);
      title = title.replace("%data%", education.onlineCourses[i].title);
      var school = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      $(".education-entry:last").append(title + school);
      var dates =  HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
      $(".education-entry:last").append(dates);
      $(".education-entry:last").append("<br>");

    }
};


work.display();
projects.display();
education.display();
bio.display();

$("#mapDiv").append(googleMap);
$("#mapDiv").append(map);
