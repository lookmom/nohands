import React from 'react';

import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('NOTFOUND.TITLE')}</h1>
      <p>{t('NOTFOUND.DESCRIPTION')}</p>
    </div>
  );
};

export default NotFound;
