import { Outlet } from 'react-router-dom';

export function DashBoardView() {
  return (
    <div>
      <h1>Sidebar</h1>
      <Outlet />
    </div>
  );
}
