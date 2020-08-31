        $i = 0;
        $('#start').click(function(){
            $i++;
            if($i >=20 ){
                $('#start').hide();
                $('#stop').show();
            }
        })
        $('#stop').click(function(){
            alert('刷新一下，继续扎心')
            $(this).hide();
        })