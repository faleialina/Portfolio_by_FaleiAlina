import style from './header.module.css'

export default function Header() {
	return (
		<>
			<nav className={style.wrapper}>
				<div className={style.images}>
					<a href='https://www.linkedin.com/in/alina-falei-6a49b0258/'>
						<div className={style.linkedin}></div>
					</a>
					<a href='https://github.com/faleialina'>
						<div className={style.github}></div>
					</a>
					<a href='https://t.me/F_AlinaA'>
						<div className={style.telegram}></div>
					</a>
					<div className={style.email}></div>
				</div>
				<div className={style.info}>
					<p>Обо мне</p>
					<p>Опыт работы</p>
					<p>Мои проекты</p>
				</div>
			</nav>
		</>
	)
}
