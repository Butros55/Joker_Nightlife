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
                type: 'toggle'
            },
            {
                id: 'news',
                icon: 'envelope',
                color: 'green',
                label: 'Benachrichtigungen',
                type: 'link'
            },
            {
                id: 'Über uns',
                icon: 'info',
                color: 'black',
                label: 'Über uns',
                type: 'link'
            },
        ]
    },
    {
        header: 'Konto',
        icon: 'Settings',
        items: [
            {
                id: 'Privatsphäre',
                icon: 'lock',
                color: 'black',
                label: 'Privatsphäre',
                type: 'link'
            },
            {
                id: 'Profileinstellungen',
                icon: 'user',
                color: 'black',
                label: 'Profil',
                type: 'link'
            },
        ]
    },
]