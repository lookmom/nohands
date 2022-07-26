import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import Icon from '@src/components/Icon';
import { useTranslations } from '@src/components/Intl';

const NotFound: React.FC = () => {
  const t = useTranslations();

  return (
    <article className="d-flex vh-100 justify-content-center align-items-center">
      <Helmet>
        <title>{t('PAGE.NOTFOUND.TITLE')}</title>
      </Helmet>
      <div className="text-center">
        <h1>{t('PAGE.NOTFOUND.TITLE')}</h1>
        <p>{t('PAGE.NOTFOUND.DESCRIPTION')}</p>
        <Button tag={Link} to="/">
          <Icon symbol="chevron-left" className="me-2" />
          {t('PAGE.NOTFOUND.GO_BACK')}
        </Button>
      </div>
    </article>
  );
};

export default NotFound;
