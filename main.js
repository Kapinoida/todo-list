/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aside.js":
/*!**********************!*\
  !*** ./src/aside.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAside": () => (/* binding */ renderAside)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function renderAside() {
  var aside = document.createElement('aside');
  var inbox = document.createElement('div');
  var list = document.createElement('div');
  var addProject = document.createElement('div');
  inbox.innerText = 'Inbox';
  inbox.classList.add('aside-select');
  inbox.dataset.index = 0;
  var ul = document.createElement('ul');
  ___WEBPACK_IMPORTED_MODULE_0__.projectList.forEach(function (project, index) {
    if (project.name == 'Inbox') return;
    ul.innerHTML += "<li class=\"aside-select\" data-index=\"".concat(index, "\">").concat(project.name, "</li>");
  });
  list.appendChild(ul);
  addProject.innerHTML = "Add Project <i class=\"fa-solid fa-plus add-project-trigger\"></i>";
  addProject.classList.add('add-project', 'add-project-trigger');
  aside.appendChild(inbox);
  aside.appendChild(addProject);
  aside.appendChild(ul);
  ___WEBPACK_IMPORTED_MODULE_0__.body.appendChild(aside);
}



/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeader": () => (/* binding */ renderHeader)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function renderHeader() {
  var header = document.createElement('header');
  var heading = document.createElement('h1');
  var right = document.createElement('div');
  var quickAdd = document.createElement('div');
  heading.innerText = 'Todo List';
  header.appendChild(heading);
  right.classList.add('right');
  quickAdd.classList.add('quick-add', 'fa-solid', 'fa-plus');
  right.appendChild(quickAdd);
  header.appendChild(right);
  ___WEBPACK_IMPORTED_MODULE_0__.body.appendChild(header);
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "body": () => (/* binding */ body),
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _aside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aside */ "./src/aside.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _project_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-modal */ "./src/project-modal.js");
/* harmony import */ var _task_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-modal */ "./src/task-modal.js");
/* harmony import */ var _task_edit_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-edit-modal */ "./src/task-edit-modal.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var body = document.querySelector('body');
var projectList = JSON.parse(localStorage.getItem('projectList')) || [];

var Project = /*#__PURE__*/_createClass(function Project(name, desc) {
  _classCallCheck(this, Project);

  this.name = name;
  this.desc = desc;
  this.tasks = [];
});

var Task = /*#__PURE__*/_createClass(function Task(name, desc, dueDate, priority) {
  _classCallCheck(this, Task);

  this.name = name;
  this.desc = desc;
  this.dueDate = dueDate;
  this.priority = priority;
  this.complete = false;
  this.subtasks = [];
});

var inbox;
var curProject = 0;
var tempProject;

function initialize() {
  if (projectList.length === 0) {
    inbox = new Project('Inbox', 'Default');
    projectList.push(inbox);
    curProject = 0;
  }

  ;
}

function home(curProject) {
  body.innerHTML = '';
  (0,_header__WEBPACK_IMPORTED_MODULE_0__.renderHeader)();
  (0,_aside__WEBPACK_IMPORTED_MODULE_1__.renderAside)();
  (0,_project__WEBPACK_IMPORTED_MODULE_2__.renderProject)(curProject);
}

document.addEventListener('click', function (e) {
  var classes = e.target.classList;
  var index = e.target.dataset.index;
  var modal = document.querySelector('.modal');

  if (classes.value.includes('task-delete')) {
    projectList[curProject].tasks.splice(index, 1);
    localStorage.setItem('projectList', JSON.stringify(projectList));
    home(curProject);
  }

  if (classes.value.includes('project-delete-trigger')) {
    projectList.splice(curProject, 1);
    localStorage.setItem('projectList', JSON.stringify(projectList));
    curProject = 0;
    home(curProject);
  }

  if (classes.value.includes('check')) {
    e.target.checked ? projectList[curProject].tasks[index].complete = true : projectList[curProject].tasks[index].complete = false;
    localStorage.setItem('projectList', JSON.stringify(projectList));
    home(curProject);
  }

  if (classes.value.includes('add-project-trigger')) {
    (0,_project_modal__WEBPACK_IMPORTED_MODULE_4__.renderProjectModal)();
  }

  if (classes.value.includes('add-task-trigger')) {
    (0,_task_modal__WEBPACK_IMPORTED_MODULE_5__.renderTaskModal)();
  }

  if (classes.value.includes('project-submit')) {
    e.preventDefault();
    var pname = document.querySelector('#name').value;
    var pdesc = document.querySelector('#desc').value;

    if (pname == '') {
      alert('Name required');
      return;
    }

    var newProject = new Project(pname, pdesc);
    projectList.push(newProject);
    localStorage.setItem('projectList', JSON.stringify(projectList));
    curProject = projectList.length - 1;
    home(curProject);
  }

  if (classes.value.includes('task-submit')) {
    e.preventDefault();
    var tname = document.querySelector('#name').value;
    var tdesc = document.querySelector('#desc').value;
    var tdueDate = document.querySelector('#dueDate').value;
    var tpriority = document.querySelector('#priority').value;

    if (tname == '') {
      alert('Name required');
      return;
    }

    var newTask = new Task(tname, tdesc, tdueDate, tpriority);
    projectList[curProject].tasks.push(newTask);
    localStorage.setItem('projectList', JSON.stringify(projectList));

    if (tempProject != curProject && !isNaN(tempProject)) {
      curProject = tempProject;
      tempProject = NaNfiueoij;
    }

    home(curProject);
  }

  if (classes.value.includes('task-name')) {
    var _index = e.target.dataset.index;
    var curName = projectList[curProject].tasks[_index].name;
    var curDueDate = projectList[curProject].tasks[_index].dueDate;
    var curDesc = projectList[curProject].tasks[_index].desc;
    var curPriority = projectList[curProject].tasks[_index].priority;
    (0,_task_edit_modal__WEBPACK_IMPORTED_MODULE_6__.renderTaskEdit)(curName, curDueDate, curDesc, curPriority, _index);
  }

  if (classes.value.includes('task-edit-submit')) {
    e.preventDefault();
    var _tname = document.querySelector('#name').value;
    var _tdesc = document.querySelector('#desc').value;
    var _tdueDate = document.querySelector('#dueDate').value;
    var _tpriority = document.querySelector('#priority').value;
    var _index2 = document.querySelector('#name').dataset.index;

    if (_tname == '') {
      alert('Name required');
      return;
    }

    projectList[curProject].tasks[_index2].name = _tname;
    projectList[curProject].tasks[_index2].desc = _tdesc;
    projectList[curProject].tasks[_index2].dueDate = _tdueDate;
    projectList[curProject].tasks[_index2].priority = _tpriority;
    localStorage.setItem('projectList', JSON.stringify(projectList));
    home(curProject);
  }

  if (classes.value.includes('quick-add')) {
    tempProject = curProject;
    curProject = 0;
    (0,_task_modal__WEBPACK_IMPORTED_MODULE_5__.renderTaskModal)();
  }

  if (classes.value.includes('aside-select')) {
    curProject = index;
    home(curProject);
  }

  if (e.target == modal || classes.value.includes('close')) {
    home(curProject);
  }
});
initialize();
home(curProject);


