window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

    });
    function gnb(){
        $(".gnb").hide();
        $(".all-menu a").on("click",function(){
            $(".header .gnb").show();
        })
        $(".gnb .close").on("click",function(){
            $(".header .gnb").hide();
        })
    }
    gnb()
    // gnb 메뉴인터랙션
    function gnbInterac(){
        $('.all-menu').on('mouseover', function () {
            $(this).addClass('on').removeClass('off');
        })
    }
    gnbInterac()
    
    function selectUi(){
        const label = document.querySelectorAll('.label');
        label.forEach(function(lb){
            lb.addEventListener('click', e => {
                let optionList = lb.nextElementSibling;
                let optionItems = optionList.querySelectorAll('.item');
                clickLabel(lb, optionItems);
            })
        });
        const clickLabel = (lb, optionItems) => {
            if(lb.parentNode.classList.contains('active')) {
                lb.parentNode.classList.remove('active');
                optionItems.forEach((opt) => {
                    opt.removeEventListener('click', () => {
                        handleSelect(lb, opt)
                    })
                })
            } else {
                lb.parentNode.classList.add('active');
                optionItems.forEach((opt) => {
                    opt.addEventListener('click', () => {
                        handleSelect(lb, opt)
                    })
                })
            }
        }
        const handleSelect = (label, item) => {
            label.innerHTML = item.textContent;
            label.parentNode.classList.remove('active');
        }
    }
    selectUi()





})


