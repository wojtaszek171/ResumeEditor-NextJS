import restService from './api/restService'
import CVItem from './components/CVItem'
import AddCVButton from './components/AddCVButton/AddCVButton'
import styles from './page.module.scss'

export default async function Index() {  
  const allCvs = await restService.fetchCVs()

  return (
    <div className={styles.mainPageComponent}>
      <span className={styles.sectionTitle}>Published cv-s</span>
      <div className={styles.publishedCvsList}>
        {allCvs.filter(cv => cv.isPublished).map((cv) => <CVItem key={cv.id} {...cv}/>)}
      </div>

      <span className={styles.sectionTitle}>Your cv-s</span>
      <div className={styles.ownedCvsList}>
        {allCvs.filter(cv => !cv.isPublished).map((cv) => <CVItem key={cv.id} {...cv}/>)}
        <AddCVButton />
      </div>
    </div>
  )
}
