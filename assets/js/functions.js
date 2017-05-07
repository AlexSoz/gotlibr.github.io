//Скролл меню

window.onscroll = function() {
    // Функция прилипания меню при скролле на расстояние больше чем высота хэдера
    var menuHeight = document.getElementById('upper-header').offsetHeight;
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    var buttons = document.getElementsByClassName("nav-button");
    var buttons2 = document.getElementsByClassName('nav-button-second');
    var hrefSecond = document.getElementsByClassName('href-second');
    var i;

    if (scrolled >= menuHeight) {
        if (document.body.clientWidth >= 992) { //Проверка не является ли дисплей sm или xs
            document.getElementById('navigation').className = 'navigation-fixed col-lg-12 col-md-12 col-sm-12 col-xs-12';
            document.getElementById('mini-wrapper').style.display="block";
            document.getElementById('mini-logo').className = 'mini-logo';


            
            document.getElementById('first').style.marginLeft = '51px';

            buttons[0].style.width = (document.getElementById('navigation').offsetWidth - 161) / 12 * 2 + "px";
            buttons[1].style.width = (document.getElementById('navigation').offsetWidth - 161) / 12 * 3 + "px";
            buttons[2].style.width = (document.getElementById('navigation').offsetWidth - 161) / 12 * 3 + "px";
            buttons[3].style.width = (document.getElementById('navigation').offsetWidth - 161) / 12 * 3 + "px";
            buttons[4].style.width = (document.getElementById('navigation').offsetWidth - 161) / 12 + "px";
            for (var i = 0; i <= buttons.length; i++) {
                buttons[i].style.textAlign = "center";
                buttons2[i].style.left = "10%";
                buttons2[i].style.paddingLeft = "8%";
            }
        } else { //В случае если дисплей маленький
            document.getElementById('navigation').className = 'navigation-fixed col-lg-12 col-md-12 col-sm-12 col-xs-12';
            
            for (var i = 0; i < buttons.length; i++) {

                buttons[i].style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";


            }
            for (var i = 0; i < buttons2.length; i++) {

                buttons2[i].style.backgroundColor = "#ffffff";

            }
            for (var i = 0; i < hrefSecond.length; i++) {
                hrefSecond[i].style.color = "rgba(0, 0, 0, 0.702)";
                hrefSecond[i].parentNode.style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
            }
buttons[4].style.borderBottom = "2px solid rgba(0, 0, 0, 0.3)";
                buttons[7].style.borderBottom = "none";
            if (document.getElementById("mini-wrapper").style.borderBottom == "2px solid rgba(255, 255, 255, 0.3)") {
                document.getElementById("mini-wrapper").style.borderBottom = "2px solid rgba(0, 0, 0, 0.3)";
                
                document.getElementById("navigation").style.borderBottom = "2px solid rgba(0, 0, 0, 0.3)";
            }

        }
    } else {
        if (document.body.clientWidth >= 992) { //Возврат стилей если высота скрола меньше высоты хедера
            document.getElementById('navigation').className = 'navigation col-lg-12 col-md-12 col-sm-12 col-xs-12';
            document.getElementById('mini-logo').className = 'mini-logo-hidden';



            document.getElementById('first').style.marginLeft = '0px';

            buttons[0].style.width = (document.getElementById('navigation').offsetWidth - 110) / 12 * 2 + "px";
            buttons[1].style.width = (document.getElementById('navigation').offsetWidth - 110) / 12 * 3 + "px";
            buttons[2].style.width = (document.getElementById('navigation').offsetWidth - 110) / 12 * 3 + "px";
            buttons[3].style.width = (document.getElementById('navigation').offsetWidth - 110) / 12 * 3 + "px";
            buttons[4].style.width = (document.getElementById('navigation').offsetWidth - 110) / 12 + "px";

            for (var i = 0; i <= buttons.length; i++) {
                buttons[i].style.textAlign = "left";
                buttons2[i].style.left = "-6%";
                buttons2[i].style.paddingLeft = "6%";
            }
        } else {
            document.getElementById('navigation').className = 'navigation col-lg-12 col-md-12 col-sm-12 col-xs-12';
            
            for (var i = 0; i < buttons.length; i++) {

                buttons[i].style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)";

            }
            for (var i = 0; i < buttons2.length; i++) {

                buttons2[i].style.backgroundColor = "rgb(0, 53, 128)";

            }
            for (var i = 0; i < hrefSecond.length; i++) {
                hrefSecond[i].style.color = "rgba(255, 255, 255, 0.702)";
                hrefSecond[i].parentNode.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)";
            }
                buttons[4].style.borderBottom = "2px solid rgba(255, 255, 255, 0.3)";
                buttons[7].style.borderBottom = "none";
                if (document.getElementById("mini-wrapper").style.borderBottom == "2px solid rgba(0, 0, 0, 0.3)") {
                document.getElementById("mini-wrapper").style.borderBottom = "2px solid rgba(255, 255, 255, 0.3)";
                
                document.getElementById("navigation").style.borderBottom = "2px solid rgba(255, 255, 255, 0.3)";
            }
        }
    }

}

