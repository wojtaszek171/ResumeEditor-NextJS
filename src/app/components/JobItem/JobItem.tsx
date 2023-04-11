import { FC } from 'react';
import DeleteItemButton from '../DeleteItemButton';
import SectionText from '../SectionText';
import styles from './JobItem.module.scss';
import { EmploymentItem } from '@/app/api/types';
import useCVTranslation from '@/app/helpers/useCVTranslation';

interface JobItemProps extends EmploymentItem {}

const JobItem: FC<JobItemProps> = ({ id, company, position, location, startDate, endDate, details }) => {
  const tPosition = useCVTranslation(position);
  const tLocation = useCVTranslation(location);
  const tDetails = useCVTranslation(details);
  const locale = 'en-us';

  const handleTitleSave = (position: string) => {
    // dispatch(updateEmploymentItem({ id, body: { position: { [locale]: position }}}));
  }

  const handleLocationSave = (location: string) => {
    // dispatch(updateEmploymentItem({ id, body: { location: { [locale]: location }}}));
  }

  const handleCompanySave = (company: string) => {
    // dispatch(updateEmploymentItem({ id, body: { company }}));
  }

  const handleTimeFrameSave = () => {
    // TODO: redesign time edit
  }

  const handleDetailsSave = (details: string) => {
    // dispatch(updateEmploymentItem({ id, body: { details: { [locale]: details }}}));
  }

  const handleDelete = () => {
    // dispatch(deleteEmploymentItem(id));
  }

  const dateString = (startDate ? (new Date(startDate)).toLocaleDateString(locale, { year: "numeric", month: "short"}) : '') + ' - ' + (endDate ? (new Date(endDate)).toLocaleDateString(locale, { year: "numeric", month: "short"}) : 'Present')

  return (
    <div className={styles.jobComponent}>
      <div className={styles.jobHeader}>
        <span className={styles.jobTitle}>
          <SectionText
            placeholder='Profession'
            text={tPosition}
            onSave={handleTitleSave}
          />
          {!!(tPosition?.length && company?.length) && <span>,&nbsp;</span>}
          <SectionText
            placeholder='Company'
            text={company}
            onSave={handleCompanySave}
          />
        </span>
        <span className={styles.jobLocation}>
          <SectionText
            placeholder='Office location'
            text={tLocation}
            onSave={handleLocationSave}
          />
        </span>
      </div>
      <span className={styles.timeFrame}>
        <SectionText
          placeholder='Time Frame'
          text={dateString}
          onSave={handleTimeFrameSave}
          editable={false}
        />
      </span>
      <div className={styles.jobDetails}>
        <SectionText
          placeholder='Details'
          text={tDetails}
          onSave={handleDetailsSave}
        />
      </div>
      <DeleteItemButton onDeleteClick={handleDelete}/>
    </div>
  );
}

export default JobItem;
