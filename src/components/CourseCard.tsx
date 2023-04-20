import { useRouter } from 'next/router';
import { ButtonCta } from './ButtonCta';
import styles from '../styles/CourseCard.module.css';
export const CourseCard = ({ course }) => {
    const router = useRouter();
    const { name, description, id } = course;

    return (
        <div className={styles.courseCard}>
            <div className={styles.titleContainer}>
                <div className={styles.title}>{name}</div>
            </div>
            <div className={styles.content}>
                <ButtonCta onClick={() => { 
                    router.push({
                        pathname: '/courses/[id]',
                        query:{id:id},
                    })
                }}>View Course</ButtonCta>
            </div>
        </div>
    )
}