export default [
    {
        header: '',
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
                id: 'Neue E-Mail Adresse',
                icon: '',
                color: 'black',
                label: 'Neue E-Mail',
                type: 'input',
                subText: 'Bitte geben sie hier ihre neue E-Mail Adresse an.'
            },
            {
                id: 'E-Mail Adresse wiederholen',
                icon: '',
                color: 'black',
                label: 'E-Mail wiederholen',
                type: 'input',
                subText: 'Bitte wiederholen Sie ihr neue E-Mail Adresse.'
            },
        ]
    },
]