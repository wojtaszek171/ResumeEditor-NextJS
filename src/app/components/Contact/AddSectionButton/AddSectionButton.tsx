import { Button } from 'pwojtaszko-design';
import { FC } from 'react';
import './AddSectionButton.scss';

interface AddSectionButtonProps {
  onAddButton: () => void;
};

const AddSectionButton: FC<AddSectionButtonProps> = ({ onAddButton }) => {
  // const isLoggedIn = useSelector(getIsTokenValid);

  // if (!isLoggedIn) 
  return <></>;

  // return (
  //   <div className='add-section-button-component'>
  //     <Button
  //       text='+'
  //       onClick={onAddButton}
  //     />
  //   </div>
  // );
}

export default AddSectionButton;
