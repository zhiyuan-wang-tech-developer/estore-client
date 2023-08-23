import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <Outlet />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <Link to="/management">后台管理</Link>
        </li>
        {/* <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li> */}
      </ul>
    </div>
  );
}
