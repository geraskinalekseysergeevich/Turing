import classes from './SidebarTimeGroup.module.css'

const SidebarTimeGroup = ({ getDialogHistoryFunc, timeGroup, label }) => {
	return (
		<div className={classes.timegroup__container}>
			<div className={classes.timeline_label}>{label}</div>
			<ul>
				{timeGroup.map(dialog => (
					<div key={dialog.id} onClick={() => getDialogHistoryFunc(dialog.id)}>
						<li>{dialog.title}</li>
					</div>
				))}
			</ul>
		</div>
	)
}

export default SidebarTimeGroup
