import UserRoutes from './UserRoutes';

import Navbar from './Navbar/Navbar';

import s from './app.module.css';

const App = () => {
  return (
    <div className={s.container}>
      <Navbar/>
      <UserRoutes/>
    </div>
  );
};

export default App;
