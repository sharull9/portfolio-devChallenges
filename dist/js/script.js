let projectValue = document.querySelector('.projects__title h3 span')

let projectList = document.querySelector('.projects').children
// console.log(projectList[0].classList);

function projectsNum (){
    let value = 0;
    for(let x of projectList){
        if(x.classList.contains('project')){
            value++
        }
    }
    projectValue.innerText = value;
}
projectsNum();