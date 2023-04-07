'use client'

import { Button, Modal } from 'pwojtaszko-design';
import styles from "./CVItemComponent.module.scss";
import restService from '@/app/api/restService';
import { useState } from 'react';

const RemoveButton = ({ id }: { id: number }) => {
  const [showRemoveConfirmation, setShowRemoveConfirmation] = useState(false);
  // const navigate = useNavigate();

  const handleCVRemove = (e: MouseEvent) => {
    e.stopPropagation();
    return restService.removeCVById(id)
      .then(() => ({ id }));
  };

  return (
    <>
      <span
        className={styles.removeCvButton}
        onClick={() => setShowRemoveConfirmation(true)}
      >
        🗑️
      </span>
      <Modal
        onClose={() => setShowRemoveConfirmation(false)}
        show={showRemoveConfirmation}
        title='Are you sure you want to delete cv?'
      >
        <div className={styles.deleteConfirmation}>
          <div className={styles.buttonsWrapper}>
            <div>
              <Button
                onClick={() => setShowRemoveConfirmation(false)}
                text='No'
              />
            </div>
            <div className={styles.buttonRed}>
              <Button
                onClick={handleCVRemove}
                text='Yes'
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default RemoveButton;
