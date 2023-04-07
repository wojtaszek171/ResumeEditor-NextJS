import { FC } from 'react';
// import useCVTranslation from '../../../helpers/useCVTranslation';
// import { updateUserData } from '../../../store/cvDetails/cvDetailsSlice';
// import { getCVDetailsUser, getSelectedLanguage } from '../../../store/cvDetails/selector';
// import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import SectionText from '../SectionText';
import SectionWrapper from '../SectionWrapper';
import styles from './Contact.module.scss';

const Contact: FC = () => {
  // const { address, phone, email } = useAppSelector(getCVDetailsUser);
  // const locale = useAppSelector(getSelectedLanguage);
  // const dispatch = useAppDispatch();

  // const tAddress = useCVTranslation(address);

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
            {/* <SectionText
              placeholder='Address'
              text={tAddress}
              onSave={handleAddressSave}
            /> */}
          </span>
        </div>
        <div className={styles.contactSection}>
          <span className={styles.contactSectionTitle}>Phone</span>
          <span>
            {/* <SectionText
              placeholder='Phone'
              text={phone}
              onSave={handlePhoneSave}
            /> */}
          </span>
        </div>
        <div className={styles.contactSection}>
          <span className={styles.contactSectionTitle}>Email</span>
          <span>
            {/* <SectionText
              placeholder='Email'
              text={email?.length ? email : ''}
              onSave={handleEmailSave}
            /> */}
          </span>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
