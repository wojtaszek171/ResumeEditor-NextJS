import { FC } from 'react';
import DeleteItemButton from '../DeleteItemButton';
import styles from './EducationItem.module.scss';
import { EducationItem as EducationItemType } from '@/app/api/types';

interface EducationItemProps extends EducationItemType {}

const EducationItem: FC<EducationItemProps> = ({ id, school, location, degree, details, startDate, endDate }) => {
  // const dispatch = useAppDispatch();
  // const locale = useAppSelector(getSelectedLanguage);
  // const tSchool = useCVTranslation(school);
  // const tLocation = useCVTranslation(location);
  // const tDegree = useCVTranslation(degree);
  // const tDetails = useCVTranslation(details);

  const handleSchoolSave = (school: string) => {
    // dispatch(updateEducationItem({ id, body: { school: { [locale]: school }}}));
  };

  const handleDegreeSave = (degree: string) => {
    // dispatch(updateEducationItem({ id, body: { degree: { [locale]: degree }}}));
  };

  const handleSchoolLocationSave = (location: string) => {
    // dispatch(updateEducationItem({ id, body: { location: { [locale]: location }}}));
  };

  const handleSchoolDetailsSave = (details: string) => {
    // dispatch(updateEducationItem({ id, body: { details: { [locale]: details }}}));
  };

  const handleSchoolTimeFrameSave = () => {
    // TODO: redesign time edit
  };

  const handleElementDelete = () => {
    // dispatch(deleteEducationItem(id))
  };

  // const dateString = (startDate ? (new Date(startDate)).toLocaleDateString(locale, { year: "numeric", month: "short"}) : '') + ' - ' + (endDate ? (new Date(endDate)).toLocaleDateString(locale, { year: "numeric", month: "short"}) : 'Present')

  return (
    <div className={styles.educationComponent}>
      <div className={styles.educationHeader}>
        <span className={styles.educationTitle}>
          {/* <SectionText
            placeholder='School'
            text={tSchool}
            onSave={handleSchoolSave}
          />
          {!!(tDegree.length && tSchool.length) && <span>,&nbsp;</span>}
          <SectionText
            placeholder='Degree'
            text={tDegree}
            onSave={handleDegreeSave}
          /> */}
        </span>
        <span className={styles.educationLocation}>
          {/* <SectionText
            placeholder='School location'
            text={tLocation}
            onSave={handleSchoolLocationSave}
          /> */}
        </span>
      </div>
      <span className={styles.timeFrame}>
        {/* <SectionText
          placeholder='Time frame'
          text={dateString}
          onSave={handleSchoolTimeFrameSave}
        /> */}
      </span>
      <div className={styles.educationDetails}>
        {/* <SectionText
          placeholder='Details'
          text={tDetails}
          onSave={handleSchoolDetailsSave}
        /> */}
      </div>
      <DeleteItemButton onDeleteClick={handleElementDelete}/>
    </div>
  );
}

export default EducationItem;
