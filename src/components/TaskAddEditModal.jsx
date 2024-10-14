import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
const TaskAddEditModal = ({ handleModal, onClose, onSave, dataToEdit }) => {
    const [isEdit, setIsEdit] = useState(Object.is(dataToEdit, null));
    console.log(isEdit);

    const [taskData, setTaskData] = useState(
        dataToEdit || {
            id: crypto.randomUUID().toString(),
            title: "",
            description: "",
            tags: "",
            priority: "",
            isFavorite: false,
        }
    );

    //manage input fields
    function handleInput(e) {
        let name = e.target.name;
        let value = e.target.value;
        if (name === "tags") {
            value = e.target.value.split(",");
        }
        setTaskData({
            ...taskData,
            [name]: value,
        });
    }

    return (
        <div className='bg-black bg-opacity-70 h-full w-full z-10 absolute top-12 left-0'>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSave(taskData, isEdit);
                }}
                className='mx-auto my-10 w-full max-w-[700px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 relative'>
                <button
                    onClick={onClose}
                    className='absolute right-[40px] hover:scale-125 duration-300 '>
                    <IoCloseCircleOutline
                        size='35'
                        color='gray'
                    />
                </button>
                <h2 className='mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]'>
                    {isEdit ? "Add New Task" : "Edit Task"}
                </h2>

                {/* inputs */}
                <div className='space-y-9 text-white lg:space-y-10'>
                    {/* title */}
                    <div className='space-y-2 lg:space-y-3'>
                        <label htmlFor='title'>Title</label>
                        <input
                            className='block w-full rounded-md bg-[#2D323F] px-3 py-2.5'
                            type='text'
                            name='title'
                            id='title'
                            required
                            value={taskData.title}
                            onChange={handleInput}
                        />
                    </div>
                    {/* description */}
                    <div className='space-y-2 lg:space-y-3'>
                        <label htmlFor='description'>Description</label>
                        <textarea
                            className='block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]'
                            type='text'
                            name='description'
                            id='description'
                            required
                            value={taskData.description}
                            onChange={handleInput}
                        />
                    </div>
                    {/* input group */}
                    <div className='grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20'>
                        {/* tags */}
                        <div className='space-y-2 lg:space-y-3'>
                            <label htmlFor='tags'>Tags</label>
                            <input
                                className='block w-full rounded-md bg-[#2D323F] px-3 py-2.5'
                                type='text'
                                name='tags'
                                id='tags'
                                required
                                value={taskData.tags}
                                onChange={handleInput}
                            />
                        </div>
                        {/* priority */}
                        <div className='space-y-2 lg:space-y-3'>
                            <label htmlFor='priority'>Priority</label>
                            <select
                                className='block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5'
                                name='priority'
                                id='priority'
                                defaultValue={taskData.priority}
                                onChange={handleInput}
                                required>
                                <option value=''>Select Priority</option>
                                <option
                                    selected={taskData.priority === "Low"}
                                    value='Low'>
                                    Low
                                </option>
                                <option
                                    selected={taskData.priority === "Medium"}
                                    value='Medium'>
                                    Medium
                                </option>
                                <option
                                    selected={taskData.priority === "High"}
                                    value='High'>
                                    High
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* inputs ends */}
                <div className='mt-16 flex justify-center lg:mt-20'>
                    <button
                        type='submit'
                        className='rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80'>
                        {isEdit ? "Create new Task" : "Update Task"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskAddEditModal;

