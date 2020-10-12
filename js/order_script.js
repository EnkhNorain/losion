/*
Код ниже прикрепляет ко всем формам на странице (<form>) скрытый <input type="hidden">

Для корректной работы скрипта необходимо, чтобы на первом вложенном уровне после тега <form> находились
1) Поле для ввода имени вида: <input class="form__input" required="" type="text" name="name" placeholder="Введите Ваше Имя">
2) Поле для ввода телефона вида: <input class="form__input input-tel" autocomplete="off" required="" type="tel" name="phone"
           placeholder="Введите Ваш нoмер телефoна">
3) Кнопка отправки вида: <button class="link-button" type="submit">Заказать сейчас</button>

Пример формы:

<form action="order.php" method="post">
    <input class="form__input" required="" type="text" name="name" placeholder="Введите Ваше Имя">
    <input class="form__input input-tel" autocomplete="off" required="" type="tel" name="phone"
           placeholder="Введите Ваш нoмер телефoна">
    <button class="link-button" type="submit">Заказать сейчас</button>
</form>
*/
const getParam = (key) => {
    let p = window.location.search;
    p = p.match(new RegExp(`${key}=([^&=]+)`));
    return p ? p[1] : null;
}
let forms = document.querySelectorAll('form');

if (typeof forms !== 'undefined' && forms.length !== 0) {
    forms.forEach(function (v) {
        let hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'fl';
        hiddenInput.value = getParam('fl');
        v.append(hiddenInput);
    })
}

/*
Код ниже устанавливает facebook pixel для сайта
 */
let fbp = getParam('fbp');

if (fbp === null) {
    fbp = sessionStorage.getItem('fbp');
}

if (fbp !== null) {
    sessionStorage.setItem('fbp', fbp);
    console.log(fbp);
    !function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', fbp);
    fbq('track', 'PageView');
}
