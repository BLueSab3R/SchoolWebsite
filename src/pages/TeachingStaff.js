import style from './StylesForPages.module.scss';
import teachers from './TeachersData/Data';

function TeachingStaff() {
    return (
        <div className={style.styles}>
            <div className={style.teachers}>
                <div className={style.teachersCard}>
                    {teachers.map(({ name, src }) => (
                        <div key={name} className={style.teacherCard}>
                            <img src={`${process.env.PUBLIC_URL}${src}`} alt={name} />
                            {name === 'Богата Олександра Миколаївна' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель української мови та літератури,
                                        спеціаліст вищої категорії, учитель-методист
                                    </span>
                                </p>
                            )}
                            {name === 'Авдєєнко Ірина Володимирівна' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель української мови та літератури,спеціаліст
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Башинський Леонід Францович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізики та інформатики,
                                        спеціаліст вищої категорії, старший учитель
                                    </span>
                                </p>
                            )}
                            {name === 'Бердій Олена Анатоліївна' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель математики та фізики,
                                        спеціаліст ІІ категорії
                                    </span>
                                </p>
                            )}
                            {name === 'Бичков Олексій Сергійович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель інформатики, доктор технічних наук, професор,
                                        спеціаліст вищої категорії, учитель-методист
                                    </span>
                                </p>
                            )}
                            {name === 'Богатий Георгій Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель англійської мови,
                                        спеціаліст ІІ категорії
                                    </span>
                                </p>
                            )}
                            {name === 'Бондар Богдана Миколаївна' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        педагог-організатор,
                                        керівник фотогуртка
                                    </span>
                                </p>
                            )}
                            {name === 'Бондарєва Вікторія Олександрівна' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель української мови та літератури,
                                        спеціаліст ІІ категорії
                                    </span>
                                </p>
                            )}
                            {name === 'Бубон Раїса Іванівна' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель української мови та літератури,
                                        спеціаліст вищої категорії, старший учитель
                                    </span>
                                </p>
                            )}
                            {name === 'Васьковська Тетяна Миколаївна' || name === 'Козюн Лариса Володимирівна' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель початкових класів,
                                        спеціаліст І категорії
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}


                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default TeachingStaff;
