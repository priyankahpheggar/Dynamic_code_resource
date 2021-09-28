%%[
SET @EmailAddress = RequestParameter("email_name")
SET @Gender = RequestParameter("gender")
SET @Age = RequestParameter("age")
SET @Residence = RequestParameter("residence")
SET @Q5 = RequestParameter("event_name")
SET @Q6 = RequestParameter("headache_freq")
SET @Q7 = RequestParameter("doctor_diagnose")
SET @Q8 = RequestParameter("headache_specialist")
SET @Q9 = RequestParameter("questions_textarea")

/* IF (@Gender == "0" OR @Gender == "1" OR @Gender == "2")
AND (@Age == "0" OR @Age == "1" OR @Age == "2" OR @Age == "3" OR @Age == "4" OR @Age == "5") 
AND (@Q5 == "0" OR @Q5 == "1" OR @Q5 == "2" OR @Q5 == "3" OR @Q5 == "4" OR @Q5 == "5" OR @Q5 == "6")
AND (@Q6 == "0" OR @Q6 == "1" OR @Q6 == "2" OR @Q5 == "3" OR @Q5 == "4" OR @Q5 == "5" OR @Q5 == "6")
AND (@Q7 == "0" OR @Q7 == "1")
AND (@Q8 == "0" OR @Q8 == "1") THEN */



/* IF RequestParameter('submitted') == '1' THEN
SET @TriggeredSendExternalKey = 'TBD'
SET @data = UpsertData("Migraine_Control_College_Form",1,"EmailAddress", @EmailAddress,"Gender", @Gender,"Age", @Age,"Residence", @Residence,"Q5", @Q5,"Q6", @Q6,"Q7", @Q7,"Q8", @Q8,"Q9", @Q9) */
/* ENDIF */
]%%
<script runat="server">

    /* Platform.Load("core","1.1");
  
    var data = {
       	attributes : {
      		EmailAddress: Platform.Variable.GetValue("@EmailAddress")
    	             },
      	subscriber : {
    		EmailAddress: Platform.Variable.GetValue("@EmailAddress"),
      		SubscriberKey: Platform.Variable.GetValue("@EmailAddress")
    	}
    }
    
  	var TSD = TriggeredSend.Init(Platform.Variable.GetValue("@TriggeredSendExternalKey"));
	var Status = TSD.Send(data.subscriber,data.attributes); */
   
</script>
%%[
/* Redirect('https://cloud.amgenmail.com/Migraine_ControlCollege_Thankyou') */
]%%

<!DOCTYPE html>
<html lang="ja">
<head>
<!--<meta charset="Shift_JIS">-->
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0">
<meta name="robots" content="noindex,nofollow">
<title>オンラインセミナー「片頭痛コントロールカレッジ」申込内容確認</title>
<link href="https://business.form-mailer.jp/fm/common/css/style_form_theme_template_7023.css?20210310" rel="stylesheet">
<script src="https://business.form-mailer.jp/fm/common/js/vender/jquery/jquery-3.2.1.min.js?20210310"></script> 
<script src="https://business.form-mailer.jp/fm/common/js/vender/popper.min.js?20210310"></script> 
<script src="https://business.form-mailer.jp/fm/common/js/vender/bootstrap/bootstrap-4.0.0.min.js?20210310"></script> 
<!--<script src="https://business.form-mailer.jp/fm/common/js/apps/forms.js?20210310" charset="Shift_JIS"></script> -->

<style>
body {
 background-color: #e6fbfc;
}
legend {
 font-weight: normal;
}
.header {
 width: 720px;
 max-width: 100%;
 margin: 0 auto;
}
.header img.j-logo {
 width: 200px;
 margin-top: .4em;
}
ul {
 width: 90%;
 margin: 0 auto;
 list-style: none;
}
li {
 position: relative;
 font-size: 12px;
}
li:before {
 position: absolute;
 /* top: 8px; */
 margin: 1px 0 0 -17px;
 vertical-align: middle;
 display: inline-block;
 /* width: 4px; */
    /* height: 4px; */
    /* background: #ccc; */
 content: "※";
}
.required legend:after {
 content:none;
 background-color: #ffffff;
 margin-left: 0;
 font-size: 0;
}
.optional legend:after {
 content:none;
 background-color: #ffffff;
}
.em-mr {
 margin: 2rem auto .5em;
}
.em-mr2 {
 margin: 2em auto 1em;
}
.form-fieldset {
 margin-bottom: 1rem;
}
_:-ms-input-placeholder, :root .form-btn-submit, .form-btn-back{
 padding: 1rem 4rem .7rem
 }
