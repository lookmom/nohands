import { library, IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { useLazy } from '@src/utils';

let iconsInitialized = false;
// enable solid icons by default
async function initializeIcons() {
  if (iconsInitialized) return;
  const { fas } = await import('@fortawesome/free-solid-svg-icons');
  library.add(fas);
  iconsInitialized = true;
}

interface Props {
  className?: string;
  symbol: IconName;
}

const Icon: React.FC<Props> = ({ className, symbol }) => {
  const { isInitialized } = useLazy(async () => {
    await initializeIcons();
  });

  if (!isInitialized) return <span className="placeholder ms-4 bg-danger">&nbsp;</span>;

  return <FontAwesomeIcon className={className} icon={symbol} />;
};

export default Icon;
