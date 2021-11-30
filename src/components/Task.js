/*
 * @Author: your name
 * @Date: 2021-11-30 10:48:11
 * @LastEditTime: 2021-11-30 10:58:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-mytask\src\components\Task.js
 */
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => (
  <div 
    className={ `task ${ task.reminder && 'reminder' }` }
    onDoubleClick={ () => onToggle(task.id) }
  >
    <h3>
      { task.text }
      <FaTimes
        style={{ color: 'red', cursor: 'pointer' }}
        onClick={ () => onDelete(task.id) }
      />
    </h3>
    <p>{ task.day }</p>
  </div>
)

export default Task;