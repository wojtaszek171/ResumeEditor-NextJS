import { FC, KeyboardEventHandler } from 'react';
// import { useAppSelector } from '../../../store/hooks';
// import { getIsTokenValid } from '../../../store/session/selector';
import styles from './DeleteItemButton.module.scss';

interface DeleteItemButtonProps {
  onDeleteClick: Function;
};

const DeleteItemButton: FC<DeleteItemButtonProps> = ({ onDeleteClick }) => {
  // const isLoggedIn = useAppSelector(getIsTokenValid);

  const handleDelete = () => {
    onDeleteClick();
  };

  const handleKeyDown: KeyboardEventHandler<HTMLElement> = (e) => {
    if (e.key === 'Enter')
      handleDelete();
  };

  // if (!isLoggedIn)
    return <></>;

  // return (
  //   <div className={styles.deleteItemComponent}>
  //     <span
  //       className={styles.deleteButton}
  //       tabIndex={0}
  //       onClick={handleDelete}
  //       onKeyDown={handleKeyDown}
  //     >
  //       🗑
  //     </span>
  //   </div>
  // );
};

export default DeleteItemButton;
