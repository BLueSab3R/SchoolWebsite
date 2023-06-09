import style from './StylesForPages.module.scss';
import teachers from './TeachersData/Data';

function TeachingStaff() {
    const sortedTeachers = teachers.sort((a,b)=>{
        return a.name.localeCompare(b.name);
    })
    return (
        <div className={style.styles}>
            <div className={style.teachers}>
                <div className={style.teachersCard}>
                    {sortedTeachers.map(({ name, src }) => (
                        <div key={name} className={style.teacherCard}>
                            <img src={`${process.env.PUBLIC_URL}${src}`} alt={name} />
                            {name === 'Богата Олександра Миколаївна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель української мови та літератури,
                                        спеціаліст вищої категорії, учитель-методист
                                    </span>
                                </p>
                            )}
                            {name === 'Авдєєнко Ірина Володимирівна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель української мови та літератури,спеціаліст
                                    </span>
                                </p>
                            )}
                            {name === 'Бабченко Олександр Григорович' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель фізичної культури,
                                        спеціаліст, майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Башинський Леонід Францович' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель фізики та інформатики,
                                        спеціаліст вищої категорії, старший учитель
                                    </span>
                                </p>
                            )}
                            {name === 'Бердій Олена Анатоліївна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель математики та фізики,
                                        спеціаліст ІІ категорії
                                    </span>
                                </p>
                            )}
                            {name === 'Бичков Олексій Сергійович' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель інформатики, доктор технічних наук, професор,
                                        спеціаліст вищої категорії, учитель-методист
                                    </span>
                                </p>
                            )}
                            {name === 'Богатий Георгій Григорович' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель англійської мови,
                                        спеціаліст ІІ категорії
                                    </span>
                                </p>
                            )}
                            {name === 'Бондар Богдана Миколаївна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        педагог-організатор,
                                        керівник фотогуртка
                                    </span>
                                </p>
                            )}
                            {name === 'Бондарєва Вікторія Олександрівна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель української мови та літератури,
                                        спеціаліст ІІ категорії
                                    </span>
                                </p>
                            )}
                            {(name === 'Бубон Раїса Іванівна' || name === 'Халматова Інна Миколаївна') && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель української мови та літератури,
                                        спеціаліст вищої категорії, старший учитель
                                    </span>

                                </p>
                            )}

                            {(name === 'Васьковська Тетяна Миколаївна' || name === 'Козюн Лариса Володимирівна') && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель початкових класів,
                                        спеціаліст І категорії
                                    </span>
                                </p>
                            )}
                            {name === 'Вишняк Влада Юріївна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель англійської мови,
                                        спеціаліст
                                    </span>
                                </p>
                            )}
                            {(name === 'Власенко Ольга Володимирівна' || name === 'Шматкова Алла Олександрівна') && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель математики,
                                        спеціаліст вищої категорії, старший учитель
                                    </span>
                                </p>
                            )}
                            {name === 'Григораш Андрій Миколайович' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <br />
                                    <span>
                                        керівник гуртка «Християнська етика»,
                                        вчитель української мови та літератури, спеціаліст
                                    </span>
                                </p>
                            )}
                            {name === 'Грищенко Лариса Петрівна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель фізичної культури, спеціаліст вищої категорії
                                    </span>
                                </p>
                            )}
                            {name === 'Грищенко Олена Іванівна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        заступник директора з навчально-виховної роботи,
                                        вчитель географії,
                                        спеціаліст вищої категорії, учитель-методист
                                    </span>
                                </p>
                            )}
                            {name === 'Грищенко Ольга Михайлівна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        практичний психолог, вчитель історії,
                                        спеціаліст вищої категорії, учитель-методист
                                    </span>
                                </p>
                            )}
                            {name === 'Гуцол Наталія Миколаївна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель початкових класів, спеціаліст
                                    </span>
                                </p>
                            )}
                            {name === 'Данилюк Олександра Михайлівна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        заступник директора з навчально-виховної роботи,
                                        вчитель математики,
                                        спеціаліст вищої категорії, учитель-методист
                                    </span>
                                </p>
                            )}
                            {name === 'Дубас Лариса Вікторівна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель біології,
                                        спеціаліст вищої категорії, старший вчитель
                                    </span>
                                </p>
                            )}
                            {name === 'Єрмак Ніла Сергіївна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель англійської мови,
                                        спеціаліст І категорії
                                    </span>
                                </p>
                            )}
                            {name === 'Єрмоленко Ірина Євгенівна' || name === 'Руденко Юлія Олександрівна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель початкових класів,
                                        спеціаліст ІІ категорії
                                    </span>
                                </p>
                            )}
                            {(name === 'Савенко Любов Олексіївна' || name === 'Трофименко Світлана Василівна') && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель початкових класів,
                                        спеціаліст вищої категорії, учитель-методист
                                    </span>
                                </p>
                            )}
                            {name === 'Кобзар Ігор Володимирович' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель захисту України, спеціаліст ІІ категорії,
                                        майстер спорту
                                    </span>
                                </p>
                            )}
                            {name === 'Костюченко Владислав Анатолійович' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель трудового навчання, технологій,

                                        спеціаліст
                                    </span>
                                </p>
                            )}
                            {name === 'Лєбєдєва Олена Станіславівна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель історії, правознавства, громадянської освіти,
                                        спеціаліст вищої категорії, учитель-методиста
                                    </span>
                                </p>
                            )}
                            {name === 'Лич Інна Валентинівна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        директор, вчитель біології, кандидат біологічних наук,
                                        доцент, спеціаліст вищої категорії, учитель-методист
                                    </span>
                                </p>
                            )}
                            {name === 'Мазур Аліна Петрівна' || name === 'Стрелець Тетяна Сергіївна' || name === 'Терещук Ірина Володимирівна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель початкових класів,
                                        спеціаліст вищої категорії
                                    </span>
                                </p>
                            )}
                            {name === 'Маліновська Тетяна Миколаївна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вихователь групи подовженого дня,
                                        спеціаліст вищої категорії
                                    </span>
                                </p>
                            )}
                            {(name === 'Медвідь Вікторія Валентинівна' || name === 'Ломова Наталія Василівна' || name === `Халматова Дар'я Сергіївна`) && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        асистент вчителя, спеціаліст
                                    </span>
                                </p>
                            )}
                            {name === 'Мигрин Тетяна Федотівна' && (
                                <p>
                                    {name}
                                    <br />
                                    <span>
                                        вчитель зарубіжної літератури,
                                        спеціаліст вищої категорії, учитель-методист
                                    </span>
                                </p>
                            )}
                            {name === 'Неділько Катерина Іванівна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель німецької мови,
                                        спеціаліст вищої категорії, старший учитель
                                    </span>
                                </p>
                            )}

                            {name === 'Одарич Лариса Євгеніївна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        заступник директора з навчально-виховної роботи,
                                        вчитель української мови та літератури,
                                        спеціаліст вищої категорії, учитель-методист
                                    </span>
                                </p>
                            )}

                            {name === 'Одарченко Катерина Іванівна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель зарубіжної літератури, спеціаліст
                                    </span>
                                </p>
                            )}

                            {name === 'Пінєвич Олександр Анатолійович' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель хімії, спеціаліст вищої категорії,

                                        старший учитель
                                    </span>
                                </p>
                            )}

                            {name === 'Погребняк Дарія Миколаївна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        логопед
                                    </span>
                                </p>
                            )}
                            {name === 'Подлевська Оксана Віталіївна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        соціальний педагог, вчитель образотворчого мистецтва,

                                        спеціаліст І категорії
                                    </span>
                                </p>
                            )}
                            {name === 'Подлевський Роман Васильович' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель математики
                                    </span>
                                </p>
                            )}
                            {(name === 'Пономаренко Сергій Павлович' || name === 'Халматов Денис Валерійович') && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель фізичної культури, спеціаліст ІІ категорії
                                    </span>
                                </p>
                            )}
                            {name === 'Поплавська Наталія Анатоліївна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель математики, фізики,
                                        спеціаліст ІІ категорії
                                    </span>
                                </p>
                            )}
                            {name === 'Рекеда Тетяна Іванівна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        Вчитель географії, природничих наук,
                                        спеціаліст вищої категорії, старший учитель
                                    </span>
                                </p>
                            )}
                            {(name === 'Сенич Валентина Володимирівна' || name === 'Федоренко Олена Василівна') && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель початкових класів,
                                        спеціаліст вищої категорії, учитель методист
                                    </span>
                                </p>
                            )}
                            {name === 'Чирко Тетяна Григорівна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        вчитель музичного мистецтва, мистецтва,
                                        спеціаліст вищої категорії, учитель-методист
                                    </span>
                                </p>
                            )}
                            {name === 'Штифурко Анеліна Василівна' && (
                                <p>
                                    {`${name.split(' ')[0]}`}
                                    <br />
                                    {`${name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        заступник директора з навчально-виховної роботи,
                                        вчитель початкових класів, спеціаліст І категорії
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
