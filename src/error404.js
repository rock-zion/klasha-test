import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ErrorPage() {
  const { t } = useTranslation();
  return (
    <div className='error-page'>
      <h2>{t('titles.nothing_to_see_here')}</h2>
      <p>
        <Link to='/'>{t('titles.go_to_the_homepage')}</Link>
      </p>
    </div>
  );
}
