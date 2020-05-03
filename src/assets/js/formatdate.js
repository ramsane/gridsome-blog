export default function formatDate(date) {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
	]
	const d = new Date(date)
	return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`

}