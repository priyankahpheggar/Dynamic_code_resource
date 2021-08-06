%%[
SET @dcf = "MTIzNDU="
SET @mail_seq = "1"
SET @site = "AMV"
SET @TokenStatus = "True"
SET @decrypt_dcf = Base64Decode(@dcf)

SET @dcf_compare = LookupRows("MASTER_Account","AABP_DCF_Doctor_Code",@decrypt_dcf)
SET @row = row(@dcf_compare,1)
SET @FirstName = field(@row,"First_name")
SET @Amgen_id = field(@row,"Amgen_id")
SET @Account_id = field(@row,"Account_id")
IF @mail_seq == 1 THEN
SET @EmailAddress = field(@row,"Mail")    
elseif @mail_seq == 2 THEN
SET @EmailAddress = field(@row,"Mail2")  
else
SET @EmailAddress = field(@row,"Mail3")  
endif

IF RequestParameter('submitted') == '1' THEN    
SET @TriggeredSendExternalKey = "56740"
SET @register = RequestParameter('select_info')
SET @new_email_reg = RequestParameter('email_Id')

      IF @register == "not_register_member" THEN
      Redirect('https://www.aimovig.jp/')
      ENDIF

      IF @register == "Register_member_email_address" OR @register == "Register_member_another_emailaddress" THEN
      if NOT Empty(@new_email_reg) then
     
      UpsertDE("DE_MASTER_AMOVIG",1,"AABP_DCF_Doctor_Code", @decrypt_dcf,"Login_id", @new_email_reg,"First_name", @FirstName,"Amgen_id", @Amgen_id,"Account_id", @Account_id,"TokenStatus", @TokenStatus)
 
      else
         
      UpsertDE("DE_MASTER_AMOVIG",1,"AABP_DCF_Doctor_Code", @decrypt_dcf,"Login_id", @EmailAddress,"First_name", @FirstName,"Amgen_id", @Amgen_id,"Account_id", @Account_id,"TokenStatus", @TokenStatus) 
      endif
        
]%%

<script runat="server">
                Platform.Load("core","1.1");
                var new_email_reg = Variable.GetValue('@new_email_reg');
                var EmailAddress = Variable.GetValue('@EmailAddress');
                if(new_email_reg != null && new_email_reg != '') 
                {
                  var data = {
                    attributes :  {
                      FirstName: Platform.Variable.GetValue("@FirstName")
                                  },
                    subscriber : {
                    EmailAddress: new_email_reg,
                    SubscriberKey: new_email_reg
                                  }
                              }
                  
                }

               else 
                {
                  var data =  {
                    attributes :  {
                      FirstName: Platform.Variable.GetValue("@FirstName")
                                  },
                    subscriber :  {
                    EmailAddress: EmailAddress,
                    SubscriberKey: EmailAddress
                                  }
                              }
                  
                }
                var TSD = TriggeredSend.Init(Platform.Variable.GetValue("@TriggeredSendExternalKey"));
                var Status = TSD.Send(data.subscriber,data.attributes);
</script>
%%[
    Redirect('https://cloud.amgenmail.com/aimovig_thankyou')
        ENDIF 
ENDIF
]%%

