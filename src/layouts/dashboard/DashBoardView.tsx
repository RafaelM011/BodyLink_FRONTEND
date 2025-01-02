import { Outlet } from 'react-router-dom';
import styles from './DashBoardView.module.css';

export function DashBoardView() {
  return (
    <div className={styles.main}>
      <h1>Sidebar</h1>
      <Outlet />
    </div>
  );
}
