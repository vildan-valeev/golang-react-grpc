import React, {FC} from 'react';
// @ts-ignore
import classes from "./MyButton.module.css";

interface MyButtonProps {
  children?: any
  onClick?: any
  style?: any
}

const MyButton: FC<MyButtonProps> = ({children, ...props}) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
