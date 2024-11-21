import { useEffect, useState } from 'react'
import style from './meteorTrail.module.css'

const MeteorTrail = () => {
	const [position, setPosition] = useState({ top: '50%', left: '50%' })
	const [isMoving, setIsMoving] = useState(false)

	const handleMouseMove = e => {
		setPosition({ top: `${e.clientY}px`, left: `${e.clientX}px` })
		setIsMoving(true)
	}

	useEffect(() => {
		const handleMouseLeave = () => setIsMoving(false)
		window.addEventListener('mousemove', handleMouseMove)
		window.addEventListener('mouseleave', handleMouseLeave)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('mouseleave', handleMouseLeave)
		}
	}, [])

	return (
		<div
			className={`${style.meteor} ${isMoving ? style.meteorMove : ''}`}
			style={{ top: position.top, left: position.left }}
		/>
	)
}

export default MeteorTrail