.footer_container {
 background: #ffffff;
 width: 100%;
 margin: 0 auto;
 padding: 15px 0 15px;
}
.ftr-content {
 max-width: 960px;
 width: 100%;
 margin: 0 auto;
}
.ftr-content .border {
 border-bottom: 1px solid #ffffff;
 height: 0;
 border-top: 0;
}
.footer_container p {
 font-size: .6rem;
 color: #666666;
 text-align: center;
 margin: .8em 0;
}
.ftr-logo img {
 margin: 1.5em auto 1em;
 display: block;
}

/*
 .ftr-links{color: #666666; text-align: center;}
 .ftr-links a{color: #666666; font-size: 1rem; text-decoration: none;}
 .ftr-links a:hover{color: #00619D;}
*/
@media (max-width: 576px) {
.em-mr {
 margin: .5em !important;
}
.em-mr2 {
 margin: 2em auto 1em !important;
}
.contents .col-6 {
 max-width: 100% !important;
}
.header img.j-logo {
 margin: .4em auto 0;
 display: block;
}
}

@media all and (min-width: 480px) and (max-width: 767px) {
 .header img.j-logo{margin-left: .3em}
.em-mr {
 margin: .5em !important;
}
.contents{width: auto;}
.contents .col-6 {
 max-width: 100% !important;
}
.ftr-content {
 width: 90%;
}
}

@media all and (min-width: 768px) and (max-width: 1024px) {
.ftr-content {
 width: 95%;
}
}
</style>
</head>

