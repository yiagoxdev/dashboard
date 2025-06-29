window.onload = function(){
    
    let 
    buttonSearch = document.querySelector('.header__searchBox button'),
    searchField = document.querySelector('.header__searchBox input[type=search]'),
    searchForm = document.getElementById('searchForm'),
    searchBox = document.querySelector('.header__searchBox'),
    userImg = document.querySelector('.header__userImg'),
    notificationBtn = document.querySelector('.notification-btn'),
    mainAside = document.querySelector('.main__aside'),
    asideRight = document.querySelector('.aside-right'),
    asideBtn = document.querySelector('.main__aside-btn'),
    asideRightBtn = document.querySelector('.news-button'),
    mainContent = document.querySelector('.main__content'),
    windowWidth;

    buttonSearch.addEventListener('click', openSearch)
    searchField.addEventListener('blur', closeSearch)

    window.addEventListener('resize', function() { //Rastreia o tamanho da Janela ao redimensionar
        windowWidth = window.innerWidth;
        if(windowWidth > 1170){
            searchBox.classList.add('openSearch');
            searchBox.classList.remove('closeSearch');
            setTimeout(function(){
                searchField.style.display = 'inline-block';
            },60)
        }else{
            searchField.style.display = 'none';
            setTimeout(function(){
                searchBox.classList.remove('openSearch');
                searchBox.classList.add('closeSearch');
            },60)
        }
        if (windowWidth > 920){
            userImg.style.display = 'inline-block';
            notificationBtn.style.display = 'inline-block'
        }
        if (windowWidth < 500) {
            notificationBtn.classList.add('search-mobile')
        }
    })

    window.dispatchEvent(new Event('resize')); //Dispara o evento ao carregar a página para determinar o tamanho da tela
    
    /* SISTEMA ABRIR/FECHAR PARA O CAMPO DE PESQUISA */

    function openSearch(){

        if(windowWidth <= 1170){
            if(!searchBox.classList.contains('openSearch')){
                searchBox.classList.add('openSearch');
                searchBox.classList.remove('closeSearch');
                setTimeout(function(){ searchField.style.display = 'inline-block'; },60)
                
                if(windowWidth < 960){
                    userImg.style.display = 'none';
                    notificationBtn.style.display = 'none'
                }
            }
        }else{
            searchField.focus()
            if(searchField.value !== ''){
                searchForm.submit();
            }else{
                console.log("digite algo!")
            }
        }

    }

    function closeSearch(){
        if(windowWidth <= 1170){
            searchField.style.display = 'none';
                setTimeout(function(){
                    searchBox.classList.remove('openSearch');
                    searchBox.classList.add('closeSearch');  
                },60)
                
                setTimeout(function(){
                    userImg.style.display = 'inline-block';
                    notificationBtn.style.display = 'inline-block';
                },400)
        }
    }

    // SISTEMA ABRIR/FECHAR MENU PRINCIPAL PAINEL ESQUERDO

    asideBtn.addEventListener('click', openMainAside);
    asideRightBtn.addEventListener('click', openAsideRight);

    function openMainAside(){
        if(!mainAside.classList.contains('open-main__aside')){
            mainContent.style.position = 'fixed';
            mainAside.classList.add('open-main__aside');
            mainContent.classList.add('main-to-right');
        }else{
            mainAside.classList.remove('open-main__aside');
            mainContent.classList.remove('main-to-right');
            setTimeout(function(){
                mainContent.removeAttribute('style');
            },1000)
        }
    }

    /* SISTEMA ABRIR/FECHAR PARA O PAINEL DIREITO (ATUALIZAÇÕES) */

    function openAsideRight(){
        if(windowWidth > 768) {
            if(!mainAside.classList.contains('open-asideRight')){
                mainAside.classList.add('transition300ms');
                mainAside.classList.add('open-asideRight');
                mainContent.classList.add('transition300ms');
                mainContent.classList.add('open-asideRight');
                setTimeout(function(){
                    asideRight.classList.add('open-asideRight');
                    mainContent.classList.add('open-asideRight2');
                },1000)
            }else{
                mainContent.classList.remove('open-asideRight2');
                asideRight.classList.remove('open-asideRight');
                setTimeout(function(){
                    mainAside.classList.remove('open-asideRight');
                    mainContent.classList.remove('open-asideRight');
                        setTimeout(function(){
                            mainAside.classList.remove('transition300ms');
                            mainContent.classList.remove('transition300ms');
                        },1000)
                },1000)
            }
        }else{
            if(!asideRight.classList.contains('open-asideRight')){
                mainContent.classList.add('transition300ms');
                setTimeout(function(){
                    mainContent.classList.add('open-asideRight2');
                    asideRight.classList.add('open-asideRight');

                },10)
            }else{
                mainContent.classList.remove('open-asideRight2');
                asideRight.classList.remove('open-asideRight');
                setTimeout(function(){
                    mainContent.classList.remove('transition300ms');
                },1000)
            }
        }
    }

}