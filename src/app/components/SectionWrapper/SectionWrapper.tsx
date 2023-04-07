import { FC, ReactElement } from 'react';
import styles from './SectionWrapper.module.scss';

interface SectionWrapperProps {
  title?: string;
  children: ReactElement;
};

const SectionWrapper: FC<SectionWrapperProps> = ({ title, children }) => {

  return (
    <div className={styles.sectionWrapper}>
      {title && <span className={styles.sectionTitle}>{title}</span>}
      <div className={styles.sectionContent}>
        {children}
      </div>
    </div>
  );
}

export default SectionWrapper;
