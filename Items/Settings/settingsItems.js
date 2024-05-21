export default [
    {
        header: 'Allgemein',
        icon: 'Settings',
        items: [
            {
                id: 'darkMode',
                icon: 'moon',
                color: 'blue',
                label: 'Dark Mode',
                type: 'toggle',
                icontype: 'font-awesome-5',
                onPress: 'darkmode'
            },
            {
                id: 'Impressum',
                icon: 'info',
                color: 'black',
                label: 'Impressum',
                type: 'link',
                navigate: 'Impressum',
                icontype: 'font-awesome-5'
            },
        ]
    },
    {
        header: 'Konto',
        icon: 'Settings',
        items: [
            {
                id: 'Profileinstellungen',
                icon: 'user',
                color: 'black',
                label: 'Profil',
                type: 'secure-link',
                navigate: 'ProfileSettings',
                icontype: 'font-awesome-5'
            },
        ]
    },
    {
        header: 'Privatsphäre',
        icon: 'Settings',
        items: [
            {
                id: 'news',
                icon: 'envelope',
                color: 'green',
                label: 'Benachrichtigungen',
                type: 'link',
                navigate: 'NotificationsSettings',
                icontype: 'font-awesome-5'
            },
        ]
    },
]