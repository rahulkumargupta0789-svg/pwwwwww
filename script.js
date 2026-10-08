function showCourses(){
    document.getElementById("heroMessage").innerText = "scroll down to see our courses";
}

function courseInfo(courseName){
    document.getElementById("courseMessage").innerText="You selected" = courseName + ". More details coming soon!";

}

let form = document.getElementById("contactForm");
form.addEventListener("submit",function(event){
    event.preventDefault();

    let name = duocument.getElementById("name").value;

    document.getElementById("formMessage").innerText ="Thank you, "+ name + "! We recieved your message.";

    form.reset();
});

let menuButton = document.getElementById("menuBtn");

menuButton.addEventListener("click", function(){

    let links = document.querySelector(".nav-links");

    if(links.style.display==="flex"){
        links.style.display= "none";
    }else{
        links.style.display = "flex";
        links.style.flexDirection = "column";

    }
});