/***/ }),

/***/ "./src/project-modal.js":
/*!******************************!*\
  !*** ./src/project-modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjectModal": () => (/* binding */ renderProjectModal)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function renderProjectModal() {
  var modal = document.createElement('div');
  var close = document.createElement('span');
  var form = document.createElement('form');
  var name = document.createElement('label');
  var nameInput = document.createElement('input');
  var desc = document.createElement('label');
  var descInput = document.createElement('input');
  var submit = document.createElement('input');
  modal.classList.add('modal');
  form.classList.add('modal-content');
  close.classList.add('close');
  submit.classList.add('project-submit');
  close.innerHTML = "&times;";
  name.setAttribute('for', 'name');
  name.innerText = 'Name: ';
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('required', 'required');
  name.appendChild(nameInput);
  desc.setAttribute('for', 'desc');
  desc.innerText = 'Description: ';
  descInput.setAttribute('type', 'text');
  descInput.setAttribute('id', 'desc');
  descInput.setAttribute('name', 'desc');
  desc.appendChild(descInput);
  submit.setAttribute('type', 'submit');
  form.appendChild(name);
  form.appendChild(desc);
  form.appendChild(submit);
  modal.appendChild(close);
  modal.appendChild(form);
  ___WEBPACK_IMPORTED_MODULE_0__.body.appendChild(modal);
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProject": () => (/* binding */ renderProject)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function renderProject(curProject) {
  var main = document.createElement('main');
  var heading = document.createElement('h2');
  var list = document.createElement('div');
  var current = ___WEBPACK_IMPORTED_MODULE_0__.projectList[curProject];
  var addTask = document.createElement('div');
  var deleteProject = document.createElement('div');
  heading.classList.add('title');
  heading.innerText = current.name;
  list.classList.add('list');
  current.tasks.forEach(function (task, index) {
    var element = document.createElement('div');
    var label = document.createElement('label');
    var checkbox = document.createElement('input');
    var span = document.createElement('span');
    var name = document.createElement('div');
    var date = document.createElement('div');
    var priority = document.createElement('div');
    var trash = document.createElement('i');
    element.classList.add('item');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('check');
    checkbox.dataset.index = index;

    if (task.complete) {
      checkbox.setAttribute('checked', 'checked');
      element.classList.add('strike');
    }

    label.appendChild(checkbox);
    label.appendChild(span);
    element.appendChild(label);
    name.innerText = task.name;
    name.dataset.index = index;
    name.classList.add('task-name');
    element.appendChild(name);
    date.innerText = task.dueDate;
    element.appendChild(date);
    priority.innerText = task.priority;
    element.appendChild(priority);
    trash.classList.add('task-delete', 'fa-solid', 'fa-trash-can');
    trash.dataset.index = index;
    element.appendChild(trash);
    list.appendChild(element);
  });
  addTask.innerHTML = "Add Task <i class=\"fa-solid fa-plus add-task-trigger\"></i>";
  addTask.classList.add('item', 'add-task', 'add-task-trigger');
  list.appendChild(addTask);
  deleteProject.innerHTML = 'Delete Project <i class="fa-solid fa-trash-can project-delete-trigger"></i>';
  deleteProject.classList.add('item', 'project-delete', 'project-delete-trigger');
  if (current.name !== 'Inbox') list.appendChild(deleteProject);
  main.appendChild(heading);
  main.appendChild(list);
  ___WEBPACK_IMPORTED_MODULE_0__.body.appendChild(main);
}



/***/ }),

/***/ "./src/task-edit-modal.js":
/*!********************************!*\
  !*** ./src/task-edit-modal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTaskEdit": () => (/* binding */ renderTaskEdit)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function renderTaskEdit(curName, curDueDate, curDesc, curPriority, index) {
  var modal = document.createElement('div');
  var close = document.createElement('span');
  var form = document.createElement('form');
  var name = document.createElement('label');
  var nameInput = document.createElement('input');
  var desc = document.createElement('label');
  var descInput = document.createElement('input');
  var dueDate = document.createElement('label');
  var dueDateInput = document.createElement('input');
  var priority = document.createElement('label');
  var priorityInput = document.createElement('select');
  var low = document.createElement('option');
  var med = document.createElement('option');
  var high = document.createElement('option');
  var submit = document.createElement('input');
  modal.classList.add('modal');
  form.classList.add('modal-content');
  close.classList.add('close');
  submit.classList.add('task-edit-submit');
  close.innerHTML = "&times;";
  name.setAttribute('for', 'name');
  name.innerText = 'Name: ';
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('name', 'name');
  nameInput.dataset.index = index;
  nameInput.value = curName;
  name.appendChild(nameInput);
  desc.setAttribute('for', 'desc');
  desc.innerText = 'Description: ';
  descInput.setAttribute('type', 'text');
  descInput.setAttribute('id', 'desc');
  descInput.setAttribute('name', 'desc');
  descInput.value = curDesc;
  desc.appendChild(descInput);
  dueDate.setAttribute('for', 'dueDate');
  dueDate.innerText = 'Due Date: ';
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('id', 'dueDate');
  dueDateInput.setAttribute('name', 'dueDate');
  dueDateInput.value = curDueDate;
  dueDate.appendChild(dueDateInput);
  priority.setAttribute('for', 'priority');
  priority.innerText = 'Priority: ';
  priorityInput.setAttribute('id', 'priority');
  priorityInput.setAttribute('name', 'priority');
  low.setAttribute('value', 'Low');
  low.innerText = 'Low';
  med.setAttribute('value', 'Medium');
  med.innerText = 'Medium';
  high.setAttribute('value', 'High');
  high.innerText = 'High';
  curPriority == 'Low' ? low.setAttribute('selected', 'selected') : curPriority == 'Medium' ? med.setAttribute('selected', 'selected') : curPriority == 'High' ? high.setAttribute('selected', 'selected') : '';
  priorityInput.appendChild(low);
  priorityInput.appendChild(med);
  priorityInput.appendChild(high);
  priority.appendChild(priorityInput);
  submit.setAttribute('type', 'submit');
  form.appendChild(name);
  form.appendChild(desc);
  form.appendChild(dueDate);
  form.appendChild(priority);
  form.appendChild(submit);
  modal.appendChild(close);
  modal.appendChild(form);
  ___WEBPACK_IMPORTED_MODULE_0__.body.appendChild(modal);
}



