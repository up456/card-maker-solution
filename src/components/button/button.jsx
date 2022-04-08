import styles from './button.module.css';

import React from 'react';
import { memo } from 'react/cjs/react.development';

const Button = memo(({ name, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {name}
  </button>
));

export default Button;
