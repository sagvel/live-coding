// events
// 1. types of events
// 2. add events (which event type & on which element)
// 3. handlers

// WEB FLOW
// 1. get data
// 2. render data
// 3. update data
// 4. re-render

// algo
// 1. create task obj
// 2. add obj to array
// 3. re-render
// NORM
// const createNewTask = () => {
//   const inputEl = document.querySelector('.task-input');
//   const inputVal = inputEl.value;
//   if (inputVal === '') {
//     return;
//   }

//   tasks.push({
//     text: inputFieldValue,
//     done: false,
//   });

//   inputEl.value = '';

//   renderTasks(tasks);
// };

// const createBtn = document.querySelector('.create-task-btn');
// createBtn.addEventListener('click', createNewTask);

// Roman
// Bad

// Evgen
// norm

// update tasl in todo mentor
// const onToggleTask = e => {
//   const isCheckbox = e.target.classList.contains('list__item-checkbox');

//   if (!isCheckbox) {
//     return;
//   }

//   const taskData = tasks.find(task => task.id === e.target.dataset.id);
//   Object.assign(taskData, { done: e.target.checked });
//   renderTasks(tasks);
// };

// listElem.addEventListener('click', onToggleTask);
