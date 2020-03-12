$(function(){
    $(".textinput").on({keydown:function(e){
        if(e.keyCode == 13){
            // 读取
            var local = getData();
            // 添加
            local.push({title:$(this).val(),done:false});
            // 存
            saveData(local);
            // 渲染页面
            load();
            $(this).val('');
        }
    }});
    $(".olbox,.ulbox").on("click","a",function(){
        var data = getData();
        var index = $(this).attr("id");
        data.splice(index, 1);
        saveData(data);
        load();
    });
    $(".olbox,.ulbox").on("click","input",function(){
        var data = getData();
        var index = $(this).siblings("a").attr("id");
        data[index].done = $(this).prop("checked");
        saveData(data);
        load();
    });
    load();
    function getData(){
        var data = localStorage.getItem("todolist");
        if(data !== null){
            return JSON.parse(data);
        }else{
            return [];
        }
    }
    function saveData(data){
        localStorage.setItem("todolist",JSON.stringify(data));
    }
    function load(){
        $(".olbox,.ulbox").empty();
        var data = getData();
        $.each(data,function(i,n){
            if(n.done){
                $(".ulbox").prepend("<li><input type='checkbox' checked='checked'><p>"+n.title+"</p><a id="+ i +" href='javascript:;' class='delete'>-</a></li>");
            }else{
                $(".olbox").prepend("<li><input type='checkbox'><p>"+n.title+"</p><a id="+ i +" href='javascript:;' class='delete'>-</a></li>");
            }
        });
        setcount();
    }
    function setcount(){
        var data = getData();
        var ol = 0;
        var ul = 0;
        $.each(data,function(i,e){
            if(e.done){
                ul++;
            }else{
                ol++;
            }
        });
        $(".ulcountbox").text(ul);
        $(".olcountbox").text(ol);
    }
})