import { useState } from "react";
import SearchBox from "./SearchBox";
import TaskActions from "./TaskActions";
import TaskAddEditModal from "./TaskAddEditModal";
import TaskList from "./TaskList";

const TaskBoard = () => {
    const [tasklist, setTasklist] = useState([
        {
            id: crypto.randomUUID().toString(),
            title: "Something task 1 ",
            description: "Something task description 1 ",
            tags: ["task1", "task2"],
            priority: "High",
            isFavorite: false,
        },
    ]);
    const [taskToUpdate, setTaskToUpdate] = useState(null);
    const [isShowModal, setIsShowModal] = useState(false);

    //task save to state after edit or create new task
    function handleTaskList(newTask, isNew) {
        if (isNew) {
            setTasklist([...tasklist, newTask]);
        } else {
            const updatedTasks = tasklist.map((task) => {
                if (task.id === newTask.id) {
                    return newTask;
                }
                return task;
            });
            setTasklist(updatedTasks);
        }

        handleCloseModal();
    }

    //handle task edit option
    function handleEditTask(task) {
        setTaskToUpdate(task);
        setIsShowModal(true);
    }
    //handle task delete option
    function handleDeleteTask(task) {
        const filteredTask = tasklist.filter((t) => t.id !== task.id);
        setTasklist(filteredTask);
    }

    //handle delete all task
    function handleDeleteAllTask() {
        let confirm = window.confirm(
            "Are you sure you want to delete all tasks? "
        );
        if (!confirm) {
            return;
        } else {
            setTasklist([]);
        }
    }

    //handle favorite tasks

    function handleFavoriteTasks(task) {
        const updatedData = tasklist.map((t) => {
            if (t.id === task.id) {
                return { ...task, isFavorite: !task.isFavorite };
            } else {
                return task;
            }
        });


        setTasklist(updatedData);
    }

    //handle task search
    function handleTaskSearch(searchTarm) {
        const filteredTasks = tasklist.filter((t) =>
            t.title.toLowerCase().includes(searchTarm.toLowerCase())
        );
        setTasklist(filteredTasks);
    }

    // task modal open close functionality
    function handleCloseModal() {
        setTaskToUpdate(null);
        setIsShowModal(false);
    }
    return (
        <>
            {isShowModal && (
                <TaskAddEditModal
                    onClose={handleCloseModal}
                    onSave={handleTaskList}
                    dataToEdit={taskToUpdate}
                />
            )}

            <section
                className='mb-20'
                id='tasks'>
                <div className='container'>
                    <SearchBox onSearch={handleTaskSearch} />

                    <div className='rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16'>
                        <TaskActions
                            onAdd={() => setIsShowModal(true)}
                            onDeleteAll={handleDeleteAllTask}
                        />
                        <TaskList
                            tasks={tasklist}
                            onEdit={handleEditTask}
                            onDelete={handleDeleteTask}
                            onFavorite={handleFavoriteTasks}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default TaskBoard;

