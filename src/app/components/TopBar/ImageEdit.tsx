import { ImageUpload } from 'pwojtaszko-design';
import { FC } from 'react';
import styles from './TopBar.module.scss';
import Image from 'next/image';

interface ImageEditProps {
    edit: boolean;
    photo: string;
}

const ImageEdit: FC<ImageEditProps> = ({ photo, edit }) => {

  return (
    <div className={styles.personPhoto}>
        {edit ?
            <ImageUpload
                photo={photo}
                edit={edit}
                round
            /> :
            <Image
                width={300}
                height={300}
                className={styles.personPhotoImg}
                src={photo}
                alt='cv person'
            />
        }
    </div>
  );
}

export default ImageEdit;
