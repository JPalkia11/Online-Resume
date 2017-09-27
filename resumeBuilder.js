//Fill in with my own information and details. If anything cannot be filled in then replace with 'n/a'.

var bio = {
    "name": "Jayda Murray",
    "role": "Apprentice",
    "contacts": {
        "mobile": "850-728-2708",
        "email": "Honeycombz16@outlook.com",
        "twitter": "N/A",
        "github": "JPalkia11",
        "location": "Conneticut"
    },

    "welcomeMessage": "Hello World of Udacians!",
    "biopic": "https://media.tenor.com/images/e63c6e5bad162196621b12890c0d574f/tenor.gif",
    "skills": ["Art", "Writing", "Coding", "Sarcasm"]

};

var education = {
    "schools": [{
            "name": "Murray Homeschool Academy",
            "location": "Conneticut, USA",
            "degree": "Undergraduate Degree",
            "majors": ["Animation", "Computer Science"],
            "dates": "2005 - Present",
            "url": "N/A"
        },
		 {
            "name": "Kyoto Seika University",
            "location": "Kyoto, Japan",
            "degree": "Master's",
            "majors": ["Japanese Studies"],
            "dates": "2015",
            "url": "http://www.kyoto-seika.ac.jp/eng/"

        }],
    "onlineCourses": [{
        "title": "Front-End Developer Nanodegree",
        "school": "Udacity",
        "dates": "April 2017 - Present",
        "url": "https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001/"

	[{
		"title": "Study.com",
        "school": "https://study.com/",
        "dates": "January 2017 - Present",
        "url": "https://study.com/"
	}]
	}]
};


var work = {
    "jobs": [{
            "employer": "Nintendo",
            "title": "Cheif Graphic Designer",
            "location": "Tokyo",
            "dates": "(TBD)",
            "description": "This is one of the potential jobs I want to have. ^ ^"
        }


    ]


};

 var projects = {
    "projects": [{

            "title": "TBD",
            "dates": "2017-?",
            "description": "N/A",
            "images": ["http://www.solidbackgrounds.com/images/2560x1600/2560x1600-pale-blue-solid-color-background.jpg"]
        },
        {

            "title": "TBD",
            "dates": "2017-?",
            "description": "N/A",
            "images": ["http://www.solidbackgrounds.com/images/2560x1600/2560x1600-pale-blue-solid-color-background.jpg"]
        }


    ]


};

//Javascript Loops

//bio
  bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
    $("#header").append(HTMLskillsStart);

    for (var skill = 0; skill < bio.skills.length; skill++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts,#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);


};

//education
  education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        //console.log(formattedSchoolName+formattedLocation+formattedDegree);

        $(".education-entry:last").append(formattedSchoolName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (var course = 0; course < education.onlineCourses.length; course++) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOnlineSchoolName = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var url = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

        $("#education").append(HTMLschoolStart);
        var online_section = $("div.education-entry:last");
        online_section.append(formattedTitle, formattedOnlineSchoolName, formattedOnlineDates, url);


    }

};

//projects
 
//projects cont.
projects.display = function() {
    for (var entry = 0; entry < projects.projects.length; entry++) {
        $("#projects").append(HTMLprojectStart);
        var projectTitle = HTMLworkTitle.replace("%data%", projects.projects[entry].title);
        var projectDates = HTMLprojectDates.replace("%data%", projects.projects[entry].dates);
        var projectDesc = HTMLprojectDescription.replace("%data%", projects.projects[entry].description);

        $(".project-entry:last").append(projectTitle, projectDates, projectDesc);

        for (var image = 0; image < projects.projects[entry].images.length; image++) {
            var projectImage = HTMLprojectImage.replace("%data%", projects.projects[entry].images[image]);
            //console.log(projectImage);
            $(".project-entry:last").append(projectImage);
            $(".project-entry:last").find("img").css({
                "width": "300px",
                "height": "300px"
            });

        }


    }

};

//work
  work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedDescription, formattedLocation);

    }

};

bio.display();
work.display();
education.display();
projects.display();

//appending javascript

$("#main").append(internationalizeButton);

function inName(full_name) {
    var name = full_name.split(" ");
    var fname = name[0].substring(0, 1).toUpperCase() + name[0].substring(1).toLowerCase();
    var lname = name[1].toUpperCase();
    return fname + " " + lname;
}

$("#mapDiv").append(googleMap);