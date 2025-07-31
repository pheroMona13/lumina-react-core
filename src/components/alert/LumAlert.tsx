import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import LumIcon from '../icon';
import { IconName } from '../../assets/icons';
import './LumAlert.scss';

export type LumAlertProps = {
  indicatorIcon?: IconName;
  color?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  message?: string;
};

function LumAlert({
  indicatorIcon = 'info2',
  color = 'default',
  message,
}: LumAlertProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.onfocus = () => {
        setIsFocused(true);
      };
      ref.current.onblur = () => {
        setIsFocused(false);
      };

      return () => {
        if (ref.current) {
          ref.current.onfocus = null;
          ref.current.onblur = null;
        }
      };
    }
  }, [ref.current]);

  let iconColor;
  switch (color) {
    case 'primary':
      iconColor = '#2563eb';
      break;
  }

  return (
    <div className={clsx('LumAlert', color)} tabIndex={0} ref={ref}>
      <LumIcon name={indicatorIcon} color={isFocused ? 'white' : iconColor} />
      <div className="text">{message}</div>
      <LumIcon
        name="close"
        className="close-icon"
        color={isFocused ? 'white' : iconColor}
      />
    </div>
  );
}

export default LumAlert;
