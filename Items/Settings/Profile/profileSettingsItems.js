export default [
    {
        header: 'Profil',
        items: [
            {
                id: 'Name, E-Mail',
                icon: 'user',
                color: 'black',
                label: 'Name, E-Mail, Handynummer',
                type: 'link',
                navigate: 'ProfileSettingsName',
                icontype: 'font-awesome-5'
            },
            {
                id: 'Passwort und Sicherheit',
                icon: 'lock-outline',
                color: 'black',
                label: 'Passwort & Sicherheit',
                type: 'link',
                navigate: 'ProfileSettingsSecurity',
            },
        ]
    },
    {
        header: 'Datenschutz',
        items: [
            {
                id: 'E-Mail Benarichtigungen',
                icon: 'mail-outline',
                type: 'ionicon',
                color: 'black',
                label: 'E-Mail Benarichtigungen',
                type: 'toggle',
                navigate: 'ProfileSettingsName',
                subText: 'Ich bin damit einverstanden, dass Joker Nightlife mir werbliche Nachrichten in E-Mail form zu schicken darf.\nIch kann diese Einwilligung jederzeit wiederrufen.'
            },
        ]
    },
    
]