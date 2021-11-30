/*
 * @Author: your name
 * @Date: 2021-11-30 11:11:23
 * @LastEditTime: 2021-11-30 18:02:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-mytask\src\components\AddTask.js
 */
import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) return alert('Please add a task');

    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={ onSubmit }>
      <div className="form-control">
        <label htmlFor='text'>Task</label>
        <input type="text"
          type='text'
          placeholder='Add Task'
          value={ text }
          id='text'
          onChange={ e => setText(e.target.value) }
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <input type="text"
          type='text'
          placeholder='Add Day & Time'
          value={ day }
          id='day'
          onChange={ e => setDay(e.target.value) }
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input type="text"
          type='checkbox'
          checked={ reminder }
          value={ reminder }
          id='reminder'
          onChange={ e => setReminder(e.currentTarget.checked) }
        />
      </div>

      <input type="submit" value='Save Task' className='btn btn-block' />
    </form>
  )
}


export default AddTask;