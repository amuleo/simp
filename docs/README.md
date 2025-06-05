# راهنمای پلتفرم [simp.ir](https://simp.ir)
- جایی برای مرتب کردن لینک ها
- دیگه نیازی نیست دامین های متعدد بخرم
- لینک های کوتاه و شیک
---

## روند کلی کار
برای هر صفحه اجتماعی یا لینک کوتاهی که میخوای به پلتفرم اضافه بشه مراحل زیر رو طی کن

### قدم اول: اطلاعات مربوط به لینک رو در فایل **root.js** اضافه کن
فایل **root.js** ریشه یا روت اصلی این پلتفرمه و برای افزودن اطلاعات لینک از قالب زیر استفاده کن:
```txt
"zixum": {
            brandTitle: "زیکسوم",
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
```
<حواست باشه که بعدا ازکروشه (**}**) یکی مونده به آخر در رشته **brandContent** از **,** استفاده کنی>

```html
<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>زیکسوم - کاوش در جهان‌های مرموز و ناشناخته</title>
    <meta name="description" content="به زیکسوم بپیوندید و به دنیای اسرار پنهان جهان وارد شوید. جایی برای اکتشافات فراطبیعی و محتوای مرموز.">
    <meta name="keywords" content="زیکسوم, جهان مرموز, ناشناخته, فراطبیعی, اسرار, سایه‌ها, داستان‌های ترسناک, تئوری, دانستنی, عجیب و غریب, پیج, اینستاگرام">
    <meta property="og:title" content="زیکسوم">
    <meta property="og:description" content="زیکسوم: جایی برای کشف اسرار، محتوای فراطبیعی و تئوری های منحصر به فرد.">
    <meta property="og:image" content="https://placehold.co/1200x630/2c2c2c/ffffff?text=zixum">
    <meta property="og:type" content="website">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="./script.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" xintegrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./style.css">
</head>
<body dir="rtl" class="min-h-screen flex items-center justify-center p-4 bg-[var(--color-background)] text-[var(--color-text)]">

    <div class="max-w-lg w-full rounded-2xl p-8 space-y-4 transition-all duration-300 bg-card-background border border-[var(--color-border-accent)]">
        <div class="text-center">
            <h1 id="brand-title" class="text-3xl sm:text-5xl font-extrabold mb-0 tracking-tight text-brand">
            </h1>
        </div>

        <div class="text-center">
            <p id="brand-description" class="text-sm sm:text-lg leading-relaxed mt-2 text-justify"></p>
        </div>

        <div id="social-links-container" class="flex flex-col justify-center items-center gap-3 mt-8"></div>
    </div>

    <script type="module">
        import { getBrandData } from './root.js';

        const currentBrandName = "zixum";

        const appContent = getBrandData(currentBrandName);
        
        if (appContent) {
            const brandTitleElement = document.getElementById('brand-title');
            const brandDescriptionElement = document.getElementById('brand-description');
            const socialLinksContainer = document.getElementById('social-links-container');
            
            if (brandTitleElement) {
                brandTitleElement.textContent = appContent.brandTitle;
            }
            if (brandDescriptionElement) {
                brandDescriptionElement.textContent = appContent.brandDescription;
            }

            if (socialLinksContainer) {
                appContent.socialLinks.forEach(link => {
                    const anchor = document.createElement('a');
                    anchor.href = link.url;
                    anchor.target = "_blank";
                    anchor.rel = "noopener noreferrer";

                    let backgroundClasses = "";
                    if (link.gradientClasses) {
                        backgroundClasses = `bg-gradient-to-r ${link.gradientClasses}`;
                    } else if (link.backgroundColorClass) {
                        backgroundClasses = link.backgroundColorClass;
                    }

                    anchor.className = `flex items-center justify-center text-white font-semibold py-3 px-6 rounded-xl transform hover:scale-105 w-full transition-all duration-200 ${backgroundClasses}`;
                    
                    const span = document.createElement('span');
                    span.textContent = link.name;
                    anchor.appendChild(span);
                    
                    socialLinksContainer.appendChild(anchor);
                });
            }
        } else {
            console.error(`Brand data for "${currentBrandName}" not found.`);
            document.getElementById('brand-title').textContent = "زیکسوم";
            document.getElementById('brand-description').textContent = "اطلاعات فایل بارگذاری نشد.";
        }
    </script>
</body>
</html>
  ```
