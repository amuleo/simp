    export function getBrandData(brandName) {
    const brandContent = {
        "zixum": {
            pageTitle: "زیکسوم",
            brandTitle: "زیکسوم",
            brandDescription: "جایی که سایه‌ها نجوا می‌کنند و رازها بیدار می‌شوند. به دنیای مرموز ما بپیوندید و با ناشناخته‌ها روبرو شوید.",
            socialLinks: [
                {
                    name: "تلگرام",
                    url: "https://t.me/zixum_channel",
                    iconClass: "fab fa-telegram-plane", // Font Awesome icon class
                    backgroundColorClass: "bg-blue-500"
                },
                {
                    name: "یوتیوب",
                    url: "https://www.youtube.com/@zixum_channel",
                    iconClass: "fab fa-youtube", // Font Awesome icon class
                    backgroundColorClass: "bg-red-700"
                },
                {
                    name: "اینستاگرام",
                    url: "https://www.instagram.com/zixum_channel",
                    iconClass: "fab fa-instagram", // Font Awesome icon class
                    gradientClasses: "from-instagram-start via-instagram-mid to-instagram-end"
                }
            ]
        },
        "anotherBrand": {
            pageTitle: "برند دیگر",
            brandTitle: "نام برند دیگر",
            brandDescription: "این توضیحات برای یک برند دیگر است.",
            socialLinks: [
                {
                    name: "وب‌سایت",
                    url: "https://www.example.com",
                    iconClass: "fas fa-globe",
                    backgroundColorClass: "bg-gray-700"
                }
            ]
        }
    };

    return brandContent[brandName] || null;
}
