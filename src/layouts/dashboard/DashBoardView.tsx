import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components';
import styles from './DashBoardView.module.css';

export function DashBoardView() {
  return (
    <div className={styles.main}>
      <Sidebar />
      <Outlet />
    </div>
  );
}
