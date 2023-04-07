import { CVItem } from "@/app/api/types";
import styles from "./CVItemComponent.module.scss";
import restService from "@/app/api/restService";
import Image from "next/image";
import useCVTranslation from "@/app/helpers/useCVTranslation";
import RemoveButton from "./RemoveButton";
import Link from "next/link";

const CVItemComponent = async ({ id, userId }: CVItem) => {
  const currentUserId = null;
  const userDetails = await restService.fetchCVUser(id.toString());
  const tPosition = useCVTranslation(userDetails?.position);


  return (
    <div className={styles.cvItemComponentWrapper}>
      {currentUserId === userId && <RemoveButton id={id} />}
      <Link type="button" href={`/cv/${id}`}>
        <div className={styles.cvItemComponent}>
          <Image
            alt="cv-bg"
            src={"/cv-icon.png"}
            draggable="false"
            width="100"
            height="100"
          />
          <span className={styles.cvName}>{userDetails?.name || "CV"}</span>
          <span className={styles.cvProfession}>{tPosition}</span>
        </div>
      </Link>
    </div>
  );
};

export default CVItemComponent;