<body>
<div class="container-fluid">
  <div class="header"> <img src="https://image.amgenmail.com/lib/fe301171716404747c1770/m/1/1f94c35d-7259-4096-8d07-31aca6691d9d.png" class="j-logo " alt="japan_logo" /> </div>
  <div class="contents em-mr">
    <p class="form-description" style="text-align: center; color: #404040;"> <font color="#404040" size="5" ><strong>オンラインセミナー「片頭痛コントロールカレッジ」 <br />
      申込内容確認 </strong></font></p>
    <hr style="background-color: #00b1e7; height: 2px; border: none; margin: 1em 0;" />
    <p class="form-description" style="text-align: center;"> <font color="#000" size="5" ><strong>日時 : 2021年11月28日（日）13:00-14:30　オンライン開催</strong></font></p>
    <ul>
   <li>ご記入いただいた個人情報は、申込みの受付や当日の運営で利用させていただき、それ以外の目的では<br>利用いたしません。</li>
      <li>オンラインセミナーで使用するアプリケーションはZOOMとなります。</li>
    </ul>
  </div>
  <div class="contents em-mr form-fieldset-margin-md form-fieldset-position-row efo-off">
    <form action="%%=RequestParameter('PAGEURL')=%%" method="post" name="form1" enctype="multipart/form-data" class="formmailer-form " data-max-total-filesize="5242880" novalidate>
      <input type="hidden" name="key" value="84327af2140594" >
      <input type="hidden" name="submitted" value="1">
      <p class="form-description" style="text-align: center;"><FONT color="#00b0f0" size="5"><B>お申込内容の確認</B></FONT><br>
        <br>
      </p>
      
      <!-- text:mail -->
      <div class="form-fieldset form-fieldset-email required" data-ng-words="">
        <legend><b>
   <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td style="width: 20px;" align="left" valign="top">1.</td>
      <td>%%=v(@EmailAddress)=%%</td>
    </tr>
   </table>
   </b> </legend>
        <font color="#c00000" size="2" style="font-weight: bold;">
   <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td style="width: 20px;" align="left" valign="top"></td>
      <td>こちらのメールアドレス宛に視聴用URLを送信します。</td>
    </tr>
   </table>
   </font> </div>
      
      <!-- radio -->
      <div class="form-fieldset form-fieldset-radiobutton required">
        <legend><b>2. </b>%%=v(@Gender)=%%</legend>
      </div>
      
      <!-- radio -->
      <div class="form-fieldset form-fieldset-radiobutton required">
        <legend><b>3.</b> %%=v(@Age)=%%</legend>
      </div>
      
      <!-- list:pref -->
      <div class="form-fieldset form-fieldset-prefecture required">
        <legend><b>4. %%=v(@Residence)=%%</b></legend>
      </div>
      
      <!-- radio -->
      <div class="form-fieldset form-fieldset-radiobutton required">
        <legend><b>5.</b> %%=v(@Q5)=%%</legend>
      </div>
      
      <!-- checkbox -->
      <div class="form-fieldset form-fieldset-checkbox optional">
        <legend>
   <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td style="width: 20px;" align="left" valign="top"><b>6.</b></td>
      <td>%%=v(@Q6)=%%</td>
    </tr>
   </table>
    </legend>
      </div>
      
      <!-- radio -->
      <div class="form-fieldset form-fieldset-radiobutton optional">
        <legend><b>
   <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td style="width: 20px;" align="left" valign="top"><b>7.</b></td>
      <td>医師から片頭痛と診断されたことがありますか？</td>
    </tr>
   </table>
    </b></legend>
        <legend><font color="#333333" size="3" style="margin-left: 19px;">%%=v(@Q7)=%%</font></legend>
      </div>
      
      <!-- radio -->
      <div class="form-fieldset form-fieldset-radiobutton optional">
        <legend><b>
   <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td style="width: 20px;" align="left" valign="top"><b>8.</b></td>
      <td>頭痛専門医にかかったことはありますか？</td>
    </tr>
   </table>
    </b></legend>
        <legend><font color="#333333" size="3" style="margin-left: 19px;">%%=v(@Q8)=%%</font></legend>
      </div>
      
      <!-- textarea -->
      <div class="form-fieldset form-fieldset-textarea optional"  data-ng-words="">
        <legend><b>
   <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td style="width: 20px;" align="left" valign="top">9. </td>
      <td>当日先生方へのご質問事項がありましたら自由にご記入ください。</td>
    </tr>
   </table>
   </b></legend>
        <legend>
   <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td style="width: 20px;" align="left" valign="top"></td>
      <td>%%=v(@Q9)=%%</td>
    </tr>
   </table>
   <font color="#333333" size="3" style="margin-left: 19px;"></font></legend>
      </div>
      <div style="text-align: center; line-height: 22px; margin: 2em 0 0;"> <font color="#333333" size="3" style="margin-left: 1em;">本セミナーに関する個人情報の取り扱い方針につきましては、下記リンクより<br>ご確認いただけます。 </font><br>
        <font color="#333333" size="3" style="margin-left: 1em;">内容をご確認のうえ、ご同意いただける場合のみお申し込みをお願いいたします。 </font><br>
        <font color="#333333" size="3" style="margin-left: 1em;"><a href="https://cosmopr.co.jp/ja/privacypolicy-form/" target="_blank">https://cosmopr.co.jp/ja/privacypolicy-form/</a></font> </div>
      <div class="form-buttons">
        <input class="btn btn-block btn-default form-btn-submit" name="submit" type="submit" id="submit" value="個人情報の取り扱い方針
に同意の上、申し込む" style="font-weight: bold;">
      </div>
  </form>
  <form action="%%=RedirectTo(CloudPagesURL(2054,
'email_name',@EmailAddress,
'gender',@Gender,
'age',@Age,
'residence',@Residence,
'event_name',@Q5,
'headache_freq',@Q6,
'doctor_diagnose',@Q7,
'headache_specialist',@Q8,
'questions_textarea',@Q9,
'PID','MCO-8242'
))=%%" method="post" name="form2" enctype="multipart/form-data" class="formmailer-form " data-max-total-filesize="5242880" novalidate>
      <div class="col-6 em-mr2">
        <div class="form-buttons">
          <input class="btn btn-block btn-outline-primary form-btn-submit" name="submit2" type="submit" id="submit2" value="前のページに戻る" style="border: 2px solid; font-weight: bold;">
        </div>
      </div>
      </form>
      
      <!-- charset --> 
      <!-- charset -->
      
    
  </div>
  <div class="footer_container">
    <div class="ftr-content">
      <div class="ftr-logo"> <img src="https://image.amgenmail.com/lib/fe301171716404747c1770/m/1/4e2318da-ad33-47e3-9167-396e921cae8a.png" width="120" height="30" alt="Amgen Logo"> </div>
      <p>&copy;2021 Amgen Inc. All Rights Reserved.</p>
      <p>ERN214001MH1 （2021年6月作成）</p>
    </div>
  </div>
</div>
</body>
</html>