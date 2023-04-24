import React, {FC} from 'react';
// @ts-ignore
import classes from "./MyModal.module.css";

interface MyModalProps {
    children: any
    visible: any
    setVisible: any
}

const MyModal: FC<MyModalProps> = ({children, visible, setVisible}) => {

  const rootClasses = [classes.myModal]
  if (visible) {
    rootClasses.push(classes.active)
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible()}>
      <div className={classes.myModalContent} onClick={(e) =>e.stopPropagation() }>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
