const brandContent = {
        "zixum": {
            pageTitle: "زیکسوم",
            brandTitle: "زیکسوم",
            filename: "zixum",
            brandDescription: "جایی که سایه‌ها نجوا می‌کنند و رازها بیدار می‌شوند. به دنیای مرموز ما بپیوندید و با ناشناخته‌ها روبرو شوید.",
            socialLinks: [
                {
                    name: "تلگرام",
                    url: "https://t.me/zixum_channel",
                    iconClass: "fab fa-telegram-plane",
                    backgroundColorClass: "bg-blue-500"
                },
                {
                    name: "یوتیوب",
                    url: "https://www.youtube.com/@zixum_channel",
                    iconClass: "fab fa-youtube",
                    backgroundColorClass: "bg-red-700"
                },
                {
                    name: "اینستاگرام",
                    url: "https://www.instagram.com/zixum_channel",
                    iconClass: "fab fa-instagram",
                    gradientClasses: "from-instagram-start via-instagram-mid to-instagram-end"
                }
            ],
            seo: {
                title: "زیکسوم - کاوش در جهان‌های مرموز و ناشناخته",
                description: "به زیکسوم بپیوندید و به دنیای سایه‌ها و اسرار وارد شوید. پلتفرمی برای اکتشافات فراطبیعی و محتوای مرموز.",
                keywords: "زیکسوم, جهان مرموز, ناشناخته, فراطبیعی, اسرار, سایه‌ها, داستان‌های ترسناک",
                ogTitle: "زیکسوم | جایی که رازها بیدار می‌شوند",
                ogDescription: "دنیای زیکسوم: پلتفرمی برای کشف اسرار، محتوای فراطبیعی و تجربیات منحصر به فرد.",
                ogImage: "https://placehold.co/1200x630/2c2c2c/ffffff?text=Zixum_Social"
            }
        },
        "anotherBrand": {
            pageTitle: "برند دیگر",
            filename: "bye",
            brandTitle: "نام برند دیگر",
            brandDescription: "این توضیحات برای یک برند دیگر است.",
            socialLinks: [
                {
                    name: "وب‌سایت",
                    url: "https://www.example.com",
                    iconClass: "fas fa-globe",
                    backgroundColorClass: "bg-gray-700"
                }
            ],
            seo: {
                title: "برند دیگر - عنوان سئو",
                description: "توضیحات کوتاه و مفید برای سئو این برند دیگر.",
                keywords: "برند, کلمه کلیدی, دیگر",
                ogTitle: "عنوان Open Graph برند دیگر",
                ogDescription: "توضیحات Open Graph برند دیگر",
                ogImage: "https://placehold.co/1200x630/2a2a2a/e0e0e0?text=AnotherBrand_Social"
            }
        }
    };

export function getBrandData(brandName) {
    return brandContent[brandName] || null;
}

export function getAllBrandKeys() {
    return Object.keys(brandContent);
}
