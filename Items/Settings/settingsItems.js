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
                id: 'news',
                icon: 'envelope',
                color: 'green',
                label: 'Benachrichtigungen',
                type: 'link',
                navigate: 'NotificationsSettings',
                icontype: 'font-awesome-5'
            },
            {
                id: 'Über uns',
                icon: 'info',
                color: 'black',
                label: 'Über uns',
                type: 'link',
                navigate: 'Test',
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
                type: 'link',
                navigate: 'ProfileSettings',
                icontype: 'font-awesome-5'
            },
            {
                id: 'Privatsphäre',
                icon: 'lock',
                color: 'black',
                label: 'Privatsphäre',
                type: 'link',
                navigate: 'PrivacySettings',
                icontype: 'font-awesome'
            },
        ]
    },
]