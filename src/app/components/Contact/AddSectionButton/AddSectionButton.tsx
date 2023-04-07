import { Button } from 'pwojtaszko-design';
import { FC } from 'react';
import styles from './AddSectionButton.module.scss';

interface AddSectionButtonProps {
  onAddButton: () => void;
};

const AddSectionButton: FC<AddSectionButtonProps> = ({ onAddButton }) => {
  // const isLoggedIn = useSelector(getIsTokenValid);

  // if (!isLoggedIn) 
  return <></>;

  // return (
  //   <div className={styles.addSectionButtonComponent}>
  //     <Button
  //       text='+'
  //       onClick={onAddButton}
  //     />
  //   </div>
  // );
}

export default AddSectionButton;
