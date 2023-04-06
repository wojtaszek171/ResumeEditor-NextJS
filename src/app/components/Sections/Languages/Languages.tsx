import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';
import SkillItem from '../../SkillItem';
import AddSectionButton from '../../Contact/AddSectionButton/AddSectionButton';

const Languages: FC = () => {
  const languagesItems = []
  // const dispatch = useAppDispatch();
  // const locale = useAppSelector(getSelectedLanguage);

  const addSection = () => {
    // dispatch(createEmptyLanguage());
  };

  const onDelete = (id: string) => {
    // dispatch(deleteLanguageItem(id))
  }

  const onNameChange = (id: string, name: string) => {
    // dispatch(updateLanguageItem({ id, body: { name: { [locale]: name }}}))
  }

  const onRatingChange = (id: string, rating: number) => {
    // dispatch(updateLanguageItem({ id, body: { rating }}))
  }

  return (
    <SectionWrapper
      title='Languages'
    >
      <>
        {languagesItems.map((item: any) =>
          <SkillItem
            key={item.id}
            onDelete={onDelete}
            onNameSave={onNameChange}
            onRatingChange={onRatingChange}
            {...item}
          />
        )}
        <AddSectionButton onAddButton={addSection}/>
      </>
    </SectionWrapper>
  );
}

export default Languages;
