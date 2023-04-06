import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';
import JobItem from '../../JobItem';
import AddSectionButton from '../../Contact/AddSectionButton/AddSectionButton';

const Employment: FC = () => {
  const employmentItems = [];
  // const dispatch = useAppDispatch();

  const addSection = () => {
    // dispatch(createEmptyEmployment());
  };

  return (
    <SectionWrapper
      title='Employment'
    >
      <>
        {employmentItems.map((item: any) =>
          <JobItem
            key={item.id}
            {...item}
          />
        )}
        <AddSectionButton onAddButton={addSection}/>
      </>
    </SectionWrapper>
  );
}

export default Employment;
