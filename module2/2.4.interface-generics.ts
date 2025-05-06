{
    // interface -> generics

    interface Developer<T, B= null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        };
        smartwatch: T,
        bike?: B
    }


    interface UnSmart {
        model:string;
        company: string
    }
    const poorDeveloper:Developer<UnSmart> = {
        name: "junayed",
        computer: {
            brand: "AMD",
            model: "Ryzen 5 5600g",
            releaseYear: 2018
        },
        smartwatch : {
            model: "HIKi",
            company: 'chaina'
        }
    }

    interface Smart {
        model:string;
        company: string;
        series: number;
        brand: string
    }

    interface Yamaha {
        model: string;
        version: number
    }
    const richDeveloper:Developer<Smart, Yamaha> = {
        name: "Sifat",
        computer: {
            brand: "Mac",
            model: "Mini",
            releaseYear: 2025
        },
        smartwatch : {
            model: 'apple',
            company: 'apple',
            series: 9,
            brand: 'i'
        },
        bike : {
            model: "yamaha",
            version: 3
        }
    }
}