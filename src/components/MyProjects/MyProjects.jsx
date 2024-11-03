import { motion } from 'framer-motion'
import img6 from './assets/JWT-Mobile.png'
import img5 from './assets/Weather.png'
import img2 from './assets/bistro.png'
import img4 from './assets/breedShow.png'
import img1 from './assets/caffeine.png'
import img3 from './assets/education.png'
import img7 from './assets/toDo.png'
import style from './projects.module.css'

export default function MyProjects() {
	const arr_projects = [
		{
			id: 1,
			name: 'Сaffeine',
			link: 'https://new-caffeine-5ynp.vercel.app/',
			environment: [
				'typescript',
				'html',
				'react',
				'styled components',
				'framer motion',
			],
			description:
				'Интуитивно понятная навигация и современный дизайн делают этот проект не только полезным инструментом, но и эстетически приятным ресурсом. Использование React позволяет создавать динамичные и адаптивные компоненты, которые легко масштабируются и поддерживаются, что открывает новые горизонты для дальнейшего развития.',
			img: img1,
			style_img: style.img_item_1,
		},
		{
			id: 2,
			name: 'BistroBliss',
			link: 'https://main--clinquant-marzipan-3e0214.netlify.app/',
			environment: ['javascript', 'html', 'scss', 'react', 'next.js'],
			description:
				'Разработанное с использованием современных веб-технологий, это многостраничное приложение предоставляет все необходимые инструменты для онлайн-представления ресторана.  Визуальная привлекательность и удобство использования обеспечивают комфортный опыт для пользователей.',
			img: img2,
			style_img: style.img_item_2,
		},
		{
			id: 3,
			name: 'EducationPlatform',
			link: 'https://github.com/faleialina/EducationPlatform',
			environment: [
				'typescript',
				'node.js',
				'express',
				'cors',
				'jwt-token',
				'react',
				'html',
				'css',
			],
			description:
				'Этот проект является онлайн-платформой для обучения, предоставляющей пользователям возможность изучать разнообразные предметы через удобный веб-интерфейс. Он акцентирует внимание на интерактивных курсах, оформленных в эстетически привлекательном дизайне.',
			img: img3,
			style_img: style.img_item_3,
		},
		{
			id: 4,
			name: 'breed.show',
			link: 'https://breed.show/',
			environment: ['typescript', 'html', 'styled components', 'react'],
			description:
				'Проект представляет собой веб-приложение для заводчиков животных, предназначенное для управления питомниками и взаимодействия с клиентами.  Пользователи могут вести учет животных, включая родословные, записи о здоровье и вакцинации.  Система позволяет управлять продажами,  записывать информацию о клиентах и их питомцах, а также планировать вязки и следить за потомством.',
			img: img4,
			style_img: style.img_item_4,
		},
		{
			id: 5,
			name: 'Weather-dashboard',
			link: 'https://weather-dashboard-zeta-gules.vercel.app/',
			environment: ['typescript', 'html', 'css', 'react', 'axios', 'api'],
			description:
				'Веб-приложение, которое показывает текущую погоду в городе, указанном пользователем. На экране отображаются результаты, включая температуру, влажность, скорость ветра и описание погодных условий. Также есть функция сброса введенных данных и повторного поиска.',
			img: img5,
			style_img: style.img_item_5,
		},
		{
			id: 6,
			name: 'JWT-Mobile',
			link: 'https://github.com/faleialina/JWT-Mobile',
			environment: ['javascript', 'react-native'],
			description:
				'Проект представляет собой удобное приложение для задач todo, призванное оптимизировать и улучшить ваш ежедневный опыт управления задачами.',
			img: img6,
			style_img: style.img_item_6,
		},
		{
			id: 7,
			name: 'toDo-Next-Nest',
			link: 'https://github.com/faleialina/toDo-Next-Nest',
			environment: [
				'typescript',
				'html',
				'scss',
				'react',
				'next.js',
				'axios',
				'node.js',
				'nest',
				'pg',
			],
			description:
				'Интуитивно понятный интерфейс, стильный дизайн и плавная работа приложения позволят с лёгкостью управлять своим списком добрых дел.  Добавляйте задачи, отмечат выполненные, редактируйте и удаляйте их — всё происходит в несколько кликов. Авторизованный пользователь может добавлять людей в друзья и смотреть их список добрых дел.  Система регистрации и авторизации обеспечивает безопасность Ваших данных и конфиденциальность.',
			img: img7,
			style_img: style.img_item_7,
		},
	]

	return (
		<section id='myProjects'>
			<div className={style.wrapper}>
				<h2>Мои проекты</h2>
				<p>Вот несколько проектов, которые я реализовала</p>
				<div className={style.whirligig_projects}>
					{arr_projects.map(el => (
						<motion.div
							whileHover={{ scale: 1.02 }}
							key={el.id}
							className={style.project_item}
						>
							<img className={el.style_img} src={el.img} alt='img' />
							<div className={style.environment}>
								{el.environment.map((elem, i) => (
									<div key={i} className={style.env_item}>
										<p>{`#${elem}`}</p>
									</div>
								))}
							</div>
							<h3 className={style.name_item}>{el.name}</h3>
							<p className={style.text_item}>{el.description}</p>
							<a
								href={el.link}
								target='_blank'
								rel='noopener noreferrer'
								className={style.view}
							>
								Посмотреть →
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
