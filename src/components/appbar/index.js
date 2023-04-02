import Trello from 'assets/icons/trello';
import Buttons, { btnStates } from 'components/input';
import { useSidebarProvider } from 'contexts/sidebar';
import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import { useTranslation } from 'react-i18next';
import CustomSelect, { selectStates } from 'components/custom_select';
import classNames from 'classnames';

const Appbar = () => {
  const { i18n } = useTranslation();
  const { hideSidebar, hideMobileSidebar, toggleMobileHideSidebar } =
    useSidebarProvider();
  const [selectedLanguage, setSelectedLanguage] = useState('fr');

  const toggleMobileNav = () => {
    toggleMobileHideSidebar(!hideMobileSidebar);
  };

  const handleLanguageChange = e => {
    setSelectedLanguage(e.value);
  };

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const select_options = [
    { label: 'En', value: 'en' },
    { label: 'Fr', value: 'fr' },
  ];

  return (
    <div
      className={classNames(style.appbar, {
        [style.extended_app_bar]: hideSidebar,
      })}>
      <div className={style.open_drawer}>
        <Buttons
          handleClick={toggleMobileNav}
          state={btnStates.FLAT}
          Icon={Trello}
        />
      </div>
      <div className={style.user_profile}>
        <CustomSelect
          state={selectStates.FLAT}
          value={select_options[0]}
          selectedOption={selectedLanguage}
          options={select_options}
          handleChange={handleLanguageChange}
        />
      </div>
    </div>
  );
};

export default Appbar;
