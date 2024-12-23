import { motion } from 'framer-motion'
import foto from './assets/Avatar.jpg'
import style from './preview.module.css'

const animation = {
	hiddenHorizontal: {
		x: 100,
		opacity: 0,
	},
	visibleHorizontal: custom => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
	hiddenVertical: {
		y: -100,
		opacity: 0,
	},
	visibleVertical: custom => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

export default function Preview() {
	const arr_roles = [
		{
			id: 1,
			name: 'Frontend',
			description: [
				'JavaScript',
				'TypeScript',
				'React',
				'React Native',
				'Next.js',
				'Redux Toolkit',
				'Redux Toolkit Query',
				'Material UI',
				'Ant Design',
				'Mantine',
				'HTML',
				'CSS',
				'SCSS',
				'Framer motion',
				'Styled components',
			],
			roles_icon: style.icon_1,
			also: null,
			additionally: [],
		},
		{
			id: 2,
			name: 'Backend',
			description: [
				'JavaScript',
				'TypeScript',
				'Node.js',
				'Express',
				' Jest',
				'Swagger',
			],
			roles_icon: style.icon_2,
			also: null,
			additionally: [],
		},
		{
			id: 3,
			name: 'Архитектор баз данных',
			description: ['MySQL', 'PostgreSQL', 'MongoDB'],
			roles_icon: style.icon_3,
			also: 'а также',
			additionally: ['Mocha', 'Jest', 'Git', 'Figma'],
		},
	]

	return (
		<section>
			<div className={style.wrapper}>
				<motion.div
					initial='hiddenVertical'
					whileInView='visibleVertical'
					viewport={{ once: true }}
					className={style.visit_card}
				>
					<div className={style.about_me}>
						<motion.p custom={1} variants={animation}>
							Привет, меня зовут Алина Фалей, и я
						</motion.p>
						<motion.h1 custom={2} variants={animation}>
							FullStack разработчик
						</motion.h1>
						<motion.p custom={3} variants={animation}>
							Создаю динамические и интуитивно понятные веб-приложения. Я
							использую сочетание Next.js, Express.js и REST API для создания
							высокоэффективных и удобных в использовании интерфейсов, воплощая
							в жизнь сложные и интересные идеи.
						</motion.p>
					</div>
					<motion.img custom={4} variants={animation} src={foto} alt='foto' />
				</motion.div>
				<motion.div
					initial='hiddenVertical'
					whileInView='visibleVertical'
					viewport={{ once: true }}
					className={style.skills}
				>
					<div id='arrRoles' className={style.roles}>
						{arr_roles.map(el => (
							<motion.div
								custom={4 + el.id}
								variants={animation}
								key={el.id}
								className={style.roles_item}
							>
								<div className={el.roles_icon}></div>
								<div className={style.info_item}>
									<h3 className={style.roles_name}>{el.name}</h3>
									<div className={style.line}></div>
									<h3>Я работала с</h3>
									{el.description.map((elem, i) => (
										<ul key={i}>
											<li>{elem}</li>
										</ul>
									))}
									<h3 className={style.roles_name}>{el.also}</h3>
									{el.additionally.map((element, i) => (
										<ul key={i}>
											<li>{element}</li>
										</ul>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	)
}
