%%[
SET @Last_name = RequestParameter('surname')
SET @First_name = RequestParameter('name')
SET @Full_name = Concat(@First_name, " ", @Last_name)
SET @EmailAddress = RequestParameter('email')
SET @Hospital_Name = RequestParameter('hospital_name')
SET @Postal_Code = RequestParameter('postcode')
SET @Prefectures = RequestParameter('prefectures')
SET @Address = RequestParameter('address')
SET @Department = RequestParameter('Depart_affiliation')
SET @Phone_Number = RequestParameter('work_phonenumber')
]%%
<!DOCTYPE html>
<html>
    <head>
        <meta name="ROBOTS" content="INDEX,FOLLOW" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <title>品目指図確認画面</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <style>
        * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, "ヒラギノ角ゴ ProN W3",
        "Hiragino Kaku Gothic ProN", "游ゴシック Medium", Yu Gothic Medium, "メイリオ", Meiryo,
        Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
        }
        body {
        background-color: #ffffff;
        margin-bottom: 1rem;
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
        
        p.para {
        margin: 1.2rem 0 1rem;
        font-size: 1rem;
        line-height: 1.6;
        }
        hr {
        border-top-color: #cfcfcf;
        margin-top: 1rem;
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
       max-width: 600px;
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
   span.arrow {
    font-size: 1.8rem;
    height: 0;
    line-height: 0;
}
          .flex-left .para {
    width: 20%;
}

p.para-right {
    width: 85%;
    font-weight: bold;
    font-size: 0.9rem;
    margin: 1rem 0 0;
    text-align: left;
}
        .right-flex .para {
        font-size: 0.8rem;
        line-height: 1.5;
        margin: 0;
        }
        .btn {
        font-weight: bold;
        color: #ffffff;
        display: flex;
          align-items:center;
        flex-direction: row;
        max-width: 250px;
        width: 100%;
        background-color: #7b024d;
        justify-content: space-between;
        text-decoration: none;
        padding: 0.5rem 1rem;
        margin: 0 auto;
        margin-top: 3rem;
        outline: none;
        }
        .materials-list {
        margin: 2rem;
        }
        .container {
        text-align: center;
        padding: 2rem 0;
        }
        span.txt-ct {
        text-align: center;
        margin: 0 auto;
        }
        .container h3 {
        font-weight: 100;
        font-size: 1rem;
        margin-bottom: 1.5rem;
   text-align: left;
        }
        .grey-bg {
        background-color: #f7f7f7;
        padding: 1.5rem 0;
        }
        .grey-bg .flex {
        justify-content: space-evenly;
        max-width: 800px;
   margin: 0 auto;
        width: 100%;
        }
        .flex.flex-left {
        width: 60%;
        }
        .flex.flex-right {
        width: 20%;
        }
        .flex-left .para ,.flex-right .para {
        font-weight: bold;
        font-size: 0.9rem;
   margin: 1rem 0 0;
        }
        .container .grey-bg h3 {
        margin-bottom: 0;
   text-align: center;
        }
        input[type=text], input[type=email], input[type=number] {
        width: 100%;
        padding: 6px;
        border: 1px solid #ccc;
        border-radius: 4px;
        resize: vertical;
        outline: none;
        }
        .materials-list .row {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -moz-flex;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        margin: 2rem 0;
        justify-content: space-evenly;
        align-items: center;
        }
        form .label {
        width: 30%;
        text-align: left;
        font-size: 0.9rem;
        font-weight: bold;
        color: #7b024d;
        }
        form .input {
        width: 70%;
        }
        .grey-bg .flex.three-col {
    max-width: unset;
}

.grey-bg .materials-list .flex.row-heading {
    max-width: unset;
    width: 30%;
    align-items: flex-start;
    justify-content: space-between;
    padding-right: 1rem;
}

.grey-bg .flex.three-col .row {
    width: 70%;
    margin: 0;
 display: flex;
 flex-direction: column;
}

.grey-bg .materials-list .flex.three-col .row .row-sub {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 0.5rem;
}
   
   p.para-label {
    font-size: 0.9rem;
    font-weight: bold;
    color: #7b024d;
}
   .grey-bg .materials-list .flex.three-col .row .row-sub .input {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.grey-bg .materials-list .flex.three-col .row .row-sub .input label.para-blacklabel {
    width: 15%;text-align: left;font-weight: bold;
}
.grey-bg .materials-list .flex.three-col .row .row-sub .input label.para-label{
    width: 15%;text-align: left;font-weight: bold;
}
.grey-bg .materials-list .flex.three-col .row .row-sub .input input[type=text], input[type=number] {
    width: 85%;
}
        @media screen and (max-width: 900px) {
        .grey-bg .materials-list .flex.three-col .row .row-sub .input input[type=text], input[type=number] {
    width: 82%;
    margin-left: 1rem;
}
        }
        @media screen and (max-width: 700px) {
          .flex-left .para, p.para-right, .flex-right .para{
    font-size: 0.8rem;
}
   .grey-bg .materials-list .flex.three-col .row .row-sub .input label.para-label {
    width: 17%;
   }
        .flex.flex-left {
        width: 70%;
        }
        .grey-bg .materials-list .flex.three-col .row .row-sub .input label.para-blacklabel {
    width: 17%;
   }
        .grey-bg .flex {
        max-width: 535px;
        }
        }
        @media screen and (max-width: 550px) {
          .flex-left .para, p.para-right, .flex-right .para{
    font-size: 0.9rem;
}
          .flex-left .para {
    width: 100%;
    text-align: left;
}
          p.para-right {
    width: 100%;
}
   .grey-bg .materials-list .flex.row-heading {
    margin-bottom: 0.5rem;
}
   .grey-bg .flex.three-col .row{
    padding: 0;
   }
   .grey-bg .flex.three-col {
    padding: 0 20px;
}
   .grey-bg .materials-list .flex.three-col .row .row-sub .input {
    flex-direction: column;
}

.grey-bg .materials-list .flex.three-col .row .row-sub .input label.para-blacklabel {
    width: 100%;
}

.grey-bg .materials-list .flex.three-col .row .row-sub .input input[type=text], input[type=number] {
    width: 100%;
    margin: 0;
}

.grey-bg .flex.three-col .row {
    width: 100%;
}
        .materials-list {
        margin: 0rem;
        }
        .flex.flex-right {
        width: 95%;
        padding: 0 20px;
        }
        .grey-bg .flex {
        align-items: flex-start;
        }
        .flex.flex-left {
        width: 95%;
        padding: 0 20px;
        }
        .materials-list .row {
        flex-direction: column;
        padding: 0 20px;
        }
        form .label {
        width: 100%;
        margin-bottom: 0.5rem;
        }
        form .input {
        width: 100%;
        }
        .flex{
        flex-direction: column;
        }
        .btn {
        max-width: 305px;
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
   @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
     /* IE10+ CSS styles go here */
   .flex-left .para, .flex-right .para{
    margin-left: 1.8rem;
    
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
                <h3>ご発注内容とお届け先をご確認ください。</h3>
                <div class="grey-bg">
                    <h3 style="color:#7b024d;font-weight: bold;">ご発注内容</h3>
                       <div class="flex">
                        <div class="flex flex-left">
                            <p class="para" style="color:#7b024d;">資材名</p>
                            <p class="para-right">アイモビーグによる治療を受けられる方へ</p>
                        </div>
                        <div class="flex flex-right">
                            <p class="para" style="color:#7b024d;">部数</p>
                            <p class="para">1０部</p>
                        </div>
                    </div>
     <div class="flex">
                        <div class="flex flex-left">
                            <p class="para" style="color:#7b024d;">資材名</p>
                            <p class="para-right">頭痛ダイアリー</p>
                        </div>
                        <div class="flex flex-right">
                            <p class="para" style="color:#7b024d;">部数</p>
                            <p class="para">1０部</p>
                        </div>
                    </div>
                </div>
                <div class="grey-bg" style="margin-top:1rem;">
                    <h3 style="color:#7b024d;font-weight:bold;">お届け先</h3>
                    <div class="materials-list">
                        <form action="%%=RequestParameter('PAGEURL')=%%" method="post" id="form1">
                            <div class="row">
                                <div class="label">
                                    <label for="fname">氏名</label>
                                </div>
                                <div class="input">
                                    <input type="text" name="fname" id="fname" value="%%=v(@Full_name)=%%" readonly>
                                </div>
                            </div>
                            <div class="row">
                                <div class="label">
                                    <label for="email">メールアドレス</label>
                                </div>
                                <div class="input">
                                    <input type="email" name="email" id="email" pattern="^[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" value="%%=v(@EmailAddress)=%%" readonly>
                                </div>
                            </div>
       <div class="row">
                                <div class="label">
                                    <label for="email">メールアドレス確認</label>
                                </div>
                                <div class="input">
                                    <input type="email" name="email" id="email" pattern="^[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" value="%%=v(@EmailAddress)=%%" readonly>
                                </div>
                            </div>
                            <div class="row">
                                <div class="label">
                                    <label for="hospital_name">病院名</label>
                                </div>
                                <div class="input">
                                    <input type="text" name="hospital_name" id="hospital_name" value="%%=v(@Hospital_Name)=%%" readonly>
                                </div>
                            </div>
                            <div class="flex three-col">
                                <div class="flex row-heading">
                                    <p class="para-label">勤務先住所</p>
                                </div>
                                <div class="row">
                                    <div class="row-sub">
                                        <div class="input">
                                            <label class="para-blacklabel" for="postcode">郵便番号</label>
                                            <input type="text" name="postcode" id="postcode" value="%%=v(@Postal_Code)=%%" readonly>
                                        </div>
                                       
                                    </div>
                                    <div class="row-sub">
                                        <div class="input">
                                            <label class="para-blacklabel" for="prefectures">都道府県</label>
                                            <input type="text" name="prefectures" id="prefectures" value="%%=v(@Prefectures)=%%" readonly>
                                          
                                        </div>
                                    </div>
                                    <div class="row-sub">
                                        <div class="input">
                                            <label class="para-label" for="address">住所</label>
                                            <input type="text" name="address" id="address" value="%%=v(@Address)=%%" readonly>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="row">
                                <div class="label">
                                    <label for="Depart_affiliation">部署・所属</label>
                                </div>
                                <div class="input">
                                    <input type="text" name="Depart_affiliation" id="Depart_affiliation" value="%%=v(@Department)=%%" readonly>
                                </div>
                            </div>
                            <div class="row">
                                <div class="label">
                                    <label for="work_phonenumber">勤務先電話番号</label>
                                </div>
                                <div class="input">
                                    <input type="text" name="work_phonenumber" id="work_phonenumber" value="%%=v(@Phone_Number)=%%" readonly>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            <form action="https://cloud.amgenmail.com/Materialorder_Completionscreen" method="post" id="form2"></form> 
                <div class="flex">
                    <a class="btn" href="#" id="btn1"><span class="txt-ct">お届け先を修正する</span><span class="arrow">&#x203A;</span></a>
                    <a class="btn" href="#" id="btn2"><span class="txt-ct">この内容で確定する</span> <span class="arrow">&#x203A;</span></a>
                </div>
                
            </div>
            <hr />
            <div class="footer-flex">
                <div class="right-flex">
                    <p class="para">
                        &copy;2021 Amgen Inc. All Rights Reserved.
                        <br />
                        ERN214002MH1（2021年6月作成）
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
    </body>
    <script>
        $(document).ready(function(){
            $(function() {
           $('#btn1').click(function(e) {
                e.preventDefault();
                $("#form2").submit();
            });
        
           $('#btn2').click(function(e) {
                e.preventDefault();
                $("#form1").submit();
            });
        });
        });
        </script>
</html>