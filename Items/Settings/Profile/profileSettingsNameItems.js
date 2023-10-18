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
            },
            {
                id: 'Zweiter Name',
                icon: '',
                color: 'black',
                label: 'Zweiter Name',
                type: 'input',
                placeholder: 'optional'
            },
            {
                id: 'Nachname',
                icon: '',
                color: 'black',
                label: 'Nachname',
                type: 'input',
                placeholder: 'optional'
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
                color: 'black',
                label: 'E-Mail',
                type: 'input',
                inputType: 'email'         
            },
            {
                id: 'Handynummer',
                icon: '',
                color: 'black',
                label: 'Handynummer',
                type: 'input',
                placeholder: 'optional'
            },
        ]
    }
]