import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export default function TempButton({
  label,
  type,
  disabled,
  onClick,
  customstyle,
  ic,
  margin,
  height,
}) {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      customstyle={customstyle}
      ic={ic}
      margin={margin}
      height={height}
    >
      {ic && <img src={ic} alt=''/>}
      {label}
    </Button>
  );
}

Button.defaultProps = {
  label: '확인 했습니다',
  type: 'button',
  disabled: false,
  onClick: () => {},
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
