import restService from '@/app/api/restService';
import Contact from '@/app/components/Contact/Contact';
import HeaderComponent from '@/app/components/HeaderComponent/HeaderComponent'
import Education from '@/app/components/Sections/Education/Education';
import Employment from '@/app/components/Sections/Employment/Employment';
import Languages from '@/app/components/Sections/Languages/Languages';
import Profile from '@/app/components/Sections/Profile/Profile';
import Skills from '@/app/components/Sections/Skills/Skills';
import TopBar from '@/app/components/TopBar'
import styles from './CVPage.module.scss'

export function generateStaticParams() {
  return [{ id: 'static' }]
}

export default async function CVPage({ params }) {
  const { id } = params;

  const cvDetails = await restService.fetchCVById(id);

  return (
    <div className={styles.cvPageComponent}>
      <h1>CV: {id}</h1>
      <TopBar />
      <div className={styles.contentWrapper}>
      <div className={styles.sideContent}>
        <Contact />
        <Skills />
        <Languages />
      </div>
      <div className={styles.mainContent}>
        <Profile />
        <Employment />
        <Education />
      </div>
      </div>
    </div>
  )
}
