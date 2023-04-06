import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';

const Profile: FC = () => {
  // const userDetails = useAppSelector(getCVDetailsUser);
  // const tPresentation = useCVTranslation(userDetails.presentation);
  // const locale = useAppSelector(getSelectedLanguage);
  // const dispatch = useAppDispatch();

  const handleProfileSave = (text: string) => {
    // dispatch(updateUserData({ presentation: { [locale]: text } }));
  }

  return (
    <SectionWrapper
      title='Profile'
    >
      <>
        {/* <SectionText
          placeholder='Profile details'
          text={tPresentation}
          onSave={handleProfileSave}
        /> */}
      </>
    </SectionWrapper>
  );
}

export default Profile;
