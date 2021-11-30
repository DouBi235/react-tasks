/*
 * @Author: your name
 * @Date: 2021-11-28 17:53:15
 * @LastEditTime: 2021-11-30 11:39:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-mytask\src\components\Button.js
 */
import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => (
  <button
    onClick={ onClick }
    style={{ backgroundColor: color }}
    className='btn'
  >
    { text }
  </button>
)

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;