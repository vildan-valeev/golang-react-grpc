import React, {FC} from 'react';
// @ts-ignore
import classes from "./MyInput.module.css";

interface MyInputProps {
  value?: string
  onChange?: any
  placeholder?: string
  type?: string
}

const MyInput: FC<MyInputProps> = (props) => {
  return (
    <input className={classes.myInput} {...props}/>
  );
};

export default MyInput;
