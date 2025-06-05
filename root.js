const brandContent = {
        "zixum": {
            brandTitle: "زیکسوم",
            type: "page",
            filename: "zixum",
            brandDescription: "به زیکسوم بپیوندید و به دنیای اسرار پنهان جهان وارد شوید. جایی برای اکتشافات فراطبیعی و محتوای مرموز.",
            socialLinks: [
                {
                    name: "تلگرام",
                    url: "https://t.me/zixum_channel",
                    backgroundColorClass: "bg-blue-500"
                },
                {
                    name: "یوتیوب",
                    url: "https://www.youtube.com/@zixum_channel",
                    backgroundColorClass: "bg-red-700"
                },
                {
                    name: "اینستاگرام",
                    url: "https://www.instagram.com/zixum_channel",
                    gradientClasses: "from-instagram-start via-instagram-mid to-instagram-end"
                }
            ]
        }
    };

export function getBrandData(brandName) {
    return brandContent[brandName] || null;
}

export function getAllBrandKeys() {
    return Object.keys(brandContent);
}
