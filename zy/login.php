<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="images/bootstrap.min.css">
    <title>用户登录/注册</title>
    <style type="text/css">
      .nav { margin-bottom: 15px; }
      .nav a { color: #999; }
    </style>
  </head>
  <body>
  	<div class="container" style="padding-top: 15px;">
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" href="?act=login">登录</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="?act=register">注册</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="?act=repwd">重置密码</a>
        </li>
      </ul>
      <div class="tab-content">
                <div class="tab-pane active" id="login" role="tabpanel">
          <form method="post">
            <div class="form-group">
              <input type="text" name="mob" class="form-control" placeholder="手机号码">
            </div>
            <div class="form-group">
              <input type="password" name="pwd" class="form-control" placeholder="密码">
            </div>
            <div class="form-group">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="saveAccount" checked="true">
                <label class="form-check-label" for="saveAccount">保存账号密码</label>
              </div>
            </div>
            <button onclick="return login()" type="submit" class="btn btn-dark btn-block">登录</button>
          </form>
        </div>
                              </div>
    </div>

    <script src="images/jquery.min.js"></script>
    <script src="images/bootstrap.min.js"></script>
    <script type="text/javascript">
  		$("#captchaBtn").click(function (e) {
        $.get('mob_code.php?type=' + $(this).attr("code-type") + '&mob=' + $("#registerMob").val(), function(data) {
          if (data.code != 0) {
            alert(data.msg);
          } else {
            $(this).attr("disabled", true);
            let s = 60;
            $("#captchaBtn").html( (s--) + "s" );
            let timer = setInterval(function () {
              if (s == 0) {
                clearInterval(timer);
                $("#captchaBtn").attr("disabled", false).html('获取验证码');
                return;
              }
              $("#captchaBtn").html( (s--) + "s" );
            }, 1000)
          }
        });
  		})

      var account = localStorage.getItem('account');
      if (account) {
        account = JSON.parse(account);
        $("#login input[name=mob]").val(account.mob);
        $("#login input[name=pwd]").val(account.pwd);
      }

      function login() {
        if ($("#saveAccount").prop("checked")) {
          localStorage.setItem("account", JSON.stringify({ 
            mob: $("#login input[name=mob]").val(), 
            pwd: $("#login input[name=pwd]").val() 
          }));
        }
        return true;
      }
  	</script>
  </body>
</html>






