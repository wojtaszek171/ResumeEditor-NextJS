import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';
import AddSectionButton from '../../Contact/AddSectionButton/AddSectionButton';

const Education: FC = () => {
  // const educationItems = useSelector(getCVDetailsEducation);
  // const dispatch = useAppDispatch();

  const addSection = () => {
    // dispatch(createEmptyEducation());
  };

  return (
    <SectionWrapper
      title='Education'
    >
      <>
        {/* {educationItems.map((item: EducationItemType) =>
          <EducationItem
            key={item.id}
            {...item}
          />
        )} */}
        <AddSectionButton onAddButton={addSection}/>
      </>
    </SectionWrapper>
  );
}

export default Education;
