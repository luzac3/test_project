window.onload = function(){
    const button_list = document.getElementsByTagName("button");

    let len = button_list.length;

    for(let i = 0; i < len; i++){
        button_list[i].addEventListener("click",open_ul,false);
    }

    const li_list = document.getElementByTagName("li");

    len = li_list.length;

    for(let i = 0; i < len; i++){
        li_list[i].addEventListener("mouseover",om_event,false);
    }

    const click_to_open = document.getElementByClassName("click_to_open");

    len = click_to_open.length;
    for(let i = 0; i< len; i++){
        click_to_open[i].addEventListener("click",cl_event,false);
    }

    function open_ul(e){
        const obj = focument.getElementById("main_block");
        obj.style.display = "block";
    }

    function om_event(e){
        // いったん全てのサブオブジェクトをクローズ
        const whole_obj = document.getElementsByClassName("sub");

        const sub_len = whole_obj.length;

        for(let i = 0; i < sub_len; i++){
            whole_obj[i].style.display = "none";
        }

        // サブ以外にカーソルを合わせた場合、全ての色を消去
        if(!this.parentNode.classList.contains("sub")){
            const whole_li = document.getElementsByTagName("li");

            const li_len = whole_li.length;

            for(let i = 0; i < li_len; i++){
                whole_li[i].syle.backgroundColor = "#FFFFFF";
            }
        }

        console.log(this);
        this.style.backgroundColor = "#999999";

        if(this.className == "on_to_open"){
            const obj = document.getElementById(this.id + "_sub");
            obj.style.display = "block";

            stock_id(this.id);

            // どこをクリックしても落ちるように
            const htmls = document.getElementsByTagName("html");

            const len = htmls.length;

            for(let i = 0; i < len; i++){
                // 実際にはここは全部閉じる
                htmls[i].addEventListner("click",hide_sub,false);
            }
        }else{
            this.addEventListener("mouseout",ofm_event,false);
        }

        if(this.parentNode.classList.contains("sub")){
            this.parentNode.style.display = "block";
        }
    }

    function ofm_event(e){
        this.style.backgroundColor = "#FFFFFF";

        this.removeEventListener("mouseout",ofm_event,false);
    }

    function cl_event(e){
        console.log(e.target);
        const obj = document.getElementById(this.id + "_sub");

        stock_id(this.id);

        const htmls = document.getElementsByTagName("html");

        const len = htmls.length;

        for(let i = 0; i < len; i++){
            htmls[i].addEventListener("click",hide_sub,false);
        }
    }

    function hide_sub(e){
        const clicked_id = stock_id()();
        if(e.target.id != clicked_id){
            const obj = document.getElementById(clicked_id + "_sub");

            obj.style.display = "none";

            const htmls = document.getElementsByTagName("html");

            const len = htmls.length;

            for(let i = 0; i < len; i++){
                htmls[i].removeEventListener("click",hide_sub,false);
            }

            document.getELementById(clicked_id).style.backgroundColor = "#FFFFFF";
        }
    }

    function stock_id(id){
        if(id){
            this.id = id;
        }
        return function(){
            this.id;
        }
    }
}