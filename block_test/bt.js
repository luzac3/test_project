window.onload = function(){
    const li_list = document.getElementByTagName("li");

    let len = li_list.length;

    for(let i = 0; i < len; i++){
        li_list[i].addEventListener("mouseover",om_event,false);
    }

    const click_to_open = document.getElementByClassName("click_to_open");

    len = click_to_open.length;
    for(let i = 0; i< len; i++){
        click_to_open[i].addEventListener("click",cl_event,false);
    }

    function om_event(e){
        console.log(this);
        this.style.backgroundColor = "#999999";
    }

    function cl_event(e){
        console.log(e.target);
        const obj = document.getElementById(this.id + "_sub");

        stock_id(this.id);

        const htmls = document.getElementsByTagName("html");

        let len = htmls.length;

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

            let len = htmls.length;

            for(let i = 0; i < len; i++){
                htmls[i].removeEventListener("click",hide_sub,false);
            }
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