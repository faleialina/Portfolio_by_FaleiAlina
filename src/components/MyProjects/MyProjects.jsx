import img2 from './assets/bistro.png'
import img1 from './assets/caffeine.png'
import img3 from './assets/education.png'
import style from './projects.module.css'

export default function MyProjects() {
	const arr_projects = [
		{
			id: 1,
			name: 'Сaffeine',
			environment: [
				'typescript',
				'html',
				'react',
				'styled components',
				'framer motion',
			],
			description:
				'Проект демонстрирует применение современных подходов к разработке интерфейсов с использованием React и реализует основные функциональные требования для создания привлекательного сайта для пользователей',
			img: img1,
			style_img: style.img_item_1,
		},
		{
			id: 2,
			name: 'BistroBliss',
			environment: ['javascript', 'html', 'scss', 'react', 'next.js'],
			description:
				'Многостраничное веб-приложение для ресторана, где пользователи могут ознакомиться с меню и услугами заведения. Проект охватывает всю необходимую функциональность для ресторана, делая акцент на визуальной составляющей',
			img: img2,
			style_img: style.img_item_2,
		},
		{
			id: 3,
			name: 'EducationPlatform',
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
				'Данный проект представляет собой платформу для онлайн-обучения, позволяющую пользователям изучать различные предметы через веб-интерфейс. Он ориентирован на предложении интерактивных курсов с визуально привлекательным дизайном',
			img: img3,
			style_img: style.img_item_3,
		},
		{
			id: 4,
			name: 'WebPage',
			environment: ['javascript', 'html', 'css', 'react'],
			description:
				'Проект представляет собой веб-приложение для платформы, связанной с азартными играми в форме рекламной страницы c использованием анимации',
			img: img1,
			style_img: style.img_item_1,
		},
		{
			id: 5,
			name: 'Weather-dashboard',
			environment: ['typescript', 'html', 'css', 'react', 'axios', 'api'],
			description:
				'Веб-приложение для отображения текущей погоды в заданном пользователем городе. Результаты отображаются на экране, включая температуру, влажность, скорость ветра и описание погоды. Также предусмотрена возможность сброса введенных данных и повторного поиска.',
			img: img1,
			style_img: style.img_item_1,
		},
		{
			id: 6,
			name: 'Vacancies',
			environment: [
				'javascript',
				'html',
				'scss',
				'react',
				'material ui',
				'localstorage',
			],
			description:
				'Проект представляет собой веб-приложение, предназначенное для поиска и управления вакансиями. Пользователи могут искать вакансии, добавлять их в список избранного, просматривать подробности о каждой вакансии, а также управлять своим списком избранных позиций',
			img: img1,
			style_img: style.img_item_1,
		},
		{
			id: 7,
			name: 'Presentation-adaptive',
			environment: ['javascript', 'html', 'css', 'react'],
			description:
				'Данный проект является веб-приложением, разработанным с целью предоставления пользователю возможности взаимодействовать с функциональностью, связанной с демо-версией услуг компании',
			img: img1,
			style_img: style.img_item_1,
		},
	]

	return (
		<section id='myProjects'>
			<div className={style.wrapper}>
				<h2>Мои проекты</h2>
				<p>Вот несколько проектов, которые я реализовала</p>
				<div className={style.whirligig_projects}>
					{arr_projects.map(el => (
						<div key={el.id} className={style.project_item}>
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
							<p className={style.view}>see project →</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