/***/ }),

/***/ "./src/task-modal.js":
/*!***************************!*\
  !*** ./src/task-modal.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTaskModal": () => (/* binding */ renderTaskModal)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function renderTaskModal() {
  var modal = document.createElement('div');
  var close = document.createElement('span');
  var form = document.createElement('form');
  var name = document.createElement('label');
  var nameInput = document.createElement('input');
  var desc = document.createElement('label');
  var descInput = document.createElement('input');
  var dueDate = document.createElement('label');
  var dueDateInput = document.createElement('input');
  var priority = document.createElement('label');
  var priorityInput = document.createElement('select');
  var low = document.createElement('option');
  var med = document.createElement('option');
  var high = document.createElement('option');
  var submit = document.createElement('input');
  modal.classList.add('modal');
  form.classList.add('modal-content');
  close.classList.add('close');
  submit.classList.add('task-submit');
  close.innerHTML = "&times;";
  name.setAttribute('for', 'name');
  name.innerText = 'Name: ';
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('name', 'name');
  name.appendChild(nameInput);
  desc.setAttribute('for', 'desc');
  desc.innerText = 'Description: ';
  descInput.setAttribute('type', 'text');
  descInput.setAttribute('id', 'desc');
  descInput.setAttribute('name', 'desc');
  desc.appendChild(descInput);
  dueDate.setAttribute('for', 'dueDate');
  dueDate.innerText = 'Due Date: ';
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('id', 'dueDate');
  dueDateInput.setAttribute('name', 'dueDate');
  dueDate.appendChild(dueDateInput);
  priority.setAttribute('for', 'priority');
  priority.innerText = 'Priority: ';
  priorityInput.setAttribute('id', 'priority');
  priorityInput.setAttribute('name', 'priority');
  low.setAttribute('value', 'Low');
  low.innerText = 'Low';
  med.setAttribute('value', 'Medium');
  med.innerText = 'Medium';
  high.setAttribute('value', 'High');
  high.innerText = 'High';
  priorityInput.appendChild(low);
  priorityInput.appendChild(med);
  priorityInput.appendChild(high);
  priority.appendChild(priorityInput);
  submit.setAttribute('type', 'submit');
  form.appendChild(name);
  form.appendChild(desc);
  form.appendChild(dueDate);
  form.appendChild(priority);
  form.appendChild(submit);
  modal.appendChild(close);
  modal.appendChild(form);
  ___WEBPACK_IMPORTED_MODULE_0__.body.appendChild(modal);
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::-webkit-scrollbar {\n  background-color: rgba(0,0,0,0);\n  width: .5rem;\n}\n\n::-webkit-scrollbar-track {\n  margin-block: .5rem;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: rgba(255,255,255,0.2);\n  border-radius: 100vw;\n  border: .25rem solid rgba(0,0,0,0);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-rows: 3rem 11fr;\n  grid-template-columns: 8rem 8fr;\n  max-width: 100vw;\n  height: 100vh;\n  color: white;\n}\n\nheader {\n  background-color: rgba(0,0,0,0.8);\n  grid-area: 1 / 1 / 2 / 3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.left, .right {\n  position: relative;\n  height: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 1rem;\n  padding: 0 1rem;\n}\n\nh1 {\n   font-size: 1.5rem;\n   text-align: center;\n   width: 100%;\n}\n\naside {\n  background-color: rgba(0,0,0,0.8);\n  grid-area: 2 / 1 / 3 / 2;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 1rem;\n  gap: 1rem; \n  font-size: 1.25rem;\n}\n\n.aside-select {\n  cursor: pointer;\n}\n\naside ul {\n  margin:0;\n  padding:0;\n  list-style: none;\n}\n\nmain {\n  background-color: rgba(0,0,0,0.9);\n  grid-area: 2 / 2 / 3 / 3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: auto;\n}\n\n.list {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n  width: 65%;\n}\n\n.item {\n  height: 2rem;\n  width: calc(100% - 4rem);\n  margin: 0 1rem;\n  padding: 0 1rem;\n  display: grid;\n  grid-template-columns: 1rem 6fr 5rem 3.5rem 1rem;\n  align-items: center;\n  gap: .25rem;\n}\n\n.item label {\n  display: flex;\n  justify-content: center;\n  width: 1rem;\n}\n\n.strike * {\n  text-decoration: line-through;\n}\n\n.task-name {\n  cursor: pointer;\n}\n\n.task-delete, .project-delete {\n  cursor: pointer;\n  text-decoration: none !important;\n}\n\n.task-delete, .project-delete i {\n   width: 1rem;\n}\n\n.task-delete:hover, .project-delete:hover {\n  color: rgba(238, 59, 59, 0.8)\n}\n\n.quick-add {\n  cursor: pointer;\n}\n\n.quick-add:hover {\n  color: rgba(255,255,255,.7);\n}\n\n.add-task, .add-project, .project-delete {\n  justify-content: end;\n  cursor: pointer;\n}\n\n.add-task, .project-delete {\n  display: flex;\n}\n\n.add-task i {\n  width: 1rem;\n}\n\n.add-project {\n  font-size: .75rem;\n}\n\n.add-task:hover, .add-project:hover {\n  color: rgba(90, 216, 107, 0.8);\n}\n\n.check {\n  display: none;\n}\n\n.check + *::before{\n  content: \"\";\n  display: flex;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 100%;\n  border-style: solid;\n  border-width: 0.1rem;\n  border-color: gray;\n}\n\n.check:checked + *::before {\n  content: \"✓\";\n  color: white;\n  text-align: center;\n  background: rgba(90, 216, 107, 0.8);\n  border-color: rgba(90, 216, 107, 0.8);\n}\n\n.check:checked + * {\n  color: rgba(90, 216, 107, 0.8);\n}\n\n.modal {\n  /* display: none; Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100vw; /* Full width */\n  height: 100vh; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgba(0,0,0,.9);\n}\n\n\n/* Modal Content/Box */\n.modal-content {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(0,0,0,.9);\n  margin: auto; /* 15% from the top and centered */\n  padding: 1rem;\n  border: 1px solid grey;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  width: 33vw;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  position: fixed;\n  right: 1rem;\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-content label {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: .15rem;\n}\n\n.project-submit, .task-submit, .task-edit-submit {\n  background-color: rgba(0,0,0,.9);\n  color: white;\n  border: .1rem solid grey;\n  padding: .5rem 1.5rem;\n  cursor: pointer;\n  transition: all .05s;\n}\n\n.project-submit:active, .task-submit:active, .task-edit-submit:active {\n  outline: .2rem solid white;\n  font-weight: bold;\n}\n\ninput[type=\"text\"] {\n  padding: .25rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["::-webkit-scrollbar {\n  background-color: rgba(0,0,0,0);\n  width: .5rem;\n}\n\n::-webkit-scrollbar-track {\n  margin-block: .5rem;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: rgba(255,255,255,0.2);\n  border-radius: 100vw;\n  border: .25rem solid rgba(0,0,0,0);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-rows: 3rem 11fr;\n  grid-template-columns: 8rem 8fr;\n  max-width: 100vw;\n  height: 100vh;\n  color: white;\n}\n\nheader {\n  background-color: rgba(0,0,0,0.8);\n  grid-area: 1 / 1 / 2 / 3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.left, .right {\n  position: relative;\n  height: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 1rem;\n  padding: 0 1rem;\n}\n\nh1 {\n   font-size: 1.5rem;\n   text-align: center;\n   width: 100%;\n}\n\naside {\n  background-color: rgba(0,0,0,0.8);\n  grid-area: 2 / 1 / 3 / 2;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 1rem;\n  gap: 1rem; \n  font-size: 1.25rem;\n}\n\n.aside-select {\n  cursor: pointer;\n}\n\naside ul {\n  margin:0;\n  padding:0;\n  list-style: none;\n}\n\nmain {\n  background-color: rgba(0,0,0,0.9);\n  grid-area: 2 / 2 / 3 / 3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: auto;\n}\n\n.list {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n  width: 65%;\n}\n\n.item {\n  height: 2rem;\n  width: calc(100% - 4rem);\n  margin: 0 1rem;\n  padding: 0 1rem;\n  display: grid;\n  grid-template-columns: 1rem 6fr 5rem 3.5rem 1rem;\n  align-items: center;\n  gap: .25rem;\n}\n\n.item label {\n  display: flex;\n  justify-content: center;\n  width: 1rem;\n}\n\n.strike * {\n  text-decoration: line-through;\n}\n\n.task-name {\n  cursor: pointer;\n}\n\n.task-delete, .project-delete {\n  cursor: pointer;\n  text-decoration: none !important;\n}\n\n.task-delete, .project-delete i {\n   width: 1rem;\n}\n\n.task-delete:hover, .project-delete:hover {\n  color: rgba(238, 59, 59, 0.8)\n}\n\n.quick-add {\n  cursor: pointer;\n}\n\n.quick-add:hover {\n  color: rgba(255,255,255,.7);\n}\n\n.add-task, .add-project, .project-delete {\n  justify-content: end;\n  cursor: pointer;\n}\n\n.add-task, .project-delete {\n  display: flex;\n}\n\n.add-task i {\n  width: 1rem;\n}\n\n.add-project {\n  font-size: .75rem;\n}\n\n.add-task:hover, .add-project:hover {\n  color: rgba(90, 216, 107, 0.8);\n}\n\n.check {\n  display: none;\n}\n\n.check + *::before{\n  content: \"\";\n  display: flex;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 100%;\n  border-style: solid;\n  border-width: 0.1rem;\n  border-color: gray;\n}\n\n.check:checked + *::before {\n  content: \"✓\";\n  color: white;\n  text-align: center;\n  background: rgba(90, 216, 107, 0.8);\n  border-color: rgba(90, 216, 107, 0.8);\n}\n\n.check:checked + * {\n  color: rgba(90, 216, 107, 0.8);\n}\n\n.modal {\n  /* display: none; Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100vw; /* Full width */\n  height: 100vh; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgba(0,0,0,.9);\n}\n\n\n/* Modal Content/Box */\n.modal-content {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(0,0,0,.9);\n  margin: auto; /* 15% from the top and centered */\n  padding: 1rem;\n  border: 1px solid grey;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  width: 33vw;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  position: fixed;\n  right: 1rem;\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-content label {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: .15rem;\n}\n\n.project-submit, .task-submit, .task-edit-submit {\n  background-color: rgba(0,0,0,.9);\n  color: white;\n  border: .1rem solid grey;\n  padding: .5rem 1.5rem;\n  cursor: pointer;\n  transition: all .05s;\n}\n\n.project-submit:active, .task-submit:active, .task-edit-submit:active {\n  outline: .2rem solid white;\n  font-weight: bold;\n}\n\ninput[type=\"text\"] {\n  padding: .25rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNpZGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2stZWRpdC1tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay1tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib2R5LCBwcm9qZWN0TGlzdCB9IGZyb20gXCIuXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckFzaWRlKCkge1xuICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG4gIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGluYm94LmlubmVyVGV4dCA9ICdJbmJveCc7XG4gIGluYm94LmNsYXNzTGlzdC5hZGQoJ2FzaWRlLXNlbGVjdCcpO1xuICBpbmJveC5kYXRhc2V0LmluZGV4ID0gMDtcblxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgaWYgKHByb2plY3QubmFtZSA9PSAnSW5ib3gnKSByZXR1cm47XG4gICAgdWwuaW5uZXJIVE1MICs9IGA8bGkgY2xhc3M9XCJhc2lkZS1zZWxlY3RcIiBkYXRhLWluZGV4PVwiJHtpbmRleH1cIj4ke3Byb2plY3QubmFtZX08L2xpPmBcbiAgfSlcblxuICBsaXN0LmFwcGVuZENoaWxkKHVsKTtcbiAgYWRkUHJvamVjdC5pbm5lckhUTUwgPSBgQWRkIFByb2plY3QgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVzIGFkZC1wcm9qZWN0LXRyaWdnZXJcIj48L2k+YDtcbiAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdCcsJ2FkZC1wcm9qZWN0LXRyaWdnZXInKTtcblxuICBhc2lkZS5hcHBlbmRDaGlsZChpbmJveCk7XG4gIGFzaWRlLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuICBhc2lkZS5hcHBlbmRDaGlsZCh1bCk7XG4gIFxuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoYXNpZGUpO1xufVxuXG5leHBvcnQgeyByZW5kZXJBc2lkZSB9IiwiaW1wb3J0IHsgYm9keSB9IGZyb20gXCIuXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBxdWlja0FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gJ1RvZG8gTGlzdCc7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICByaWdodC5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xuICBxdWlja0FkZC5jbGFzc0xpc3QuYWRkKCdxdWljay1hZGQnLCdmYS1zb2xpZCcsJ2ZhLXBsdXMnKTtcbiAgcmlnaHQuYXBwZW5kQ2hpbGQocXVpY2tBZGQpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocmlnaHQpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVySGVhZGVyIH07IiwiaW1wb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHsgcmVuZGVyQXNpZGUgfSBmcm9tICcuL2FzaWRlJztcbmltcG9ydCB7IHJlbmRlclByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0TW9kYWwgfSBmcm9tICcuL3Byb2plY3QtbW9kYWwnO1xuaW1wb3J0IHsgcmVuZGVyVGFza01vZGFsIH0gZnJvbSAnLi90YXNrLW1vZGFsJztcbmltcG9ydCB7IHJlbmRlclRhc2tFZGl0IH0gZnJvbSAnLi90YXNrLWVkaXQtbW9kYWwnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5sZXQgcHJvamVjdExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TGlzdCcpKSB8fCBbXTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsZGVzYykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cbn1cblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgICB0aGlzLnN1YnRhc2tzID0gW107XG4gIH1cbn1cblxubGV0IGluYm94O1xubGV0IGN1clByb2plY3QgPSAwO1xubGV0IHRlbXBQcm9qZWN0O1xuXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICBpZihwcm9qZWN0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICBpbmJveCA9IG5ldyBQcm9qZWN0KCdJbmJveCcsICdEZWZhdWx0Jyk7XG4gICAgcHJvamVjdExpc3QucHVzaChpbmJveCk7XG4gICAgY3VyUHJvamVjdCA9IDA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGhvbWUoY3VyUHJvamVjdCkge1xuICBib2R5LmlubmVySFRNTCA9ICcnO1xuICByZW5kZXJIZWFkZXIoKTtcbiAgcmVuZGVyQXNpZGUoKTtcbiAgcmVuZGVyUHJvamVjdChjdXJQcm9qZWN0KTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gZS50YXJnZXQuY2xhc3NMaXN0O1xuICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5cbiAgaWYoY2xhc3Nlcy52YWx1ZS5pbmNsdWRlcygndGFzay1kZWxldGUnKSl7XG4gICAgcHJvamVjdExpc3RbY3VyUHJvamVjdF0udGFza3Muc3BsaWNlKGluZGV4LDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgaG9tZShjdXJQcm9qZWN0KTtcbiAgfVxuXG4gIGlmKGNsYXNzZXMudmFsdWUuaW5jbHVkZXMoJ3Byb2plY3QtZGVsZXRlLXRyaWdnZXInKSl7XG4gICAgcHJvamVjdExpc3Quc3BsaWNlKGN1clByb2plY3QsIDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgY3VyUHJvamVjdCA9IDA7XG4gICAgaG9tZShjdXJQcm9qZWN0KTtcbiAgfVxuXG4gIGlmKGNsYXNzZXMudmFsdWUuaW5jbHVkZXMoJ2NoZWNrJykpe1xuICAgIGUudGFyZ2V0LmNoZWNrZWQgPyBwcm9qZWN0TGlzdFtjdXJQcm9qZWN0XS50YXNrc1tpbmRleF0uY29tcGxldGUgPSB0cnVlIDogcHJvamVjdExpc3RbY3VyUHJvamVjdF0udGFza3NbaW5kZXhdLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICBob21lKGN1clByb2plY3QpO1xuICB9XG5cbiAgaWYoY2xhc3Nlcy52YWx1ZS5pbmNsdWRlcygnYWRkLXByb2plY3QtdHJpZ2dlcicpKXtcbiAgICByZW5kZXJQcm9qZWN0TW9kYWwoKTtcbiAgfVxuXG4gIGlmKGNsYXNzZXMudmFsdWUuaW5jbHVkZXMoJ2FkZC10YXNrLXRyaWdnZXInKSl7XG4gICAgcmVuZGVyVGFza01vZGFsKCk7XG4gIH1cblxuICBpZihjbGFzc2VzLnZhbHVlLmluY2x1ZGVzKCdwcm9qZWN0LXN1Ym1pdCcpKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IHBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2MnKS52YWx1ZTtcbiAgICBpZihwbmFtZT09JycpIHtcbiAgICAgIGFsZXJ0KCdOYW1lIHJlcXVpcmVkJylcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHBuYW1lLCBwZGVzYyk7XG4gICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgIGN1clByb2plY3QgPSBwcm9qZWN0TGlzdC5sZW5ndGggLSAxO1xuICAgIGhvbWUoY3VyUHJvamVjdCk7XG4gIH1cblxuICBpZihjbGFzc2VzLnZhbHVlLmluY2x1ZGVzKCd0YXNrLXN1Ym1pdCcpKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IHRkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2MnKS52YWx1ZTtcbiAgICBjb25zdCB0ZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJykudmFsdWU7XG4gICAgY29uc3QgdHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWU7XG4gICAgaWYodG5hbWU9PScnKSB7XG4gICAgICBhbGVydCgnTmFtZSByZXF1aXJlZCcpXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0bmFtZSwgdGRlc2MsIHRkdWVEYXRlLCB0cHJpb3JpdHkpO1xuICAgIHByb2plY3RMaXN0W2N1clByb2plY3RdLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICBpZih0ZW1wUHJvamVjdCAhPSBjdXJQcm9qZWN0ICYmICFpc05hTih0ZW1wUHJvamVjdCkpIHtcbiAgICAgIGN1clByb2plY3QgPSB0ZW1wUHJvamVjdDtcbiAgICAgIHRlbXBQcm9qZWN0ID0gTmFOZml1ZW9paiAgICAgICAgO1xuICAgIH1cbiAgICBob21lKGN1clByb2plY3QpO1xuICAgIFxuICB9XG5cbiAgaWYoY2xhc3Nlcy52YWx1ZS5pbmNsdWRlcygndGFzay1uYW1lJykpe1xuICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICBjb25zdCBjdXJOYW1lID0gcHJvamVjdExpc3RbY3VyUHJvamVjdF0udGFza3NbaW5kZXhdLm5hbWU7XG4gICAgY29uc3QgY3VyRHVlRGF0ZSA9IHByb2plY3RMaXN0W2N1clByb2plY3RdLnRhc2tzW2luZGV4XS5kdWVEYXRlO1xuICAgIGNvbnN0IGN1ckRlc2MgPSBwcm9qZWN0TGlzdFtjdXJQcm9qZWN0XS50YXNrc1tpbmRleF0uZGVzYztcbiAgICBjb25zdCBjdXJQcmlvcml0eSA9IHByb2plY3RMaXN0W2N1clByb2plY3RdLnRhc2tzW2luZGV4XS5wcmlvcml0eTtcbiAgICByZW5kZXJUYXNrRWRpdChjdXJOYW1lLGN1ckR1ZURhdGUsY3VyRGVzYyxjdXJQcmlvcml0eSxpbmRleClcbiAgfVxuXG4gIGlmKGNsYXNzZXMudmFsdWUuaW5jbHVkZXMoJ3Rhc2stZWRpdC1zdWJtaXQnKSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTtcbiAgICBjb25zdCB0ZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjJykudmFsdWU7XG4gICAgY29uc3QgdGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHRwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlO1xuICAgIGNvbnN0IGluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS5kYXRhc2V0LmluZGV4O1xuICAgIGlmKHRuYW1lPT0nJykge1xuICAgICAgYWxlcnQoJ05hbWUgcmVxdWlyZWQnKVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwcm9qZWN0TGlzdFtjdXJQcm9qZWN0XS50YXNrc1tpbmRleF0ubmFtZSA9IHRuYW1lO1xuICAgIHByb2plY3RMaXN0W2N1clByb2plY3RdLnRhc2tzW2luZGV4XS5kZXNjID0gdGRlc2M7XG4gICAgcHJvamVjdExpc3RbY3VyUHJvamVjdF0udGFza3NbaW5kZXhdLmR1ZURhdGUgPSB0ZHVlRGF0ZTtcbiAgICBwcm9qZWN0TGlzdFtjdXJQcm9qZWN0XS50YXNrc1tpbmRleF0ucHJpb3JpdHkgPSB0cHJpb3JpdHk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICBob21lKGN1clByb2plY3QpO1xuICB9XG5cbiAgaWYoY2xhc3Nlcy52YWx1ZS5pbmNsdWRlcygncXVpY2stYWRkJykpe1xuICAgIHRlbXBQcm9qZWN0ID0gY3VyUHJvamVjdDtcbiAgICBjdXJQcm9qZWN0ID0gMDtcbiAgICByZW5kZXJUYXNrTW9kYWwoKTtcbiAgfVxuXG4gIGlmKGNsYXNzZXMudmFsdWUuaW5jbHVkZXMoJ2FzaWRlLXNlbGVjdCcpKXtcbiAgICBjdXJQcm9qZWN0ID0gaW5kZXg7XG4gICAgaG9tZShjdXJQcm9qZWN0KVxuICB9XG5cbiAgaWYoZS50YXJnZXQgPT0gbW9kYWwgfHwgY2xhc3Nlcy52YWx1ZS5pbmNsdWRlcygnY2xvc2UnKSl7XG4gICAgaG9tZShjdXJQcm9qZWN0KTtcbiAgfVxuXG59KVxuXG5pbml0aWFsaXplKCk7XG5ob21lKGN1clByb2plY3QpO1xuXG5leHBvcnQgeyBib2R5LCBwcm9qZWN0TGlzdCB9OyIsImltcG9ydCB7IGJvZHkgfSBmcm9tIFwiLlwiO1xuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0TW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG4gIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG4gIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXN1Ym1pdCcpO1xuXG4gIGNsb3NlLmlubmVySFRNTCA9IGAmdGltZXM7YDtcblxuICBuYW1lLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgbmFtZS5pbm5lclRleHQgPSAnTmFtZTogJ1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCdyZXF1aXJlZCcpO1xuICBuYW1lLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjJyk7XG4gIGRlc2MuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOiAnXG4gIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjJyk7XG4gIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzYycpO1xuICBkZXNjLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG5cbiAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcblxuICBmb3JtLmFwcGVuZENoaWxkKG5hbWUpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2MpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0TW9kYWwgfSIsImltcG9ydCB7IGJvZHksIHByb2plY3RMaXN0IH0gZnJvbSBcIi5cIjtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdChjdXJQcm9qZWN0KSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGN1cnJlbnQgPSBwcm9qZWN0TGlzdFtjdXJQcm9qZWN0XTtcbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICBoZWFkaW5nLmlubmVyVGV4dCA9IGN1cnJlbnQubmFtZTtcblxuICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcblxuICBjdXJyZW50LnRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcbiAgICBjaGVja2JveC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gICAgaWYodGFzay5jb21wbGV0ZSl7XG4gICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdHJpa2UnKTtcbiAgICB9XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgbmFtZS5pbm5lclRleHQgPSB0YXNrLm5hbWU7XG4gICAgbmFtZS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUnKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgZGF0ZS5pbm5lclRleHQgPSB0YXNrLmR1ZURhdGU7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgIHByaW9yaXR5LmlubmVyVGV4dCA9IHRhc2sucHJpb3JpdHk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICB0cmFzaC5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbGV0ZScsJ2ZhLXNvbGlkJywnZmEtdHJhc2gtY2FuJyk7XG4gICAgdHJhc2guZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodHJhc2gpO1xuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfSk7XG5cbiAgYWRkVGFzay5pbm5lckhUTUwgPSBgQWRkIFRhc2sgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVzIGFkZC10YXNrLXRyaWdnZXJcIj48L2k+YFxuICBhZGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nLCdhZGQtdGFzaycsJ2FkZC10YXNrLXRyaWdnZXInKTtcbiAgbGlzdC5hcHBlbmRDaGlsZChhZGRUYXNrKTtcblxuICBkZWxldGVQcm9qZWN0LmlubmVySFRNTCA9ICdEZWxldGUgUHJvamVjdCA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhbiBwcm9qZWN0LWRlbGV0ZS10cmlnZ2VyXCI+PC9pPic7XG4gIGRlbGV0ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnaXRlbScsJ3Byb2plY3QtZGVsZXRlJywncHJvamVjdC1kZWxldGUtdHJpZ2dlcicpO1xuXG4gIGlmKGN1cnJlbnQubmFtZSAhPT0gJ0luYm94JykgbGlzdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcblxuICBtYWluLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBtYWluLmFwcGVuZENoaWxkKGxpc3QpO1xuICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0IH07IiwiaW1wb3J0IHsgYm9keSB9IGZyb20gXCIuXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tFZGl0KGN1ck5hbWUsY3VyRHVlRGF0ZSxjdXJEZXNjLGN1clByaW9yaXR5LGluZGV4KSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IG1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG4gIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG4gIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWVkaXQtc3VibWl0Jyk7XG5cbiAgY2xvc2UuaW5uZXJIVE1MID0gYCZ0aW1lcztgO1xuXG4gIG5hbWUuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICBuYW1lLmlubmVyVGV4dCA9ICdOYW1lOiAnO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgbmFtZUlucHV0LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgbmFtZUlucHV0LnZhbHVlID0gY3VyTmFtZTtcbiAgbmFtZS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuXG4gIGRlc2Muc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzYycpO1xuICBkZXNjLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbjogJztcbiAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2MnKTtcbiAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjJyk7XG4gIGRlc2NJbnB1dC52YWx1ZSA9IGN1ckRlc2M7XG4gIGRlc2MuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcblxuICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZURhdGUnKTtcbiAgZHVlRGF0ZS5pbm5lclRleHQgPSAnRHVlIERhdGU6ICc7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkdWVEYXRlJyk7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpO1xuICBkdWVEYXRlSW5wdXQudmFsdWUgPSBjdXJEdWVEYXRlO1xuICBkdWVEYXRlLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgcHJpb3JpdHkuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5OiAnO1xuICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgbG93LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTG93JylcbiAgbG93LmlubmVyVGV4dCA9ICdMb3cnO1xuICBtZWQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdNZWRpdW0nKVxuICBtZWQuaW5uZXJUZXh0ID0gJ01lZGl1bSc7XG4gIGhpZ2guc2V0QXR0cmlidXRlKCd2YWx1ZScsICdIaWdoJylcbiAgaGlnaC5pbm5lclRleHQgPSAnSGlnaCc7XG4gIGN1clByaW9yaXR5ID09ICdMb3cnID8gbG93LnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKSA6IGN1clByaW9yaXR5ID09ICdNZWRpdW0nID8gbWVkLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKSA6IGN1clByaW9yaXR5ID09ICdIaWdoJyA/IGhpZ2guc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpIDogJyc7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobG93KTtcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChtZWQpO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGhpZ2gpO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblxuICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzYyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xufVxuXG5leHBvcnQgeyByZW5kZXJUYXNrRWRpdCB9IiwiaW1wb3J0IHsgYm9keSB9IGZyb20gXCIuXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tNb2RhbCgpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3QgbWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcbiAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3VibWl0Jyk7XG5cbiAgY2xvc2UuaW5uZXJIVE1MID0gYCZ0aW1lcztgO1xuXG4gIG5hbWUuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICBuYW1lLmlubmVyVGV4dCA9ICdOYW1lOiAnO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgbmFtZS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuXG4gIGRlc2Muc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzYycpO1xuICBkZXNjLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbjogJztcbiAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2MnKTtcbiAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjJyk7XG4gIGRlc2MuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcblxuICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZURhdGUnKTtcbiAgZHVlRGF0ZS5pbm5lclRleHQgPSAnRHVlIERhdGU6ICc7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkdWVEYXRlJyk7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpO1xuICBkdWVEYXRlLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgcHJpb3JpdHkuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5OiAnO1xuICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgbG93LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTG93JylcbiAgbG93LmlubmVyVGV4dCA9ICdMb3cnO1xuICBtZWQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdNZWRpdW0nKVxuICBtZWQuaW5uZXJUZXh0ID0gJ01lZGl1bSc7XG4gIGhpZ2guc2V0QXR0cmlidXRlKCd2YWx1ZScsICdIaWdoJylcbiAgaGlnaC5pbm5lclRleHQgPSAnSGlnaCc7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobG93KTtcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChtZWQpO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGhpZ2gpO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblxuICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzYyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xufVxuXG5leHBvcnQgeyByZW5kZXJUYXNrTW9kYWwgfSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcbiAgd2lkdGg6IC41cmVtO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIG1hcmdpbi1ibG9jazogLjVyZW07XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwdnc7XFxuICBib3JkZXI6IC4yNXJlbSBzb2xpZCByZ2JhKDAsMCwwLDApO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDExZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDhyZW0gOGZyO1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnQsIC5yaWdodCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5hc2lkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXG4gIGdhcDogMXJlbTsgXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5hc2lkZS1zZWxlY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5hc2lkZSB1bCB7XFxuICBtYXJnaW46MDtcXG4gIHBhZGRpbmc6MDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjkpO1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5saXN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAuNXJlbTtcXG4gIHdpZHRoOiA2NSU7XFxufVxcblxcbi5pdGVtIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0cmVtKTtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMXJlbSA2ZnIgNXJlbSAzLjVyZW0gMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IC4yNXJlbTtcXG59XFxuXFxuLml0ZW0gbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDFyZW07XFxufVxcblxcbi5zdHJpa2UgKiB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWRlbGV0ZSwgLnByb2plY3QtZGVsZXRlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGFzay1kZWxldGUsIC5wcm9qZWN0LWRlbGV0ZSBpIHtcXG4gICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLnRhc2stZGVsZXRlOmhvdmVyLCAucHJvamVjdC1kZWxldGU6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMjM4LCA1OSwgNTksIDAuOClcXG59XFxuXFxuLnF1aWNrLWFkZCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5xdWljay1hZGQ6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjcpO1xcbn1cXG5cXG4uYWRkLXRhc2ssIC5hZGQtcHJvamVjdCwgLnByb2plY3QtZGVsZXRlIHtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2ssIC5wcm9qZWN0LWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYWRkLXRhc2sgaSB7XFxuICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIsIC5hZGQtcHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogcmdiYSg5MCwgMjE2LCAxMDcsIDAuOCk7XFxufVxcblxcbi5jaGVjayB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2sgKyAqOjpiZWZvcmV7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjFyZW07XFxuICBib3JkZXItY29sb3I6IGdyYXk7XFxufVxcblxcbi5jaGVjazpjaGVja2VkICsgKjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiYSg5MCwgMjE2LCAxMDcsIDAuOCk7XFxuICBib3JkZXItY29sb3I6IHJnYmEoOTAsIDIxNiwgMTA3LCAwLjgpO1xcbn1cXG5cXG4uY2hlY2s6Y2hlY2tlZCArICoge1xcbiAgY29sb3I6IHJnYmEoOTAsIDIxNiwgMTA3LCAwLjgpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgLyogZGlzcGxheTogbm9uZTsgSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDB2dzsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDB2aDsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOSk7XFxufVxcblxcblxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjkpO1xcbiAgbWFyZ2luOiBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHdpZHRoOiAzM3Z3O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IC4xNXJlbTtcXG59XFxuXFxuLnByb2plY3Qtc3VibWl0LCAudGFzay1zdWJtaXQsIC50YXNrLWVkaXQtc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogLjVyZW0gMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4wNXM7XFxufVxcblxcbi5wcm9qZWN0LXN1Ym1pdDphY3RpdmUsIC50YXNrLXN1Ym1pdDphY3RpdmUsIC50YXNrLWVkaXQtc3VibWl0OmFjdGl2ZSB7XFxuICBvdXRsaW5lOiAuMnJlbSBzb2xpZCB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxvQkFBb0I7RUFDcEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsNkJBQTZC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RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcXG4gIHdpZHRoOiAuNXJlbTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBtYXJnaW4tYmxvY2s6IC41cmVtO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xcbiAgYm9yZGVyOiAuMjVyZW0gc29saWQgcmdiYSgwLDAsMCwwKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAxMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4cmVtIDhmcjtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0LCAucmlnaHQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuaDEge1xcbiAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYXNpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAycmVtIDFyZW07XFxuICBnYXA6IDFyZW07IFxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4uYXNpZGUtc2VsZWN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYXNpZGUgdWwge1xcbiAgbWFyZ2luOjA7XFxuICBwYWRkaW5nOjA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC45KTtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubGlzdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogLjVyZW07XFxuICB3aWR0aDogNjUlO1xcbn1cXG5cXG4uaXRlbSB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNHJlbSk7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFyZW0gNmZyIDVyZW0gMy41cmVtIDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAuMjVyZW07XFxufVxcblxcbi5pdGVtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4uc3RyaWtlICoge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLW5hbWUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1kZWxldGUsIC5wcm9qZWN0LWRlbGV0ZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnRhc2stZGVsZXRlLCAucHJvamVjdC1kZWxldGUgaSB7XFxuICAgd2lkdGg6IDFyZW07XFxufVxcblxcbi50YXNrLWRlbGV0ZTpob3ZlciwgLnByb2plY3QtZGVsZXRlOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDIzOCwgNTksIDU5LCAwLjgpXFxufVxcblxcbi5xdWljay1hZGQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucXVpY2stYWRkOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC43KTtcXG59XFxuXFxuLmFkZC10YXNrLCAuYWRkLXByb2plY3QsIC5wcm9qZWN0LWRlbGV0ZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLCAucHJvamVjdC1kZWxldGUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmFkZC10YXNrIGkge1xcbiAgd2lkdGg6IDFyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdCB7XFxuICBmb250LXNpemU6IC43NXJlbTtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyLCAuYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoOTAsIDIxNiwgMTA3LCAwLjgpO1xcbn1cXG5cXG4uY2hlY2sge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNoZWNrICsgKjo6YmVmb3Jle1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMC4xcmVtO1xcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uY2hlY2s6Y2hlY2tlZCArICo6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pyTXFxcIjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoOTAsIDIxNiwgMTA3LCAwLjgpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDkwLCAyMTYsIDEwNywgMC44KTtcXG59XFxuXFxuLmNoZWNrOmNoZWNrZWQgKyAqIHtcXG4gIGNvbG9yOiByZ2JhKDkwLCAyMTYsIDEwNywgMC44KTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIC8qIGRpc3BsYXk6IG5vbmU7IEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwdnc7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwdmg7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjkpO1xcbn1cXG5cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC45KTtcXG4gIG1hcmdpbjogYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogMzN2dztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWE7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAuMTVyZW07XFxufVxcblxcbi5wcm9qZWN0LXN1Ym1pdCwgLnRhc2stc3VibWl0LCAudGFzay1lZGl0LXN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC45KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogLjFyZW0gc29saWQgZ3JleTtcXG4gIHBhZGRpbmc6IC41cmVtIDEuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAuMDVzO1xcbn1cXG5cXG4ucHJvamVjdC1zdWJtaXQ6YWN0aXZlLCAudGFzay1zdWJtaXQ6YWN0aXZlLCAudGFzay1lZGl0LXN1Ym1pdDphY3RpdmUge1xcbiAgb3V0bGluZTogLjJyZW0gc29saWQgd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHBhZGRpbmc6IC4yNXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsiYm9keSIsInByb2plY3RMaXN0IiwicmVuZGVyQXNpZGUiLCJhc2lkZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImluYm94IiwibGlzdCIsImFkZFByb2plY3QiLCJpbm5lclRleHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0IiwiaW5kZXgiLCJ1bCIsImZvckVhY2giLCJwcm9qZWN0IiwibmFtZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwicmVuZGVySGVhZGVyIiwiaGVhZGVyIiwiaGVhZGluZyIsInJpZ2h0IiwicXVpY2tBZGQiLCJyZW5kZXJQcm9qZWN0IiwicmVuZGVyUHJvamVjdE1vZGFsIiwicmVuZGVyVGFza01vZGFsIiwicmVuZGVyVGFza0VkaXQiLCJxdWVyeVNlbGVjdG9yIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlByb2plY3QiLCJkZXNjIiwidGFza3MiLCJUYXNrIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwiY29tcGxldGUiLCJzdWJ0YXNrcyIsImN1clByb2plY3QiLCJ0ZW1wUHJvamVjdCIsImluaXRpYWxpemUiLCJsZW5ndGgiLCJwdXNoIiwiaG9tZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2xhc3NlcyIsInRhcmdldCIsIm1vZGFsIiwidmFsdWUiLCJpbmNsdWRlcyIsInNwbGljZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJwbmFtZSIsInBkZXNjIiwiYWxlcnQiLCJuZXdQcm9qZWN0IiwidG5hbWUiLCJ0ZGVzYyIsInRkdWVEYXRlIiwidHByaW9yaXR5IiwibmV3VGFzayIsImlzTmFOIiwiTmFOZml1ZW9paiIsImN1ck5hbWUiLCJjdXJEdWVEYXRlIiwiY3VyRGVzYyIsImN1clByaW9yaXR5IiwiY2xvc2UiLCJmb3JtIiwibmFtZUlucHV0IiwiZGVzY0lucHV0Iiwic3VibWl0Iiwic2V0QXR0cmlidXRlIiwibWFpbiIsImN1cnJlbnQiLCJhZGRUYXNrIiwiZGVsZXRlUHJvamVjdCIsInRhc2siLCJlbGVtZW50IiwibGFiZWwiLCJjaGVja2JveCIsInNwYW4iLCJkYXRlIiwidHJhc2giLCJkdWVEYXRlSW5wdXQiLCJwcmlvcml0eUlucHV0IiwibG93IiwibWVkIiwiaGlnaCJdLCJzb3VyY2VSb290IjoiIn0=