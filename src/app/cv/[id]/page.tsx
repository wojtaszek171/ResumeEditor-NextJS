import restService from '@/app/api/restService';
import Contact from '@/app/components/Contact/Contact';
import HeaderComponent from '@/app/components/HeaderComponent/HeaderComponent'
import Education from '@/app/components/Sections/Education/Education';
import Employment from '@/app/components/Sections/Employment/Employment';
import Languages from '@/app/components/Sections/Languages/Languages';
import Profile from '@/app/components/Sections/Profile/Profile';
import Skills from '@/app/components/Sections/Skills/Skills';
import TopBar from '@/app/components/TopBar'
import './CVPage.scss'

export function generateStaticParams() {
  return [{ id: 'static' }]
}

export default async function CVPage({ params }) {
  const { id } = params;

  const cvDetails = await restService.fetchCVById(id);

  return (
    <>
      <HeaderComponent />
      <div className='cv-page-component'>
        <h1>CV: {id}</h1>
        <TopBar />
        <div className='content-wrapper'>
        <div className='side-content'>
          <Contact />
          <Skills />
          <Languages />
        </div>
        <div className='main-content'>
          <Profile />
          <Employment />
          <Education />
        </div>
        </div>
      </div>
    </>
  )
}