<!DOCTYPE html>
<html>
 <head>
  <meta name="ROBOTS" content="INDEX,FOLLOW" />
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <title>会員登録の確認</title>
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

   .sub-list {
    display: none;
   }

   .banner {
    padding: 0 20px;
   }

   .wrapper {
    padding: 0 20px;
   }

   .textarea .error {
    background: none !important;
   }

   .textarea input {
    width: 96% !important;
    border: 1px solid #d9d9d9;
    padding: 0.5rem 1rem;
    margin-bottom: 0.8rem;
    border-radius: 0.35rem;
    color: #424242;
    cursor: pointer;
    margin: 1rem 0;
    height: 22px !important;
   }

   .banner-img img {
    width: 100%;
   }

   .error:required:invalid {
    border: #e9322d;
    -webkit-box-shadow: 0px 0px 8px 1px #e9322d;
    -moz-box-shadow: 0px 0px 8px 1px #e9322d;
    box-shadow: 0px 0px 8px 1px #e9322d;
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

   ol.order-list.contains-other p {
    text-align: center;
    color: #7b024d;
    font-weight: bold;
    margin-bottom: 2rem;
   }

   img.logo {
    width: 180px;
    margin-bottom: 10px;
   }

   .heading h3 {
    font-size: 1.5rem;
    text-align: center;
   }

   p.para {
    margin: 1.5rem 0 1rem;
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

   ul.unorder-list {
    list-style: none;
    margin-top: 1rem;
   }

   ol.order-list li ul.unorder-list li {
    border: 1px solid #d9d9d9;
    padding: 0.5rem 1rem;
    margin-bottom: 0.8rem;
    border-radius: 0.35rem;
    color: #424242;
    cursor: pointer;
    margin: 1rem 0;
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

   .order-list {
    padding-left: 1rem;
   }

   ul.unorder-list li input {
    cursor: pointer;
    width: 22px;
    height: 30px;
    display: inline-block;
    vertical-align: middle;
    margin-top: -4px;
   }

   ul.unorder-list li label {
    cursor: pointer;
    display: block;
   }

   textarea {
    overflow: hidden;
    height: 22px;
    padding: 0.5rem;
    border-color: #d9d9d9;
    border-radius: 5px;
    width: 98%;
   }

   ol.order-list li {
    margin: 1.4rem 0;
   }

   .textarea {
    margin-top: 1rem;
   }

   ol.order-list li .sub-list .unorder li,
   ol.order-list li .automail-list .unorder li {
    border: none;
    margin: 0;
    padding: 0.5rem 0;
   }

   .sub-list .unorder li,
   .automail-list .unorder li {
    list-style-type: none;
   }

   .automail-list .unorder li .textarea {
    margin-top: 0;
   }

   input[type="checkbox"],
   input[type="radio"] {
    margin-right: 10px;
   }

   ol.order-list.contains-other {
    list-style-type: none;
    padding: 0;
   }

   button {
    color: #ffffff;
    font-size: 1rem;
    border-radius: 10px;
    cursor: pointer;
    outline: 0;
    border: none;
    background: url("https://image.amgenmail.com/lib/fe301171716404747c1770/m/1/b9e5ec46-e6a1-44c5-a753-ced15885c085.png")
     #7b024d center right no-repeat;
    background-position-x: calc(100% - 15px);
    width: 100%;
    line-height: 30px;
    padding: 15px 45px;
   }

   .error {
    color: #e53935;
    padding: 0.25rem 0.35rem;
    border-radius: 0.35rem;
    font-size: 0.65rem;
    vertical-align: middle;
   }

   .error-text {
    color: #e53935;
   }

   .others-text input {
    padding: 0.5rem;
    border-radius: 5px;
    width: 50%;
    margin: 0.8rem 0 0.5rem 0;
    border: 1px solid #d9d9d9;
   }

   span.optional {
    background: #f5f5f5;
    color: #9e9e9e;
    padding: 0.25rem 0.35rem;
    border-radius: 0.35rem;
    font-size: 0.65rem;
    vertical-align: middle;
    margin-left: 0.3rem;
   }

   @media screen and (max-width: 800px) {
    .order-list {
     padding-left: 1.2rem;
    }

    textarea {
     width: 97.3%;
    }

    .textarea input {
     width: 95.3% !important;
    }
   }

   @media screen and (max-width: 700px) {
    .textarea input {
     width: 94.5% !important;
    }

    .order-list {
     padding-left: 1rem;
    }
   }

   @media screen and (max-width: 550px) {
    .textarea input {
     width: 90% !important;
    }

    ol.order-list.contains-other p {
     font-size: 0.94rem;
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

    textarea {
     width: 95%;
    }

    ul.unorder-list li label {
     font-size: 0.9rem;
    }

    .footer-flex {
     flex-direction: column;
    }

    .footer-flex .left-flex {
     margin-top: 1rem;
    }
   }
  </style>
 </head>

 <body>
  <div class="banner">
   <img
    src="https://image.amgenmail.com/lib/fe301171716404747c1770/m/1/88a83dcb-6c23-485c-840a-270240c35aa4.png"
    alt="logo"
    class="logo"
   />
  </div>
  <div class="bg-color">
   <div class="banner-img">
    <img
     src="https://image.amgenmail.com/lib/fe301171716404747c1770/m/1/0222cc5e-db9f-48d2-836a-cfc349f82607.jpg"
     alt="banner"
    />
   </div>
  </div>
  <div class="wrapper">
   <form
    action="%%=RequestParameter('PAGEURL')=%%"
    method="post"
    name="registration"
    accept-charset="utf-8"
    id="registration-form"
   >
   <input type="hidden" name="dcf" value="%%=v(@dcf)=%%"><br>
       <input type="hidden" name="mail_seq" value="%%=v(@mail_seq)=%%"><br>
       <input type="hidden" name="site" value="%%=v(@site)=%%"><br>
       <input type="hidden" name="submitted" value="1">
    <ol class="order-list contains-other">
     <li>
      <p>
       NEXTに許諾いただいた以下のメールアドレスで、<br />
       アイモビーグ.jpに会員登録してよろしいですか？
      </p>
      <ul class="unorder-list unorder-radio">
       <li>
        <label for="Register_member_email_address" class="register1">
         <input
          type="radio"
          name="select_info"
          checked="true"
          value="Register_member_email_address"
          id="Register_member_email_address"
          data-text="others-text-1"
         />
         このメールアドレスで会員登録する
        </label>
       </li>
       <div class="automail-list">
        <ul class="unorder">
         <li>
          <div class="textarea">
           <input type="text" value="%%=v(@EmailAddress)=%%" disabled />
          </div>
         </li>
        </ul>
       </div>
       <li>
        <label for="Register_member_another_emailaddress" id="register">
         <input
          type="radio"
          rows="1"
          name="select_info"
          value="Register_member_another_emailaddress"
          id="Register_member_another_emailaddress"
          data-text="others-text-1"
         />
         他のメールアドレスで会員登録する
        </label>
       </li>
       <div class="sub-list">
        <ul class="unorder">
         <li>
          メールアドレス
          <div class="textarea">
           <input type="text" name="email_Id" rows="1" id="email_Id" />
          </div>
          <div id="confirmEmailErrorMsg1"></div>
         </li>
         <li>
          確認用メールアドレス
          <div class="textarea">
           <input type="text" name="ConfirmEmail" id="confirm_email_Id" />
          </div>
          <div id="confirmEmailErrorMsg2"></div>
         </li>
        </ul>
       </div>
       <div id="confirmEmailErrorMsg"></div>
       <li>
        <label for="not_register_member" class="register1">
         <input
          type="radio"
          name="select_info"
          value="not_register_member"
          id="not_register_member"
          class="radio-other"
          data-text="others-text-1"
         />
         会員登録しない
        </label>
       </li>
      </ul>
     </li>
    </ol>
    <div class="submit-btn">
     <button type="submit" id="save_Form">この内容で確定する</button>
    </div>
   </form>
   <hr />
   <div class="footer-flex">
    <div class="right-flex">
     <p class="para">
      ©2021 Amgen Inc. All Rights Reserved.<br />
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

 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
 <!-- <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script> -->
 <script
  src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
  integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
  crossorigin="anonymous"
 ></script>

 <script>
  const emailRegEx =
   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-]+\.)+[a-zA-Z]{2,}))$/;

  $(document).ready(function () {
   function validateFields() {
    var result = true;

  

    var $emailId = $("#email_Id");
    var enteredEmailId = $emailId.val().trim().toLowerCase();

    var $confirmEmailId = $("#confirm_email_Id");
    var enteredConfirmEmailId = $confirmEmailId.val().trim().toLowerCase();

    var $errorMsgDiv = $("#confirmEmailErrorMsg");
    var $errorMsgDiv1 = $("#confirmEmailErrorMsg1");
    var $errorMsgDiv2 = $("#confirmEmailErrorMsg2");

    $errorMsgDiv.html("");
    $errorMsgDiv.hide();

    $emailId.css("border", "1px solid black");
    $confirmEmailId.css("border", "1px solid black");

    // Case 1 - Both email-ID fields are empty:
    if (enteredEmailId === "" && enteredConfirmEmailId === "") {
     $emailId.css("border", "1px solid red");
     $errorMsgDiv1
      .empty()
      .append("<span class='label label-important'>メールアドレスを入力してください</span>");
                  $errorMsgDiv1.css("color", "red");
     $errorMsgDiv.show();
     result = false;
     return result;
    }

    // Case 2 - Only first email-ID field is empty:
    if (enteredEmailId === "") {
     $emailId.css("border", "1px solid red");
     $errorMsgDiv1
      .empty()
      .append("<span class='label label-important'>メールアドレスを入力してください</span>");
                  $errorMsgDiv1.css("color", "red");
     $errorMsgDiv.show();
     result = false;
     return result;
    }

    // Case 3 - First email-ID doesn't match email pattern:
    if (!emailRegEx.test(enteredEmailId)) {
     $emailId.css("border", "1px solid red");
     $errorMsgDiv1
      .empty()
      .append("<span class='label label-important'>有効なメールアドレスを入力してください</span>");
                  $errorMsgDiv1.css("color", "red");
     $errorMsgDiv.show();
     result = false;
     return result;
    }

    // Case 4- Only second email-ID field is empty:
    if (enteredConfirmEmailId === "") {
     $confirmEmailId.css("border", "1px solid red");
     $errorMsgDiv2
      .empty()
      .append("<span class='label label-important'>確認用メールアドレスを入力してください</span>");
                  $errorMsgDiv2.css("color", "red");
     $errorMsgDiv.show();
     result = false;
     return result;
    }

    // Case 4 - Both email fields are entered but they don't match:
    if (enteredEmailId !== enteredConfirmEmailId) {
     $confirmEmailId.css("border", "1px solid red");
     $errorMsgDiv.append(
      "<span class='label label-important'>メールアドレスと確認用メールアドレスが一致しません</span>"
     );
     $errorMsgDiv.css("color", "red");
     $errorMsgDiv.show();
     result = false;
     return result;
    }

    
var $not_register_member = $("#not_register_member");
      var not_register_member = $not_register_member.val().trim().toLowerCase();

      if (not_register_member === "not_register_member") 
      {
        return true;
      }



    return result;
   }

   var issubmitted = false;

  $("#save_Form").click(function () {
    issubmitted = true;
    if (!$("#Register_member_email_address").is(":checked")) {
     if (!validateFields()) {
      //debugger;
      this.preventDefault;
      return false;
     }
    } else {
     return true;
    }
   });

   $("#register").click(function () {
    $(".sub-list").show();
   });
   $(".register1").click(function () {
    $(".sub-list").css("display", "none");
   });

   $("#Register_member_another_emailaddress").change(function () {
    $("#email_Id,#confirm_email_Id").val("");
    $("#confirmEmailErrorMsg,#confirmEmailErrorMsg1,#confirmEmailErrorMsg2").empty();
   });
   $("input").keyup(function () {
    if (issubmitted) {
     issubmitted = false;
     $("#confirmEmailErrorMsg,#confirmEmailErrorMsg1,#confirmEmailErrorMsg2").empty();
    }
   });
  });
 </script>
</html>
