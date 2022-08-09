(() => {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');

    const tabBtn = document.querySelectorAll('.cont-tab .tab');
    const tabView = document.querySelectorAll('.container.tab');
    const container = document.querySelectorAll('.container');
    const contSection = document.querySelector('.cont-section');
    const parentContent = contSection.parentElement;
    
    function tabMenu() {
        for (let i = 0; i < tabBtn.length; i++) {
            contSection.style.height = `${tabView[0].scrollHeight}` + "px";
            // if (window.innerWidth <= 768) {
            //     contSection.style.height = `${tabView[0].scrollHeight}` + "px";
            // }
            tabBtn[i].addEventListener('click', (e) => {
                e.preventDefault();
                for (let j = 0; j < tabBtn.length; j++) {
                    e.preventDefault();
                    tabBtn[j].classList.remove('active');
                    tabView[j].classList.remove('active');
                }
                tabBtn[i].classList.add('active');
                tabView[i].classList.add('active');
                // if (tabView[i].classList.contains('active') && window.innerWidth <= 768) {
                //     contSection.style.height = `${tabView[i].scrollHeight}` + "px";
                // } else {
                //     contSection.style.height = `${tabView[i].scrollHeight}` + "px";
                // }
                contSection.style.height = `${tabView[i].scrollHeight}` + "px";
            });
        }
    }

    function containerHeight() {
        container.forEach(i => {
            if (window.innerWidth <= 768) {
                i.style.height = (i.scrollHeight + (header.clientHeight * 3)) + "px";
            }  
        });
    }

    const contView = document.querySelectorAll('.viewBox');
    const viewWrapper = document.querySelector('.content-wrapper.view');
    const viewBtn = document.querySelectorAll('.content .more > a');
    const backBtn = document.querySelectorAll('.backBtn > a');
    function openView() {
        for (let i = 0; i < contView.length; i++) {
            viewBtn[i].addEventListener('click', (e) => {
                e.preventDefault();
                console.log(viewBtn[i]);
                viewWrapper.classList.add('active');
                contView[i].classList.add('active');
                if (contView[i].classList.contains('active') && window.innerWidth <= 768) {
                    contView[i].style.height = (window.innerHeight + (header.clientHeight * 2)) + "px";
                }
            });
            backBtn[i].addEventListener('click', (e) => {
                e.preventDefault();
                viewWrapper.classList.remove('active');
                contView[i].classList.remove('active');
                if (window.innerWidth <= 786) {
                    contView[i].style.height = 0 + "px";
                }
                if (parentContent.classList.contains('active') === false) {
                    tabBtn[0].classList.add('active');
                    tabBtn[1].classList.remove('active');
                    tabBtn[2].classList.remove('active');
                }
            });
        }
    }

    const contentWrap = document.querySelector('.content');
    const navItem = document.querySelectorAll('.nav > ul > li');
    const contWidth = document.querySelector('.content > div');
    const allContWidth = document.querySelectorAll('.content > div');
    const lastCont = document.querySelector('.last-con');
    let offsetLeft = 0;
    let wheelCount = 0;
    let totalContWidth = 0;
    totalContWidth = contWidth.clientWidth;
    console.log(totalContWidth);
    function navAni() {
        contentWrap.addEventListener('mousewheel', (e) => {
            console.log(wheelCount,e.wheelDelta);
            if (e.wheelDelta < 0) {
                if (wheelCount == 8) return;
                wheelCount++;
                navItem[wheelCount].classList.add('active');
                navItem[wheelCount - 1].classList.remove('active');
                if (wheelCount <= 8 && wheelCount >= 2) {
                    offsetLeft += totalContWidth;
                    contentWrap.style.left = (-`${offsetLeft}`) + "px";
                    console.log('이동')
                }
                if(wheelCount <= 1) {
                    offsetLeft = lastCont.clientWidth;
                    contentWrap.style.left = (-`${offsetLeft}`) + "px";
                    if(window.innerWidth <= 1100) {
                        wheelCount = 2;
                    }
                }
            } 
            if (e.wheelDelta > 0) {
                console.log(wheelCount);
                if (wheelCount == 0) return;
                wheelCount--;
                navItem[wheelCount].classList.add('active');
                navItem[wheelCount + 1].classList.remove('active');
                offsetLeft -= totalContWidth;
                contentWrap.style.left = (-`${offsetLeft}`) + "px";
                console.log(offsetLeft)
                if (wheelCount <= 0) {
                    contentWrap.style.left = 0 + "px";
                    wheelCount = 0;
                }
                if (wheelCount <= 0 && window.innerWidth <= 1100) {
                    contentWrap.style.left = 0 + "px";
                    wheelCount = 0;
                }
            }
        });

        for (let i = 0; i < navItem.length; i++) {
            navItem[i].addEventListener('click', (e) => {
                console.log(i);
                if(i === 1) {
                    offsetLeft = (i * 4) * totalContWidth;
                    contentWrap.style.left = (-`${offsetLeft}`) + "px";
                }
                if(i !== 1 && i <= 1) {
                    offsetLeft = i * totalContWidth;
                    contentWrap.style.left = (-`${offsetLeft}`) + "px";
                    viewWrapper.classList.add('view');
                }
                wheelCount = i;
                offsetLeft = i * totalContWidth;
                contentWrap.style.left = (-`${offsetLeft}`) + "px";
                viewWrapper.classList.add('view');
                for (let j = 0; j < navItem.length; j++) {
                    navItem[j].classList.remove('active');
                    // contView[j].classList.remove('active');
                }
                navItem[i].classList.add('active');
                viewWrapper.classList.remove('active');
            });
        }
    }
    
    const lastCon = document.querySelector('.last-con');
    const Bgs = document.querySelectorAll('.content-bg > div');
    const contentItem = document.querySelectorAll('.cont-nav');
    function changeBg() {
        for (let i = 0; i < contentItem.length; i++) {
            contentItem[i].addEventListener('click', (e) => {
                for(let j = 0;  j < contentItem.length; j++) {
                        contentWrap.classList.remove('on');
                        contentItem[j].classList.remove('hover');
                        // Bgs[j].classList.remove('on');
                }
                    contentItem[i].classList.add('hover');
                    contentWrap.classList.add('on');
                    // Bgs[i].classList.add('on');
            });
        }
    }

    const scrollTxt = document.querySelector('.scroll_down > span');
    const test = document.querySelector('.content-wrapper');
    function responsiveCon() {
        for (let i = 0; i < contentItem.length; i++) {
            if (window.innerWidth <= 1100) {
                contentItem[i].style.width = (window.innerWidth / 2) + "px";
                totalContWidth = (window.innerWidth / 2);
            }
            if (window.innerWidth <= 768) {
                contentItem[i].style.width = (window.innerWidth) + 2 + "px";
                contentItem[i].classList.add('swiper-slide');
            }
        }
        if (window.innerWidth <= 768) {
            totalContWidth = (window.innerWidth);
            test.classList.add('swiper-container');
            test.style.height = (window.innerHeight - header.clientHeight) + "px";
            contentWrap.classList.add('swiper-wrapper');
            contentWrap.style.height = (window.innerHeight - header.clientHeight) + "px";
            scrollTxt.innerHTML = "SWIPE";
            lastCon.classList.add('swiper-slide')
        }
    }

    logo.addEventListener('click', () => {
        window.location.reload();
    });

    const cachedWidth = window.innerWidth;
    window.addEventListener('resize', () => {
        const newWidth = window.innerWidth;
        if (newWidth !== cachedWidth) {
            cachedWidth = newWidth
        }
        responsiveCon();
    });

    const item01 = document.querySelectorAll('.item01');
    const itemView = document.querySelector('.item-view');
    const closeBtn = document.querySelector('.close-btn');
    function itemOpen(target,wapper,close) {
        for (let i = 0; i < target.length; i++) {
            target[0].addEventListener('click',() => {
                target[1].classList.add('active');
                wapper.classList.add('active');
            });
            close.addEventListener('click', () => {
                wapper.classList.remove('active');
            });
        }
    }

    function filter(){
        const portFolioTab = $('.portfolio-tab > ul > li');
        const portfolioItem = $('.portfolio-item');
        
        portfolioItem.addClass('on');

        portFolioTab.click(function(e){
            e.preventDefault();
            $(this).addClass('active');
            portFolioTab.not($(this)).removeClass('active');
            data = $($(this).data('tab')).selector;
            portfolioItem.each(function(contentItem,item){
                let itemData = $(item).data('tab');
                $(item).removeClass('on');
                if(data === itemData) {
                    $(item).addClass('on');
                }
                if(data === "all") {
                    $(item).addClass('on');
                }
            });
        });
        containerHeight();
    }

    function contentWidth() {
        if (window.innerWidth >= 1100) {
            lastCon.style.width = (window.innerWidth - header.clientWidth) + "px";
            // lastDesc.style.width = (window.innerWidth) / 1.5 + "px";
        } else if (window.innerWidth >= 768) {
            lastCon.style.width = (window.innerWidth) + "px";
            lastDesc.style.width = (window.innerWidth) / 1.5 + "px";
        } else {
            lastDesc.style.width = introduce.innerWidth / 1.7 + "px";
        }
    }

    const introduce = document.querySelector('.introduce');
    const lastDesc = document.querySelector('.introduce > p');
    window.addEventListener('load', () => {
        setTimeout(() => {
            introduce.classList.add('load')
        },300);
        if (window.innerWidth >= 1100 || window.innerWidth >= 768) {
            navAni();
            changeBg();
        }
        contentWidth();
        containerHeight();
        filter();
        responsiveCon();
        openView();
        tabMenu();
        itemOpen(item01,itemView,closeBtn);
        const swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            // autoplay: {
            //     delay: 4000,
            //     disableOnInteraction: false,
            // },
            speed: 500,
            on: {
                init: function () {
                    let thisSlide = this;
                    if ($('.viewBox').hasClass('active')) {
                        thisSlide.autoplay.stop();
                    }
                }
            }
        });
        // swiper.on('slideChange', function () {
        //     let real = swiper.realcontentItem + 1;
        //     $('.content-bg').find('div').removeClass('on');
        //     $('.bg0' + (real)).addClass('on');
        // });
    });
})();