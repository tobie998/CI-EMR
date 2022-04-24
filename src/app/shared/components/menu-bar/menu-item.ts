export const menuItem: Array<object> = [

    {
        title: 'Home',
        elementOnUrl: 'home', //kiểm tra xem có trong url không để active menu item
        link: '/pages/home',
        icon: 'house'
    },

    {
        title: 'Clients',
        elementOnUrl: 'clients',
        link: '/pages/clients',
        icon: 'people_outline'
    },

    {
        title: 'Calendar',
        elementOnUrl: 'calendar',
        link: '/pages/calendar',
        icon: 'date_range'
    },

    {
        title: 'Notifications',
        elementOnUrl: 'notifications',
        link: '/pages/notifications',
        icon: 'notifications_none'
    },

    {
        title: 'Messages',
        elementOnUrl: 'messages',
        link: '/pages/message',
        icon: 'chat'
    },

    {
        title: 'Packages',
        elementOnUrl: 'packages',
        link: '/pages/test/test',
        icon: 'devices_other'
    }

];
export const tabItem: Array<object> = [

    {
        title: 'History',
        elementOnUrl: 'history', //kiểm tra xem có trong url không để active menu item
        link: '/pages/profile/history',
        icon: 'forum'
    },

    {
        title: 'Exam',
        elementOnUrl: 'exam',
        link: '/pages/profile/exam',
        icon: 'people_outline'
    },

    {
        title: 'Diagnosis',
        elementOnUrl: 'diagnosis',
        link: '/pages/profile/diagnosis',
        icon: 'calendar_today'
    },

    {
        title: 'Plan',
        elementOnUrl: 'plan',
        link: '/pages/profile/plan',
        icon: 'notifications_none'
    },

    {
        title: 'Report',
        elementOnUrl: 'report',
        link: '/pages/profile/report',
        icon: 'file_copy'
    },

    {
        title: 'Invoice',
        elementOnUrl: 'invoice',
        link: '/pages/profile/invoice',
        icon: 'account_balance_wallet',
    }

]