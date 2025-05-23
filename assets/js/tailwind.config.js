tailwind.config = {
    theme: {
        extend: {
            screens: {
                '3xl': '1440px',
                '2xl': '1280px',
                xl: '1024px',
                lg: '992px',
                md: '768px',
                sm: '525px',
                DEFAULT: '1360px',
            },
            container: {
                center: true,
                maxWidth: '1920px',
                padding: {
                    DEFAULT: '16px',
                    '3xl': '120px',
                    '2xl': '40px',
                    xl: '40px',
                    lg: '16px',
                    md: '16px',
                    sm: '16px',
                },
            },
        },
        colors: {
            white: '#FFF',
            black: '#000',
            "primary-text": '#4F4F4F',
            "fill": '#F4EDE5',
            "body-color": '#FCFAF7',
            primary: {
                DEFAULT: "#715137",
                // 600: '#2955D9',
                // 500: '#4169E1',
                // 400: '#587AE1',
                // 300: '#6E8BE1',
                // 200: '#9BACE0',
                // 100: '#CCD4ED',
                50: '#fcfaf7',
                // 25: '#EFEFEF',
            },
            secondary: '#C1AB91',
            neutralc: {
                // 1000: "#",
                950: "#0D0D0D",
                900: "#1A1A1A",
                800: "#333333",
                700: "#4D4D4D",
                600: "#666666",
                500: "#222222",
                400: "#999999",
                300: "#B3B3B3",
                200: "#CCCCCC",
                100: "#E6E6E6",
                50: "#F2F2F2",
            },
            gray: {
                10: "#112722",
                9: "#1F2237",
                8: "#373A51",
                7: "#4B4E63",
                6: "#6B7280",
            },
        }
    }
}