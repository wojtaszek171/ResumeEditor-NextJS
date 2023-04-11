import SectionWrapper from '../../SectionWrapper';
import SkillItem from '../../SkillItem';
import AddSectionButton from '../../Contact/AddSectionButton/AddSectionButton';
import { SkillItem as SkillItemType } from '@/app/api/types';

interface SkillsProps {
  skills: SkillItemType[];
}

const Skills = ({ skills }: SkillsProps) => {
  // const dispatch = useAppDispatch();
  // const locale = useAppSelector(getSelectedLanguage);

  const addSection = () => {
    // dispatch(createEmptySkill());
  };

  const onDelete = (id: string) => {
    // dispatch(deleteSkillItem(id))
  }

  const onNameChange = (id: string, name: string) => {
    // dispatch(updateSkillItem({ id, body: { name: { [locale]: name }}}))
  }

  const onRatingChange = (id: string, rating: number) => {
    // dispatch(updateSkillItem({ id, body: { rating }}))
  }

  return (
    <SectionWrapper
      title='Skills'
    >
      <>
        {skills?.map((item: any) =>
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

export default Skills;
