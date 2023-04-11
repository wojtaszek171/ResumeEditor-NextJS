import Contact from '@/app/components/Contact/Contact';
import Education from '@/app/components/Sections/Education/Education';
import Employment from '@/app/components/Sections/Employment/Employment';
import Languages from '@/app/components/Sections/Languages/Languages';
import Profile from '@/app/components/Sections/Profile/Profile';
import Skills from '@/app/components/Sections/Skills/Skills';
import TopBar from '@/app/components/TopBar'
import styles from './CVContent.module.scss'
import restService from '@/app/api/restService';


export default async function CVContent({ id }: { id: string }) {

  const user = await restService.fetchCVUser(id.toString());
  const skills = await restService.fetchCVSkills(id.toString());
  const education = await restService.fetchCVEducation(id.toString());
  const employment = await restService.fetchCVEmployment(id.toString());
  const languages = await restService.fetchCVLanguages(id.toString());


  return (
    <div className={styles.cvPageComponent}>
      <TopBar userDetails={user} />
      <div className={styles.contentWrapper}>
      <div className={styles.sideContent}>
        <Contact userDetails={user} />
        <Skills skills={skills}/>
        <Languages languages={languages} />
      </div>
      <div className={styles.mainContent}>
        <Profile userDetails={user}/>
        <Employment employment={employment}/>
        <Education education={education} />
      </div>
      </div>
    </div>
  )
}
