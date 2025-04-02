const projectsTag = `
            <a href="https://my-todolist-apppp.vercel.app/">My todo App</a>

`
const detailsButton = document.getElementById("projectsButton");
const detailsContainer = document.getElementById("projects");

detailsButton.addEventListener('click', displayDetails);

function displayDetails(){
    detailsContainer.innerHTML = projectsTag;
}