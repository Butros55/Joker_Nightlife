export default [
    {
        header: 'Registrieren',
        subheader: 'Erstelle dein eigenes Konto',
        top: '35%',
        headertype: 'default',
        buttons: [
            {
                id: 'email',
                icon: 'mail-outline',
                placeholder: 'E-Mail',
                type: ''

            },
            {
                id: 'password',
                icon: 'lock-outline',
                placeholder: 'Passwort',
                type: 'secure'
            },
            {
                id: 'passwordrepeat',
                icon: 'lock-outline',
                placeholder: 'Passwort wiederholen',
                type: 'secure'

            },
        ]
    },
    {
        header: 'Es wurde ihnen eine verifizierungs E-Mail geschickt',
        subheader: '',
        top: '35%',
        headertype: 'icon',
        buttons: []
    },
    {
        header: '',
        subheader: '',
        top: '35%',
        headertype: 'image',
        buttons: [
            {
                id: 'vorname',
                icon: 'person-outline',
                placeholder: 'Vorname',
                type: ''

            },
            {
                id: 'zweitername',
                icon: 'person-outline',
                placeholder: 'Zweiter Name',
                type: ''
            },
            {
                id: 'nachname',
                icon: 'person-outline',
                placeholder: 'Nachname',
                type: ''

            },
        ]
    },
]