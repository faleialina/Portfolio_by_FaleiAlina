import style from './header.module.css'
import burgermenu from './assets/burgermenu.svg'
import close from './assets/close.svg'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Header() {
	const [isshowBurger, setShowBurger] = useState(false)

	useEffect(() => {
		// на подумать
		// document.querySelector('html').style = `overflow: ${isshowBurger ? 'hidden' : 'scroll'}`
	}, [isshowBurger])

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

				<div className={style.burger}>
					<img onClick={() => setShowBurger(!isshowBurger)} src={burgermenu} style={{ width: 30 }} alt="" />

					{isshowBurger && <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 30, position: 'absolute', width: '100%', backgroundColor: '#f3f3f3', left: 0, top: 0, height: '100%' }}>

						<img onClick={() => setShowBurger(false)} src={close} style={{ width: 30, position: 'absolute', right: '5%', top: '5%' }} alt="" />

						<p>Обо мне</p>
						<p>Опыт работы</p>
						<p>Мои проекты</p>
					</div>}

				</div>
			</nav>
		</>
	)
}
