import React, { memo, useRef, useEffect } from 'react';
import style from './style.module.scss';
import logo from 'assets/icons/klasha__logo 1.png';
import { main_routes, accept_payments, send_payments } from './routes';
import NavLink from './nav_link';
import { useLocation } from 'react-router-dom';
import Buttons, { btnStates } from 'components/input';
import Telephone from 'assets/icons/telephone';
import ChevronLeft from 'assets/icons/chevron_left';
import ButtonLink from 'components/input/button_link';
import { useSidebarProvider } from 'contexts/sidebar';
import classNames from 'classnames';
import ChevronsRight from 'assets/icons/chevrons_right';
import { useTranslation } from 'react-i18next';

const Sidebar = memo(function Sidebar(props) {
  let navRef = useRef(null);
  const { t } = useTranslation();
  const { navigation } = props;
  const { pathname } = useLocation();
  const {
    hideMobileSidebar,
    toggleMobileHideSidebar,
    hideSidebar,
    toggleHideSidebar,
  } = useSidebarProvider();

  const toggleMobileNav = () => {
    toggleMobileHideSidebar(!hideMobileSidebar);
  };

  const hideSideBar = () => {
    toggleHideSidebar(!hideSidebar);
  };

  const handleBlur = e => {
    if (e.currentTarget.contains(e.relatedTarget)) {
      navRef.current.blur();
      toggleMobileNav();
    }
  };

  useEffect(() => {
    if (hideMobileSidebar) {
      navRef.current.focus();
    }
  }, [hideMobileSidebar]);

  return (
    <aside
      onBlur={handleBlur}
      ref={navRef}
      tabIndex={-1}
      className={classNames(style.sidebar, {
        [style.hide_mobile_sidebar]: !hideMobileSidebar,
        [style.reveal_mobile_sidebar]: hideMobileSidebar,
        [style.hide_sidebar]: hideSidebar,
      })}>
      <section className={style.main}>
        <div className={style.brand_wrapper}>
          <img className={style.brand} src={logo} alt='brand' srcSet='' />
          <div className={style.close_btn_wrapper}>
            <Buttons
              Icon={ChevronsRight}
              state={btnStates.FLAT}
              handleClick={toggleMobileNav}
            />
          </div>
        </div>

        <div className={style.nav_container}>
          {navigation.map(nav => (
            <>
              <span className={style.nav_title}>{t(nav.title_lang)}</span>
              {nav.routes &&
                nav.routes.map((route, index) => (
                  <NavLink
                    key={index}
                    isActive={pathname === `/${route.url}`}
                    title={t(route.title_lang)}
                    url={route.url}
                    Icon={route.Icon}
                  />
                ))}
            </>
          ))}
        </div>
      </section>
      <section className={style.footer}>
        <ButtonLink
          classAddon='mb-16 round-btn'
          label={t('buttons.support')}
          Icon={Telephone}
          href={'tel:+2347031194736'}
          state={btnStates.PRIMARY}></ButtonLink>
        <div className={style.hide_panel}>
          <Buttons
            classAddon='mb-16'
            label={t('buttons.hide_panel')}
            Icon={ChevronLeft}
            state={btnStates.SECONDARY}
            handleClick={hideSideBar}
          />
        </div>
      </section>
    </aside>
  );
});

export default Sidebar;

Sidebar.defaultProps = {
  navigation: [
    { title: 'Main Page', title_lang: 'titles.main_page', routes: main_routes },
    {
      title: 'Accept Payments',
      title_lang: 'titles.accept_payments',
      routes: accept_payments,
    },
    {
      title: 'Send payments',
      title_lang: 'titles.send_payments',
      routes: send_payments,
    },
  ],
};
