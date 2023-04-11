import SectionText from '../SectionText';
import SectionWrapper from '../SectionWrapper';
import styles from './Contact.module.scss';
import { CVUser } from '@/app/api/types';
import useCVTranslation from '@/app/helpers/useCVTranslation';

interface ContactProps {
  userDetails: CVUser;
}

const Contact = ({ userDetails }: ContactProps) => {
  const tAddress = useCVTranslation(userDetails?.address);

  const handleAddressSave = (address: string) => {
    // dispatch(updateUserData({ address: { [locale]: address } }));
  }

  const handlePhoneSave = (phone: string) => {
    // dispatch(updateUserData({ phone }));
  }

  const handleEmailSave = (email: string) => {
    // dispatch(updateUserData({ email }));
  }
  
  return (
    <SectionWrapper
      title='Contact'
    >
      <div className={styles.contactComponent}>
        <div className={styles.contactSection}>
          <span className={styles.contactSectionTitle}>Address</span>
          <span>
            <SectionText
              placeholder='Address'
              text={tAddress}
              onSave={handleAddressSave}
            />
          </span>
        </div>
        <div className={styles.contactSection}>
          <span className={styles.contactSectionTitle}>Phone</span>
          <span>
            <SectionText
              placeholder='Phone'
              text={userDetails?.phone}
              onSave={handlePhoneSave}
            />
          </span>
        </div>
        <div className={styles.contactSection}>
          <span className={styles.contactSectionTitle}>Email</span>
          <span>
            <SectionText
              placeholder='Email'
              text={userDetails?.email}
              onSave={handleEmailSave}
            />
          </span>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
