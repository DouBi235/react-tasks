/*
 * @Author: your name
 * @Date: 2021-11-28 17:45:03
 * @LastEditTime: 2021-11-28 18:02:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-mytask\src\components\Header.js
 */
// 参数验证
import PropTypes from 'prop-types';
// router-router hook
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className='header'>
      <h1>{ title }</h1>
      {location.pathname == '/' && (
        <Button
          color={ showAdd ? 'red' : 'green' }
          text={ showAdd ? 'Close' : 'Add' }
          onClick={ onAdd }
        />
      )

      }
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;