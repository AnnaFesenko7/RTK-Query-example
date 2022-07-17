import Navigation from 'components/Navigation/Navigation';
import s from './Appbar.module.css';
// import PageHeading from 'components/PageHeading/PageHeading';

const AppBar = () => {
  return (
    <>
      <header className={s.header}>
        <Navigation />
      </header>
    </>
  );
};
export default AppBar;
