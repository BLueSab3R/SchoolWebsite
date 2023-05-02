import style from './StylesForPages.module.scss'
import teachers from './TeachersData/Data';

function TeachingStaff() {
    return (
        <div className={style.styles}>
            <div className={style.teachers}>
                <div className={style.teachersCard}>
                    {teachers.map(({ name, src }) => (
                        <div key={name} className={style.teacherCard}>
                            <img src={`${process.env.PUBLIC_URL}${src}`} alt={name} />
                            {name === 'Богата Олександра Миколаївна' ? (
                                <p>{name}
                                     <p>вчитель української мови та літератури, спеціаліст вищої категорії, учитель-методист</p>
                                </p>
                            ) : (<span>{name}</span>)}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default TeachingStaff;
