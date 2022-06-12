import React, { FC } from 'react';

import classNames from 'classnames/bind';

import styles from './Title.css';

const cx = classNames.bind(styles);

export const Title = (props) => {
  const { children, type, size, className = '', ...rest } = props;

  const titleClassName = `${cx('ui-title', `ui-title--${size}`)} ${className}`;

  switch (type) {
    case 'h1':
      return (
        <h1 className={titleClassName} {...rest}>
          {children}
        </h1>
      );

    case 'h2':
      return (
        <h2 className={titleClassName} {...rest}>
          {children}
        </h2>
      );

    case 'h3':
      return (
        <h3 className={titleClassName} {...rest}>
          {children}
        </h3>
      );

    case 'h4':
      return (
        <h4 className={titleClassName} {...rest}>
          {children}
        </h4>
      );

    default:
  }

  throw new Error(`Unknown type was presented - "${type}".`);
};

export default Title;
