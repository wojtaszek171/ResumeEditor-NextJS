import SectionText from '../SectionText';
import styles from './TopBar.module.scss';
import { CVUser } from '@/app/api/types';
import useCVTranslation from '@/app/helpers/useCVTranslation';

interface TopBarProps {
  userDetails: CVUser;
}

export const TopBar = ({ userDetails }: TopBarProps) => {
  const isLoggedIn = false
  const tProfession = useCVTranslation(userDetails?.position);

  // const [photo, setPhoto] = useState<string | undefined>(undefined);

  const fileToDataUri = (file: any) => new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });

  const handleNameSave = (name: string) => {
    // dispatch(updateUserData({ name }));
  };

  const handleProfessionSave = (position: string) => {
    // dispatch(updateUserData({ position: { [locale]: position } }));
  };

  return (
    <div className={styles.topBarComponent}>
      {/* <ImageEdit
        edit={isLoggedIn}
        photo={''}
      /> */}
      <div className={styles.nameWrapper}>
        <span className={styles.personName}>
          <SectionText
            text={userDetails?.name}
            placeholder='Name'
            onSave={handleNameSave}
          />
        </span>
        <span className={styles.personProfession}>
          <SectionText
            placeholder='Profession'
            text={tProfession}
            onSave={handleProfessionSave}
          />
        </span>
      </div>
    </div>
  );
}

export default TopBar;
