import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
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
				'Интуитивно понятная навигация и современный дизайн делают этот проект не только полезным инструментом, но и эстетически приятным ресурсом. ',
			img: img1,
			style_img: style.img_item_1,
		},
		{
			id: 2,
			name: 'BistroBliss',
			link: 'https://main--clinquant-marzipan-3e0214.netlify.app/',
			environment: ['javascript', 'html', 'scss', 'react', 'next.js'],
			description:
				'Это многостраничное приложение предоставляет все необходимые инструменты для онлайн-представления ресторана.',
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
				'Этот проект является онлайн-платформой для обучения, предоставляющей пользователям возможность изучать разнообразные предметы через удобный веб-интерфейс.',
			img: img3,
			style_img: style.img_item_3,
		},
		{
			id: 4,
			name: 'breed.show',
			link: 'https://breed.show/',
			environment: ['typescript', 'html', 'styled components', 'react'],
			description:
				'Проект представляет собой веб-приложение для заводчиков животных, предназначенное для управления питомниками и взаимодействия с клиентами.',
			img: img4,
			style_img: style.img_item_4,
		},
		{
			id: 5,
			name: 'Weather-dashboard',
			link: 'https://weather-dashboard-zeta-gules.vercel.app/',
			environment: ['typescript', 'html', 'css', 'react', 'axios', 'api'],
			description:
				'Веб-приложение, которое показывает текущую погоду в городе, указанном пользователем. На экране отображаются результаты,а также есть функция сброса введенных данных.',
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
				'Приложение позволят с лёгкостью управлять своим списком добрых дел. Авторизованный пользователь может добавлять людей в друзья и смотреть их список добрых дел.',
			img: img7,
			style_img: style.img_item_7,
		},
	]

	const projectsPerPage = 3

	const clonedProjects = [
		...arr_projects.slice(-projectsPerPage),
		...arr_projects,
		...arr_projects.slice(0, projectsPerPage),
	]
	const totalProjects = clonedProjects.length
	const totalPages = Math.ceil(arr_projects.length / projectsPerPage)

	const [currentPage, setCurrentPage] = useState(projectsPerPage)

	const startIndex = currentPage
	const endIndex = startIndex + projectsPerPage
	const currentProjects = clonedProjects.slice(startIndex, endIndex)

	const handleNext = () => {
		setCurrentPage(currentPage => {
			const nextPage = currentPage + projectsPerPage
			return nextPage >= totalProjects - projectsPerPage
				? projectsPerPage
				: nextPage
		})
	}

	const handlePrev = () => {
		setCurrentPage(currentPage => {
			const prevPage = currentPage - projectsPerPage
			return prevPage < projectsPerPage
				? totalProjects - projectsPerPage * 2
				: prevPage
		})
	}

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext()
		}, 4000)
		return () => clearInterval(interval)
	}, [currentPage])

	return (
		<section id='myProjects'>
			<div className={style.wrapper}>
				<h2>Мои проекты</h2>
				<p>Вот несколько проектов, которые я реализовала</p>
				<div className={style.whirligig_projects}>
					{currentProjects.map(el => (
						<motion.div
							whileHover={{ scale: 1.02 }}
							key={el.id}
							className={style.project_item}
						>
							<div style={{ height: '230px' }}>
								<img className={el.style_img} src={el.img} alt='img' />{' '}
							</div>

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
				<div className={style.button_container}>
					<button
						className={style.button}
						onClick={handlePrev}
						disabled={currentPage === 0}
					>
						Предыдущая
					</button>
					<button
						className={style.button}
						onClick={handleNext}
						disabled={currentPage === totalPages - 1}
					>
						Следующая
					</button>
				</div>
			</div>
		</section>
	)
}