function openMenu() {
    var menuHeight = document.getElementById('upper-header').offsetHeight;
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (document.body.clientWidth < 992) {
        var a = document.getElementsByClassName('nav-button');

        var status = "none";
        var c = document.getElementsByClassName("nav-button-second");
        var d = document.getElementsByClassName("arrow-right");
        var e = document.getElementsByClassName("arrow-left");
        for (var i = a.length - 1; i >= 0; i--) {
            if (a[i].style.display == "block") {
                status = "block"
            }
        }
        if (status == "none") {
            for (var i = a.length - 1; i >= 0; i--) {
                a[i].style.display = "block";

            }
            for (var i = c.length - 1; i >= 0; i--) {

                c[i].style.display = "none";
            }
            for (var i = d.length - 1; i >= 0; i--) {
                d[i].style.display = "block";

            }
            if (scrolled <= menuHeight) //Проверка какого цвета делать границу 
            {
                document.getElementById("mini-wrapper").style.borderBottom = "2px solid rgba(255, 255, 255, 0.3)";
                a[4].style.borderBottom = "2px solid rgba(255, 255, 255, 0.3)";
                a[7].style.borderBottom = "none";
                document.getElementById("navigation").style.borderBottom = "2px solid rgba(255, 255, 255, 0.3)";
            } else {
                document.getElementById("mini-wrapper").style.borderBottom = "2px solid rgba(0, 0, 0, 0.3)";
                a[4].style.borderBottom = "2px solid rgba(0, 0, 0, 0.3)";

                a[7].style.borderBottom = "none";
                document.getElementById("navigation").style.borderBottom = "2px solid rgba(0, 0, 0, 0.3)";
            }
        } else {
            document.getElementById("mini-wrapper").style.borderBottom = "none";
            for (var i = a.length - 1; i >= 0; i--) {
                a[i].style.display = "none";
                a[i].style.textAlign = "left";
            }

        }
        for (var i = e.length - 1; i >= 0; i--) {
            e[i].style.display = "none";

        }

    }
}

function openSecondMenu(element) {
    if (document.body.clientWidth < 992) {
        var a = document.getElementsByClassName("nav-button-second");
        var b = document.getElementsByClassName('nav-button');
        var c = document.getElementsByClassName("arrow-right");
        var d = document.getElementsByClassName("arrow-left");
        if (a[element].style.display != "block") {

            for (var i = b.length - 1; i >= 0; i--) {
                b[i].style.display = "none";
            }
            b[element].style.display = "block";
            b[element].style.borderBottom = "0";
            a[element].style.display = "block";
            c[element].style.display = "none";
            d[element].style.display = "block";
            b[element].style.textAlign = "center";
        } else {
            for (var i = b.length - 1; i >= 0; i--) {
                b[i].style.display = "block";

            }
            d[element].style.display = "none";
            c[element].style.display = "block";
            b[element].style.borderBottom = b[(element + 1) % 5].style.borderBottom;
            b[element].style.textAlign = "left";
            a[element].style.display = "none";
        }
    }
}
        