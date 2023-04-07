import { FC, useEffect } from 'react';
import photoJPG from './profile.jpg';
import ImageEdit from './ImageEdit';
import SectionText from '../SectionText';
import styles from './TopBar.module.scss';

const Name: FC = () => {
  // const isLoggedIn = useSelector(getIsTokenValid);
  // const userDetails = useAppSelector(getCVDetailsUser);
  // const locale = useAppSelector(getSelectedLanguage);
  // const dispatch = useAppDispatch();
  const isLoggedIn = false
  // const tProfession = useCVTranslation(userDetails.position);

  // const [photo, setPhoto] = useState<string | undefined>(undefined);

  const fileToDataUri = (file: any) => new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });

  // useEffect(() => {
  //   if (photoJPG) {
  //     var oReq = new XMLHttpRequest();    
  //     oReq.open('get', photoJPG , true);
  //     oReq.responseType = 'blob';
  //     oReq.onload = function () {
  //       fileToDataUri(oReq.response).then((dataUri: any) => {
  //         setPhoto(dataUri);
  //       });
  //     };
  //     oReq.send();
  //   }
  // }, []);

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
        photo={photo || ''}
      /> */}
      <div className={styles.nameWrapper}>
        <span className={styles.personName}>
          <SectionText
            text={''}
            placeholder='Name'
            onSave={handleNameSave}
          />
        </span>
        <span className={styles.personProfession}>
          <SectionText
            placeholder='Profession'
            text={''}
            onSave={handleProfessionSave}
          />
        </span>
      </div>
    </div>
  );
}

export default Name;
