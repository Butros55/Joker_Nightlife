const theme = {
    light: {
        isOn: false,
        theme: 'light',
        text: 'black',
        background: 'white',
        button: '#f2f2f2',
        overlay: 'white',
        focused: 'rgba(20,20,20,0.1)',
        notFocused: 'white',
        layout: 'white',
        placeholder: 'rgba(0,0,0,0.3)',
        submitButton: 'rgba(190,190,190,1)'
    },
    dark: {
        isOn: true,
        theme: 'dark',
        text: 'white',
        background: 'rgb(10,10,10)',
        button: 'rgb(20,20,20)',
        overlay: 'rgb(20,20,20)',
        focused: 'rgba(20,20,20,1)',
        notFocused: 'rgba(10,10,10,0.1)',
        layout: 'rgb(10,10,10)',
        placeholder: 'rgba(255,255,255,0.5)',
        submitButton: 'rgba(30,30,30,1)'
    }
}

export default theme