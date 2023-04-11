import { FC } from 'react';
import DeleteItemButton from '../DeleteItemButton';
import SectionText from '../SectionText';
import styles from './SkillItem.module.scss';
import { LanguageItem } from '@/app/api/types';
import useCVTranslation from '@/app/helpers/useCVTranslation';

const RATING_MAX = 5;

interface SkillItemProps extends LanguageItem {
  onDelete: (id: string) => void;
  onNameSave: (id: string, name: string) => void;
  onRatingChange: (id: string, rating: number) => void;
}

const SkillItem: FC<SkillItemProps> = ({ id, name, rating, onDelete, onNameSave, onRatingChange }) => {
  const tName = useCVTranslation(name);
  const isLoggedIn = false;

  const handleSkillNameSave = (newName: string) => {
    onNameSave(id, newName)
  };

  const handleRatingChange = (newRating: number) => {
    onRatingChange(id, newRating)
  };

  const handleElementDelete = () => {
    onDelete(id);
  };

  return (
    <div className={styles.skillComponent}>
      <span className={styles.skillTitle}>
        <SectionText
          placeholder='Skill'
          text={tName}
          onSave={handleSkillNameSave}
        />
      </span>
      <div className={`${styles.skillRating} ${isLoggedIn ? styles.editable : ''}`}>
        {[...Array(rating)].map((el, i) =>
          <div
            className={`${styles.ratingDot} ${styles.full}`}
            // onClick={() => handleRatingChange(i + 1)}
            key={`dot${i}full`}
          />
        )}
        {[...Array(RATING_MAX-rating)].map((el, i) =>
          <div
            className={styles.ratingDot}
            // onClick={() => handleRatingChange(rating + i + 1)}
            key={`dot${i}`}
          />
        )}
      </div>
      <DeleteItemButton onDeleteClick={handleElementDelete}/>
    </div>
  );
}

export default SkillItem;
