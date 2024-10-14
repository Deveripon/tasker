import nodata from "../assets/nodata.svg";
import Task from "./Task";
const TaskList = ({ tasks = [], onEdit, onDelete, onFavorite }) => {
    return (
        <div className='overflow-auto'>
            {tasks.length > 0 ? (
                <table className='table-fixed overflow-auto xl:w-full'>
                    <thead>
                        <tr>
                            <th className='p-4 pb-8 text-sm font-semibold capitalize w-[48px]' />
                            <th className='p-4 pb-8 text-sm font-semibold capitalize w-[300px]'>
                                {" "}
                                Title{" "}
                            </th>
                            <th className='p-4 pb-8 text-sm font-semibold capitalize w-full'>
                                {" "}
                                Description{" "}
                            </th>
                            <th className='p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]'>
                                {" "}
                                Tags{" "}
                            </th>
                            <th className='p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]'>
                                {" "}
                                Priority{" "}
                            </th>
                            <th className='p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]'>
                                {" "}
                                Options{" "}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.length > 0 &&
                            tasks.map((task) => (
                                <Task
                                    key={task.id}
                                    task={task}
                                    onEdit={onEdit}
                                    onDelete={onDelete}
                                    onFavorite={onFavorite}
                                />
                            ))}
                    </tbody>
                </table>
            ) : (
                <div className='not-found flex justify-center items-center'>
                    <div className='inner flex-col'>
                        <img
                            className='size-[200px]'
                            src={nodata}
                            alt='no data '
                        />
                        <h4 className='ml-[60px] mt-4 text-[#f5bf42] font-bold'>
                            No Task Found
                        </h4>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskList;




