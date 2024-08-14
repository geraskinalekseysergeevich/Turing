import { format, differenceInDays } from 'date-fns';

export const sortDialogsFunction = (userDialogs) => {
    const sortedDialogs = [...userDialogs].sort((a, b) => new Date(b.created) - new Date(a.created));
    
    const timeGroups = {
        today: [],
        last7days: [],
        last30days: [],
        older: []
    }

    const timeGroupLabels = [
        {group: 'today', label: 'Сегодня'},
        {group: 'last7days', label: 'Предыдущие 7 дней'},
        {group: 'last30days', label: 'Предыдущие 30 дней'}
    ]

    const now = new Date()

    sortedDialogs.forEach((dialog) => {
        const createdDate = new Date(dialog.created)
        const diffDays = differenceInDays(now, createdDate)

        if (diffDays === 0) {
            timeGroups.today.push(dialog)
        } else if (diffDays <= 7) {
            timeGroups.last7days.push(dialog)
        } else if (diffDays <= 30) {
            timeGroups.last30days.push(dialog)
        } else {
            const monthYear = format(createdDate, 'MMMM yyyy')
            if (!timeGroups.older[monthYear]) {
                timeGroups.older[monthYear] = []
            }
            timeGroups.older[monthYear].push(dialog)
        }
    })

    return { timeGroups, timeGroupLabels };
}