<!DOCTYPE html>
<html>
  <head>
    <meta name="ROBOTS" content="INDEX,FOLLOW" />
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <title>材料注文_完了画面</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <style>
    * {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, "ヒラギノ角ゴ ProN W3",
    "Hiragino Kaku Gothic ProN", "游ゴシック Medium", Yu Gothic Medium, "メイリオ", Meiryo,
    Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    }
    body {
    background-color: #ffffff;
    }
    .banner {
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    margin-top: 1rem;
    box-sizing: border-box;
    }
    .bg-color {
    background-color: #eeeeee;
    }
    .banner-img {
    max-width: 1120px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    }
    .wrapper {
    padding: 0 20px;
    }
    
    .banner-img img {
    width: 100%;
    }
    .wrapper {
    background-color: #ffffff;
    border-radius: 0.35rem;
    border: none;
    background: #ffffff;
    box-sizing: border-box;
    /* border: #e0e0e0 solid 1px;
    box-shadow: 0 0 0.2rem rgb(0 0 0 / 25%);
    padding: 2rem; */
    margin: 0 auto;
    max-width: 900px;
    width: 100%;
    }
    .banner img {
    width: 100%;
    }
    img.logo {
    width: 180px;
    margin-bottom: 10px;
    }
    h3 {
    font-size: 1.15rem;
    text-align: center;
      font-weight: bold;
      color:#7b024d;
    }
   span.arrow {
    font-size: 1.8rem;
    line-height: 0;
}
    p.para {
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
    }
    hr {
    border-top-color: #cfcfcf;
    margin-top: 4rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
    .flex {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
 max-width: 555px;
    width: 100%;
    margin: 0 auto;
}
    .footer-flex {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0 0;
    }
    .footer-flex img {
    width: 140px;
    }
    .right-flex .para {
    font-size: 0.8rem;
    line-height: 1.5;
    margin: 0;
    }
    .btn {
      font-weight: bold;
      align-items:center;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    max-width: 220px;
    width: 100%;
    background-color: #7b024d;
    justify-content: space-between;
    text-decoration: none;
    padding: 0.5rem 1rem;
    margin: 0 auto;
    margin-top: 3rem;
    outline: none;
    }
    .container {
    text-align: center;
    padding: 7rem 0;
    }
    span.txt-ct {
    text-align: center;
    margin: 0 auto;
    }
    @media screen and (max-width: 800px) {
    
    }
    @media screen and (max-width: 700px) {
    
    }
    @media screen and (max-width: 550px) {
    .flex{
        flex-direction: column;
      margin-top: 1rem;
    }
    .btn {
    max-width: 305px;
  margin-top: 1rem;
    }
    img.logo {
    width: 160px;
    margin-bottom: 5px;
    }
    .bg-color {
    background-color: #ffffff;
    }
    .right-flex .para {
    text-align: center;
    }
    .wrapper {
    padding: 2rem 1rem;
    }
    
    .footer-flex {
    flex-direction: column-reverse;
    }
    .footer-flex .left-flex {
    margin-bottom: 1rem;
    }
    }
    </style>
  </head>
  <body>
    
    <div class="bg-color">
      <div class="banner-img">
        <!-- <img src="https://image.amgenmail.com/lib/fe301171716404747c1770/m/1/0222cc5e-db9f-48d2-836a-cfc349f82607.jpg" alt="banner"/>-->
      </div>
    </div>
    <div class="wrapper">
      <div class="banner">
        <img src="https://image.amgenmail.com/lib/fe301171716404747c1770/m/1/8e3c027a-1aeb-4d90-87e7-c9389f7391a8.png"
                alt="logo" class="logo" />
      </div>
      <div class="container">
        <h3>ご発注内容を承りました。</h3>
        <p class="para">
         ご利用いただきありがとうございました。
お手元に届くまでしばらくお待ちください。<br>
Aimovig.jpに会員登録していただくと、次回よりお届け先のご入力が簡単になります。
        </p>
        <div class="flex">
            <a class="btn" id="CTA1" href="#" target="_self" style="background-color: #ffffff;color: #7b024d;border: 1px solid #7b024d;"><span class="arrow">&#8249;</span><span class="txt-ct">トップページへ戻る</span> </a>
            <a class="btn" id="CTA2" href="https://cloud.amgenmail.com/Materialorder_Thankspage"><span class="txt-ct">会員登録しない</span><span class="arrow">&#x203A;</span></a>
        </div>

        
      </div>
      <form action="https://enbpreu204n88.x.pipedream.net" id="form1" method="post">
  <input type="hidden" name="FirstName" value="%%=v(RequestParameter('FirstName'))=%%"><br>
  <input type="hidden" name="LastName" value="%%=v(RequestParameter('LastName'))=%%"><br>
</form> 
      <hr />
      <div class="footer-flex">
        <div class="right-flex">
          <p class="para">
            &copy;2021 Amgen Inc. All Rights Reserved.
          
          </p>
        </div>
        <div class="left-flex">
          <img
          src="https://image.amgenmail.com/lib/fe301171716404747c1770/m/1/3e23e3ae-0f40-4195-bb63-ed7916d1ee2e.jpg"
          alt="Amgen logo"
          />
        </div>
      </div>
    </div>
    <script>
        $(document).ready(function(){
            $(function() {
           $('#CTA1').click(function(e) {
                e.preventDefault();
                $("#form1").submit();
            });
          
        });
        });
        </script>
  </body>
</html>