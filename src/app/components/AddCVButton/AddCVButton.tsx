import { FC } from 'react';
import styles from './AddCVButton.module.scss';
import Image from 'next/image';

const AddCVButton: FC = () => {
  // const dispatch = useAppDispatch();

  const handleAddCV = () => {
    // dispatch(createNewCV());
  };

  return (
    <div
      className={styles.addCvButton}
      // onClick={handleAddCV}
    >
      <Image
        alt='cv-bg'
        src={'/cv-icon.png'}
        draggable="false"
        width="100"
        height="100"
      />
      <div className={styles.buttonTextWrapper}>
        <span className={styles.buttonText}>
          +
        </span>
      </div>
    </div>
  );
}

export default AddCVButton;
