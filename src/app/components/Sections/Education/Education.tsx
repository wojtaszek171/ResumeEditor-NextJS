import SectionWrapper from '../../SectionWrapper';
import AddSectionButton from '../../Contact/AddSectionButton/AddSectionButton';
import { EducationItem as EducationItemType } from '@/app/api/types';
import EducationItem from '../../EducationItem/EducationItem';

interface EducationProps {
  education: EducationItemType[]
}

const Education = ({ education }: EducationProps) => {
  // const dispatch = useAppDispatch();

  const addSection = () => {
    // dispatch(createEmptyEducation());
  };

  return (
    <SectionWrapper
      title='Education'
    >
      <>
        {education?.map((item: EducationItemType) =>
          <EducationItem
            key={item.id}
            {...item}
          />
        )}
        <AddSectionButton onAddButton={addSection}/>
      </>
    </SectionWrapper>
  );
}

export default Education;
