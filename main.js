window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //prevents from loading page after submit

        const task = input.value;

        if (!task) {
            alert("Please input a task to add to list")
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task"); //create a task class list

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content"); //create the task list content class

        task_el.appendChild(task_content_el);

        //adds task to list
        const task_input_el = document.createElement("Input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task; // turns the input value into a task
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        list_el.appendChild(task_el);

        //buttons
        const task_action_el = document.createElement("div");
        task_action_el.classList.add("actions");

        //action for the edit button to allow editing on a task
        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        //action for the delete button to allow removal of a task
        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);

        task_el.appendChild(task_action_el);
        list_el.appendChild(task_el);

        input.value = "";

        //functionality of buttons

        //edit and save the changes
        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            }else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            };
        });

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });
    });
});