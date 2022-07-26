import React from 'react';
import { Helmet } from 'react-helmet';

import { useTranslations } from '@src/components/Intl';

const Title: React.FC = () => {
  const t = useTranslations();

  return <Helmet titleTemplate={`%s | ${t('APP.TITLE')}`} />;
};

export default Title;
