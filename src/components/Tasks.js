/*
 * @Author: your name
 * @Date: 2021-11-30 10:54:20
 * @LastEditTime: 2021-11-30 10:57:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-mytask\src\components\Tasks.js
 */
import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => (
  <>
    { tasks.map((task, index) => (
      <Task key={ index } task={ task } onDelete={ onDelete } onToggle={ onToggle } />
    )) }
  </>
)

export default Tasks;
