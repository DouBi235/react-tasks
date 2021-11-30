/*
 * @Author: your name
 * @Date: 2021-11-28 17:35:59
 * @LastEditTime: 2021-11-28 17:38:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-mytask\src\components\Footer.js
 */
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <p>Copyright &copy; 2021</p>
    <Link to='/about'>About</Link>
  </footer>
)

export default Footer;
