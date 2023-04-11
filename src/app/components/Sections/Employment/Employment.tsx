import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';
import JobItem from '../../JobItem';
import AddSectionButton from '../../Contact/AddSectionButton/AddSectionButton';
import { EmploymentItem } from '@/app/api/types';

interface EmploymentProps {
  employment: EmploymentItem[]
}

const Employment = ({ employment }: EmploymentProps) => {

  const addSection = () => {
    // dispatch(createEmptyEmployment());
  };

  return (
    <SectionWrapper
      title='Employment'
    >
      <>
        {employment?.map((item: any) =>
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
