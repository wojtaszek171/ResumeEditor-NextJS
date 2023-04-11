import useCVTranslation from '@/app/helpers/useCVTranslation';
import SectionWrapper from '../../SectionWrapper';
import { CVUser } from '@/app/api/types';
import SectionText from '../../SectionText/SectionText';

interface ProfileProps {
  userDetails: CVUser;
}

const Profile = ({ userDetails }: ProfileProps) => {
  const tPresentation = useCVTranslation(userDetails?.presentation);

  const handleProfileSave = (text: string) => {
    // dispatch(updateUserData({ presentation: { [locale]: text } }));
  }

  return (
    <SectionWrapper
      title='Profile'
    >
      <>
        <SectionText
          placeholder='Profile details'
          text={tPresentation}
          onSave={handleProfileSave}
        />
      </>
    </SectionWrapper>
  );
}

export default Profile;
