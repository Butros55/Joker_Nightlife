export default [
    {
        header: 'Name',
        icon: 'Settings',
        items: [
            {
                id: 'Vorname',
                icon: '',
                color: 'black',
                label: 'Vorname',
                type: 'input',
                inputValue: 'vorname'
            },
            {
                id: 'Zweiter Name',
                icon: '',
                color: 'black',
                label: 'Zweiter Name',
                type: 'input',
                placeholder: 'optional',
                inputValue: 'zweitername'
            },
            {
                id: 'Nachname',
                icon: '',
                color: 'black',
                label: 'Nachname',
                type: 'input',
                placeholder: 'optional',
                inputValue: 'nachname'
            },
        ]
    },
    {
        header: 'E-Mail, Telefon',
        icon: 'Settings',
        items: [
            {
                id: 'E-Mail',
                icon: '',
                label: 'E-Mail',
                navigate: 'ProfileSettingsEmail',
                type: 'input',
                inputValue: 'email',
            },
            {
                id: 'E-Mail-ändern',
                icon: '',
                label: 'E-Mail Adresse ändern',
                navigate: 'ProfileSettingsEmail',
                type: 'link',
                inputValue: 'email',
            },
            {
                id: 'Handynummer',
                icon: '',
                color: 'black',
                label: 'Handynummer',
                type: 'input',
                placeholder: 'optional',
                inputValue: 'phonenumber'
            },
        ]
    }
]