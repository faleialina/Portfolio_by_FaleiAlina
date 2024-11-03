import { motion } from 'framer-motion'
import style from './experience.module.css'

const animation = {
	animate: {
		rotate: 360,
	},
	transition: {
		duration: 10,
		repeat: Infinity,
		ease: 'linear',
	},
}

export default function Experience() {
	const arr_experience = [
		{
			id: 1,
			title: 'Front-End Development',
			description:
				'Разработка интерактивного пользовательского интерфейса с использованием Next.js предоставляет мощные инструменты для создания динамичных и отзывчивых веб-приложений, реализовывать серверный рендеринг и статическую генерацию, улучшить производительность и SEO-оптимизацию.',
		},
		{
			id: 2,
			title: 'REST API',
			description:
				'Создание мощного REST API с использованием современных технологий для обеспечения безопасного и удобного взаимодействия между клиентом и сервером, позволяющего эффективно обрабатывать запросы и предоставлять данные в формате JSON, что способствует быстрой разработке и масштабируемости приложений.',
		},
		{
			id: 3,
			title: 'Back-End Development',
			description:
				'Создание динамического веб-приложения, использующего мощный фреймворк Express.js на стороне сервера и систему управления базами данных SQL для хранения и обработки информации. Интеграция с SQL позволяет хранить и извлекать данные надежно и эффективно, обеспечивая целостность и сохранность информации. ',
		},
	]

	return (
		<section id='experience'>
			<div className={style.wrapper}>
				<h2 className={style.title}>Что я делаю</h2>
				<p>как полный стек</p>
				<div className={style.exp_items}>
					{arr_experience.map(el => (
						<div key={el.id} className={style.border_item}>
							<h3 className={style.title_item}>{el.title}</h3>
							<p className={style.description_item}>{el.description}</p>
						</div>
					))}
				</div>
				<motion.div className={style.images}>
					<motion.div
						className={style.react}
						variants={animation}
						animate='animate'
						transition={animation.transition}
					/>
					<div className={style.js}></div>
					<motion.div
						className={style.nextjs}
						variants={animation}
						animate='animate'
						transition={animation.transition}
					/>
				</motion.div>
			</div>
		</section>
	)
}
