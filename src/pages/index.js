import Buttons, { btnStates } from 'components/input';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from 'components/nav';
import ChevronsRight from 'assets/icons/chevrons_right';
import { useSidebarProvider } from 'contexts/sidebar';
import classNames from 'classnames';
import Appbar from 'components/appbar';

export default function MyApp() {
  const { hideSidebar, toggleHideSidebar } = useSidebarProvider();

  const hideSideBar = () => {
    toggleHideSidebar(!hideSidebar);
  };

  return (
    <main className={classNames('app', { 'expanded-app': hideSidebar })}>
      <div
        className={classNames('expand-btn', {
          'hide-expand-btn': !hideSidebar,
        })}>
        <Buttons
          classAddon='flat-left-radius'
          handleClick={hideSideBar}
          Icon={ChevronsRight}
          state={btnStates.PRIMARY}
        />
      </div>
      <Sidebar />
      <div className={classNames('main-content')}>
        <Appbar />
        <Outlet />
      </div>
    </main>
  );
}
