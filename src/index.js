import { renderHeader } from './header';
import { renderAside } from './aside';
import { renderProject } from './project';
import './style.css';
import { renderProjectModal } from './project-modal';
import { renderTaskModal } from './task-modal';

const body = document.querySelector('body');

let projectList = JSON.parse(localStorage.getItem('projectList')) || [];

class Project {
  constructor(name,desc) {
    this.name = name;
    this.desc = desc;
    this.tasks = [];
  }
}

class Task {
  constructor(name, desc, dueDate, priority) {
    this.name = name;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = false;
    this.subtasks = [];
  }
}

let inbox;
let curProject = 0;
let tempProject;

function initialize() {
  if(projectList.length === 0) {
    inbox = new Project('Inbox', 'Default');
    projectList.push(inbox);
    curProject = 0;

    const task = new Task('stuff', '', '', 'Low');
    task.complete = true;
    inbox.tasks.push(task);

    const task2 = new Task('things', '', '', 'Low');
    inbox.tasks.push(task2);

    const task3 = new Task('that', '', '', 'Low');
    inbox.tasks.push(task3);
    localStorage.setItem('projectList', JSON.stringify(projectList));
  };
}

function home(curProject) {
  body.innerHTML = '';
  renderHeader();
  renderAside();
  console.log(curProject);
  renderProject(curProject);
}

document.addEventListener('click', (e) => {
  const classes = e.target.classList;
  const index = e.target.dataset.index;
  const modal = document.querySelector('.modal');

  if(classes.value.includes('trash')){
    projectList[curProject].tasks.splice(index,1);
    localStorage.setItem('projectList', JSON.stringify(projectList));
    home(curProject);
  }

  if(classes.value.includes('check')){
    e.target.checked ? projectList[curProject].tasks[index].complete = true : projectList[curProject].tasks[index].complete = false;
    localStorage.setItem('projectList', JSON.stringify(projectList));
    home(curProject);
  }

  if(classes.value.includes('add-project')){
    renderProjectModal();
  }

  if(classes.value.includes('add-task')){
    renderTaskModal();
  }

  if(classes.value.includes('project-submit')){
    e.preventDefault();
    const pname = document.querySelector('#name').value;
    const pdesc = document.querySelector('#desc').value;
    const newProject = new Project(pname, pdesc);
    projectList.push(newProject);
    localStorage.setItem('projectList', JSON.stringify(projectList));
    curProject = projectList.length - 1;
    home(curProject);
  }

  if(classes.value.includes('task-submit')){
    e.preventDefault();
    const tname = document.querySelector('#name').value;
    const tdesc = document.querySelector('#desc').value;
    const tdueDate = document.querySelector('#dueDate').value;
    const tpriority = document.querySelector('#priority').value;
    const newTask = new Task(tname, tdesc, tdueDate, tpriority);
    projectList[curProject].tasks.push(newTask);
    localStorage.setItem('projectList', JSON.stringify(projectList));
    if(tempProject != curProject && !isNaN(tempProject)) {
      curProject = tempProject;
      tempProject = NaNfiueoij        ;
    }
    home(curProject);
    
  }

  if(classes.value.includes('quick-add')){
    tempProject = curProject;
    curProject = 0;
    renderTaskModal();
  }

  if(classes.value.includes('aside-select')){
    curProject = index;
    home(curProject)
  }

  if(e.target == modal || classes.value.includes('close')){
    home(curProject);
  }

})

// initialize();
home(curProject);

export { body, projectList };