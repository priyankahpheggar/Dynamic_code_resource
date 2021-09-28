%%[
/* IsExisting Email : START */
SET @ExistingEmail = Lookup("Migraine_Control_College_Form","EmailAddress","EmailAddress", @EmailAddress)
IF NOT EMPTY(@ExistingEmail) THEN
      SET @IsExisting_err = 'true'
ELSE  
      SET @IsExisting_err = 'false'
ENDIF
/* IsExisting Email : END */
]%%

<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="Shift_JIS">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0">
<meta name="robots" content="noindex,nofollow">
<title>オンラインセミナー「片頭痛コントロールカレッジ」申込フォーム</title>
<link href="https://business.form-mailer.jp/fm/common/css/style_form_theme_template_7023.css?20210310" rel="stylesheet">
<script src="https://business.form-mailer.jp/fm/common/js/vender/jquery/jquery-3.2.1.min.js?20210310"></script> 
<script src="https://business.form-mailer.jp/fm/common/js/vender/popper.min.js?20210310"></script> 
<script src="https://business.form-mailer.jp/fm/common/js/vender/bootstrap/bootstrap-4.0.0.min.js?20210310"></script> 
<!--<script src="https://business.form-mailer.jp/fm/common/js/apps/forms.js?20210310" charset="Shift_JIS"></script> -->

<style>
body {
 background-color: #e6fbfc;
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
.form-label-radio-checkbox input[type=radio]:not(.form-matrix-option) {
 margin-top: 0;
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
.form-text ul {
 width: 100%;
 margin: 0 auto;
 padding: 0 1em 0 1.5em;
 list-style: none;
}
.form-text li {
 position: relative;
 font-size: 12px;
}
.form-text li:before {
 position: absolute;
 /* top: 8px; */
 margin: 1px 0 0 -17px;
 vertical-align: middle;
 display: inline-block;
 /* width: 4px; */
    /* height: 4px; */
    /* background: #ccc; */
 content: "○";
}
.required legend:after {
 content: none;
 background-color: #ffffff;
}
.optional legend:after {
 content: none;
 background-color: #ffffff;
}
.em-mr {
 margin: 2rem auto .5em;
}
.em-mr-lft {
 margin-left: 1.2em
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
textarea.form-control {
 width: 100%;
}
input.form-control.form-email {
 width: 97%;
}
_:-ms-input-placeholder, :root .form-btn-submit, .form-btn-back {
padding: 1rem 4rem .7rem
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
.header img.j-logo {
 margin: .4em auto 0;
 display: block;
}
.em-mr-lft {
 margin-left: 0 !important;
}
}

@media all and (min-width: 480px) and (max-width: 767px) {
.header img.j-logo {
 margin-left: .3em
}
.em-mr {
 margin: .5em !important;
}
.contents {
 width: auto;
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
  <div class="header"> <img src="https://image.amgenmail.com/lib/fe301171716404747c1770/m/1/1f94c35d-7259-4096-8d07-31aca6691d9d.png" class="j-logo" alt="japan_logo" /> </div>
  <div class="contents em-mr">
    <p class="form-description" style="text-align: center; color: #404040;"> <font color="#404040" size="5" ><strong>オンラインセミナー「片頭痛コントロールカレッジ」 <br />
      申込フォーム </strong></font></p>
    <hr style="background-color: #00b1e7; height: 2px; border: none; margin: 1em 0;" />
    <p class="form-description" style="text-align: center;"> <font color="#000" size="5" ><strong>日時 : 2021年11月28日（日）13:00-14:30　オンライン開催 </strong></font></p>
    <ul>
      <li>ご記入いただいた個人情報は、申込みの受付や当日の運営で利用させていただき、それ以外の目的では<br>
        利用いたしません。</li>
      <li>オンラインセミナーで使用するアプリケーションはZOOMとなります。</li>
    </ul>
  </div>
  <div class="contents em-mr form-fieldset-margin-md form-fieldset-position-row efo-off">
    <form action="https://cloud.amgenmail.com/Migraine_ControlCollege_Confirmation" method="get" name="form1" enctype="multipart/form-data" class="formmailer-form " data-max-total-filesize="5242880" novalidate>
      <input type="hidden" name="key" value="84327af2140594" >
      <p class="form-description" style="text-align: center;"><font color="#00b0f0" size="5"><b>申込登録</b></font><font color="#c00000" size="1" style="margin-left: 1.5em;">*は必須項目です </font><br>
        <br>
      </p>
      
      <!-- text:mail -->
      <div class="form-fieldset form-fieldset-email required" data-ng-words="">
        <legend>
   <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td style="width: 20px;" align="left" valign="top">1.</td>
      <td>メールアドレス（ご記入いただいたアドレスに視聴用URLが届きます）*</td>
    </tr>
   </table>
    </legend>
        <div class="form-group">
          <div class="form-row">
            <div class="col-12 form-fieldgroup em-mr-lft">
              <input class="form-control form-email" name="email_name" type="email" id="email_name" size="30" placeholder="info@example.com" autocapitalize="off"  required>
              <div class="invalid-feedback"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-fieldset form-fieldset-email required" data-ng-words="">
        <legend style="margin-left: 20px;">メールアドレス（確認用）*</legend>
        <div class="form-group">
          <div class="form-row">
            <div class="col-12 form-fieldgroup em-mr-lft">
              <input class="form-control form-email" name="confirm_email_name" type="email" id="confirm_email_name" size="30" placeholder="info@example.com" autocapitalize="off"  required>
              <div class="invalid-feedback"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- radio -->
      <div class="form-fieldset form-fieldset-radiobutton required">
        <legend>2. 性別*</legend>
        <div class="form-group form-fieldgroup em-mr-lft">
          <div class="row">
            <div class="col-md-12">
              <label for="gender_0" class="form-label-radio-checkbox">
                <input class="form-control" name="gender" id="gender_0" type="radio" value="0" required>
                男性</label>
            </div>
            <div class="col-md-12">
              <label for="gender_1" class="form-label-radio-checkbox">
                <input class="form-control" name="gender" id="gender_1" type="radio" value="1" required>
                女性</label>
            </div>
            <div class="col-md-12">
              <label for="gender_2" class="form-label-radio-checkbox">
                <input class="form-control" name="gender" id="gender_2" type="radio" value="2" required>
                その他</label>
            </div>
          </div>
          <div class="invalid-feedback"></div>
        </div>
      </div>
      
      <!-- radio -->
      <div class="form-fieldset form-fieldset-radiobutton required">
        <legend>3. 年代*</legend>
        <div class="form-group form-fieldgroup em-mr-lft">
          <div class="row">
            <div class="col-md-12">
              <label for="age_0" class="form-label-radio-checkbox">
                <input class="form-control" name="age" id="age_0" type="radio" value="0" required>
                20歳未満</label>
            </div>
            <div class="col-md-12">
              <label for="age_1" class="form-label-radio-checkbox">
                <input class="form-control" name="age" id="age_1" type="radio" value="1" required>
                20歳～29歳</label>
            </div>
            <div class="col-md-12">
              <label for="age_2" class="form-label-radio-checkbox">
                <input class="form-control" name="age" id="age_2" type="radio" value="2" required>
                30歳～39歳</label>
            </div>
            <div class="col-md-12">
              <label for="age_3" class="form-label-radio-checkbox">
                <input class="form-control" name="age" id="age_3" type="radio" value="3" required>
                40歳～49歳</label>
            </div>
            <div class="col-md-12">
              <label for="age_4" class="form-label-radio-checkbox">
                <input class="form-control" name="age" id="age_4" type="radio" value="4" required>
                50歳～59歳</label>
            </div>
            <div class="col-md-12">
              <label for="age_5" class="form-label-radio-checkbox">
                <input class="form-control" name="age" id="age_5" type="radio" value="5" required>
                60歳以上</label>
            </div>
          </div>
          <div class="invalid-feedback"></div>
        </div>
      </div>
      
      <!-- list:pref -->
      <div class="form-fieldset form-fieldset-prefecture required">
        <legend>4. 居住地* </legend>
        <div class="form-group form-fieldgroup em-mr-lft">
          <select class="form-control" name="residence"  required>
            <option value="">選択してください</option>
            <option value="0">北海道</option>
            <option value="1">青森県</option>
            <option value="2">岩手県</option>
            <option value="3">宮城県</option>
            <option value="4">秋田県</option>
            <option value="5">山形県</option>
            <option value="6">福島県</option>
            <option value="7">茨城県</option>
            <option value="8">栃木県</option>
            <option value="9">群馬県</option>
            <option value="10">埼玉県</option>
            <option value="11">千葉県</option>
            <option value="12">東京都</option>
            <option value="13">神奈川県</option>
            <option value="14">新潟県</option>
            <option value="15">富山県</option>
            <option value="16">石川県</option>
            <option value="17">福井県</option>
            <option value="18">山梨県</option>
            <option value="19">長野県</option>
            <option value="20">岐阜県</option>
            <option value="21">静岡県</option>
            <option value="22">愛知県</option>
            <option value="23">三重県</option>
            <option value="24">滋賀県</option>
            <option value="25">京都府</option>
            <option value="26">大阪府</option>
            <option value="27">兵庫県</option>
            <option value="28">奈良県</option>
            <option value="29">和歌山県</option>
            <option value="30">鳥取県</option>
            <option value="31">島根県</option>
            <option value="32">岡山県</option>
            <option value="33">広島県</option>
            <option value="34">山口県</option>
            <option value="35">徳島県</option>
            <option value="36">香川県</option>
            <option value="37">愛媛県</option>
            <option value="38">高知県</option>
            <option value="39">福岡県</option>
            <option value="40">佐賀県</option>
            <option value="41">長崎県</option>
            <option value="42">熊本県</option>
            <option value="43">大分県</option>
            <option value="44">宮崎県</option>
            <option value="45">鹿児島県</option>
            <option value="46">沖縄県</option>
            <option value="47">その他</option>
          </select>
          <div class="invalid-feedback"></div>
        </div>
      </div>
      
      <!-- radio -->
      <div class="form-fieldset form-fieldset-radiobutton required">
        <legend>
   <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td style="width: 20px;" align="left" valign="top">5.</td>
      <td>本イベントについてどこで知りましたか？*</td>
    </tr>
   </table>
    </legend>
        <div class="form-group form-fieldgroup em-mr-lft">
          <div class="row">
            <div class="col-md-12">
              <label for="event_name_0" class="form-label-radio-checkbox">
                <input class="form-control" name="event_name" id="event_name_0" type="radio" value="0" required>
                LINE</label>
            </div>
            <div class="col-md-12">
              <label for="event_name_1" class="form-label-radio-checkbox">
                <input class="form-control" name="event_name" id="event_name_1" type="radio" value="1" required>
                Instagram</label>
            </div>
            <div class="col-md-12">
              <label for="event_name_2" class="form-label-radio-checkbox">
                <input class="form-control" name="event_name" id="event_name_2" type="radio" value="2" required>
                Twitter</label>
            </div>
            <div class="col-md-12">
              <label for="event_name_3" class="form-label-radio-checkbox">
                <input class="form-control" name="event_name" id="event_name_3" type="radio" value="3" required>
                Web検索</label>
            </div>
            <div class="col-md-12">
              <label for="event_name_4" class="form-label-radio-checkbox">
                <input class="form-control" name="event_name" id="event_name_4" type="radio" value="4" required>
                知り合いに聞いて</label>
            </div>
            <div class="col-md-12">
              <label for="event_name_5" class="form-label-radio-checkbox">
                <input class="form-control" name="event_name" id="event_name_5" type="radio" value="5" required>
                医師に勧められて</label>
            </div>
            <div class="col-md-12">
              <label for="event_name_6" class="form-label-radio-checkbox">
                <input class="form-control" name="event_name" id="event_name_6" type="radio" value="6" required>
                その他</label>
            </div>
          </div>
          <div class="invalid-feedback"></div>
        </div>
      </div>
      
      <!-- checkbox -->
      <div class="form-fieldset form-fieldset-checkbox optional">
        <legend>6. 頭痛が起きる頻度</legend>
        <div class="form-group form-fieldgroup em-mr-lft">
          <div class="row">
            <div class="col-md-12">
              <label for="headache_freq_0" class="form-label-radio-checkbox" style="margin-bottom: 0;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
     <tr>
       <td style="width: 5%;" align="left" valign="top">
        <input class="form-control" name="headache_freq" id="headache_freq_0" type="radio" value="0" ></td>
       <td>３ヵ月の間に、頭痛になることは無かった</td>
     </tr>
    </table>
                
                </label>
            </div>
            <div class="col-md-12">
              <label for="headache_freq_1" class="form-label-radio-checkbox"  style="margin-bottom: 0;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
     <tr>
       <td style="width: 5%;" align="left" valign="top">
        <input class="form-control" name="headache_freq" id="headache_freq_1" type="radio" value="1" ></td>
       <td>３ヵ月の間に、１～２日程度頭痛になった</td>
     </tr>
    </table> 
                
                </label>
            </div>
            <div class="col-md-12">
              <label for="headache_freq_2" class="form-label-radio-checkbox"  style="margin-bottom: 0;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
     <tr>
       <td style="width: 5%;" align="left" valign="top">
        <input class="form-control" name="headache_freq" id="headache_freq_2" type="radio" value="2" ></td>
       <td>月に1日程度、頭痛になることがあった </td>
     </tr>
    </table> 
                
                </label>
            </div>
            <div class="col-md-12">
              <label for="headache_freq_3" class="form-label-radio-checkbox"  style="margin-bottom: 0;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
     <tr>
       <td style="width: 5%;" align="left" valign="top">
        <input class="form-control" name="headache_freq" id="headache_freq_3" type="radio" value="3" ></td>
       <td>週に1日程度、頭痛になった </td>
     </tr>
    </table> 
                
               </label>
            </div>
            <div class="col-md-12">
              <label for="headache_freq_4" class="form-label-radio-checkbox"  style="margin-bottom: 0;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
     <tr>
       <td style="width: 5%;" align="left" valign="top">
        <input class="form-control" name="headache_freq" id="headache_freq_4" type="radio" value="4" ></td>
       <td>週に２～３日程度、頭痛になった </td>
     </tr>
    </table>
                
                </label>
            </div>
            <div class="col-md-12"> 
              <label for="headache_freq_5" class="form-label-radio-checkbox"  style="margin-bottom: 0;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
     <tr>
       <td style="width: 5%;" align="left" valign="top">
        <input class="form-control" name="headache_freq" id="headache_freq_5" type="radio" value="5" ></td>
       <td>週に４日以上、頭痛になることがあった </td>
     </tr>
    </table>
                
                </label>
            </div>
          </div>
          <!--          <div class="invalid-feedback"></div>--> 
        </div>
      </div>
      
      <!-- radio -->
      <div class="form-fieldset form-fieldset-radiobutton optional">
        <legend>
   <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td style="width: 20px;" align="left" valign="top">7.</td>
      <td>医師から片頭痛と診断されたことがありますか？</td>
    </tr>
   </table>
    </legend>
        <div class="form-group form-fieldgroup em-mr-lft">
          <div class="row">
            <div class="col-md-12">
              <label for="doctor_diagnose_0" class="form-label-radio-checkbox">
                <input class="form-control" name="doctor_diagnose" id="doctor_diagnose_0" type="radio" value="0" >
                はい</label>
            </div>
            <div class="col-md-12">
              <label for="doctor_diagnose_1" class="form-label-radio-checkbox">
                <input class="form-control" name="doctor_diagnose" id="doctor_diagnose_1" type="radio" value="1" >
                いいえ</label>
            </div>
          </div>
          <!--          <div class="invalid-feedback"></div>--> 
        </div>
      </div>
      
      <!-- radio -->
      <div class="form-fieldset form-fieldset-radiobutton optional">
        <legend>
   <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td style="width: 20px;" align="left" valign="top">8.</td>
      <td>頭痛専門医にかかったことはありますか？</td>
    </tr>
   </table>
    </legend>
        <div class="form-group form-fieldgroup em-mr-lft">
          <div class="row">
            <div class="col-md-12">
              <label for="headache_specialist_0" class="form-label-radio-checkbox">
                <input class="form-control" name="headache_specialist" id="headache_specialist_0" type="radio" value="0" >
                はい</label>
            </div>
            <div class="col-md-12">
              <label for="headache_specialist_1" class="form-label-radio-checkbox">
                <input class="form-control" name="headache_specialist" id="headache_specialist_1" type="radio" value="1" >
                いいえ</label>
            </div>
          </div>
          <!--          <div class="invalid-feedback"></div>--> 
        </div>
      </div>
      
      <!-- textarea -->
      <div class="form-fieldset form-fieldset-textarea optional"  data-ng-words="">
        <legend>
   <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td style="width: 20px;" align="left" valign="top">9.</td>
      <td>当日先生方へのご質問事項がありましたら自由にご記入ください。</td>
    </tr>
   </table>
    </legend>
        <div class="form-group form-fieldgroup em-mr-lft"> 
   <small class="form-text"> 
    <ul>
     <li>
     お寄せいただいたご質問に関しましては、イベント当日に先生方のご講演やパネルディスカッションの中で先生方から可能な限りご回答いただきます。時間の都合上、すべてのご質問に回答できない場合があること、予めご了承ください。 </li><br>
     <li>
     特定の医薬品、またはその効能や安全性についての質問には、本イベントの中では回答出来かねます。お近くの医療機関や主治医の先生にご相談ください。 </li>
    </ul>
          </small>
          <textarea class="form-control" name="questions_textarea" cols="60" rows="5" data-pattern="1"  autocapitalize="off" style="margin-top: 1em;"></textarea>
          <div class="invalid-feedback"></div>
        </div>
      </div>
      <div class="form-buttons">
        <input class="btn btn-block btn-default form-btn-submit" name="submit" type="submit" id="submit" value="お申込内容の確認" style="font-weight: bold;">
      </div>
      
      <!-- charset --> 
      <!-- charset -->
      
    </form>
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
<script>
    var radioInput = [
   'gender',
   'age',
   'event_name',
   'headache_freq',
   'doctor_diagnose',
   'headache_specialist',
 ];
 var emailInput = $("input[type='email']");

 var email1 = $('input[name="email_name"]');
 var email2 = $('input[name="confirm_email_name"]');

 var select = $("select[name='residence']");

 $('.formmailer-form').submit(function (event) {
   var err = false;
   if (validateRadio(radioInput)) err = true;
   if (validateSelect(select)) err = true;
   if (validateEmptyEmail(email1, email2)) err = true;
   if (
  email1.val().length > 0 &&
  email2.val().length > 0 &&
  matchEmails(email1, email2)
   )
  err = true;

   if (err) {
  // console.log($('.invalid-feedback:not(:empty):first'));
  $('html, body').animate(
    {
   scrollTop: parseInt(
     $('.invalid-feedback:not(:empty):first').offset().top - 150
   ),
    },
    1000
  );
  return false;
   }
 });

 $('input[type="radio"], select').on('click', function (event) {
   $(this).closest('.form-fieldgroup').find('.invalid-feedback').text('');
 });

 $('input[type="email"]').on('keyup', validateEmail);
 $('input[type="email"]').on('keypress', function (e) {
   if (e.which === 32) return false;
 });
// $('input[name="confirm_email_name"]').bind('keyup', function () {
//   return matchEmails(email1, $(this));
// });
 
 $('input[name="confirm_email_name"], input[name="email_name"]').bind(
   'keyup',
   function () {
  var conEmailLen = $('input[name="confirm_email_name"]').val().length;
  console.log(conEmailLen);
  if (conEmailLen > 0) return matchEmails(email1, email2);
   }
 );

 %%[IF @IsExisting_err == 'true' THEN]%%
 /* IsExisting Email :: START */
    //preventing from form submission if email already exist
   if ($('input[name="select_info"]:checked').val() == 'Register_member_email_address')
    {
        $("#EmailAlreadyExists").show();
        $("#registration-form").submit(function(e){e.preventDefault();});
        return false;
    }

    //redirecting to thankyou by hardcoding
    if ($('input[name="select_info"]:checked').val() == 'not_register_member')
    {
        window.location.href = 'https://www.aimovig.jp/';
        return true;
    }                           
  /* IsExisting Email :: END */
%%[ENDIF]%%

 function showErr(input, error) {
   input.closest('.form-fieldgroup').find('.invalid-feedback').text(error);
 }

 function validateRadio(radioInput) {
   var error = false;
   radioInput.forEach(function (inp) {
  var input = $("input[name='" + inp + "']");
  var inputChecked = $("input[name='" + inp + "']:checked");
  if (inputChecked.length === 0 && input.closest('.form-fieldgroup')) {
    input
   .closest('.form-fieldgroup')
   .find('.invalid-feedback')
   .text('オプションを1つ選択してください');
    error = true;
  } else {
    input.closest('.form-fieldgroup').find('.invalid-feedback').text('');
  }
   });
   return error;
 }
 function validateSelect(select) {
   var err = false;
   if (select.val().length == 0) {
  showErr(select, 'オプションを1つ選択してください');
  err = true;
   } else {
  showErr(select, '');
  err = false;
   }
   return err;
 }

 function validateEmptyEmail(email1, email2) {
   var err = false;
   var e1val = email1.val().length;
   var e2val = email2.val().length;
   if (e1val == 0 || e2val == 0) {
  err = true;
  if (e1val == 0) showErr(email1, 'メールアドレスを入力してください');
  if (e2val == 0) showErr(email2, 'メールアドレスを入力してください');
  if (e1val > 0 && e2val == 0) {
    showErr(email1, '');
    showErr(email2, '確認用メールアドレスを入力してください');
  }
   } else {
  err = false;
  showErr(email1, '');
   }
   return err;
 }

 function matchEmails(email1, email2) {
   var err = false;
   if (
  email1.val().length > 0 &&
  email2.val().length > 0 &&
  email1.val() !== email2.val()
   ) {
  showErr(email2, 'メールアドレスと確認用メールアドレスが一致しません');
  err = true;
   } else {
  showErr(email2, '');
  err = false;
   }
   return err;
 }

 function validateEmail() {
   var error = false;
   var input = $(this);
   var regxMatch =
  /^(([^-\+=_#!$%^&*{}'`~?|/<>()[\]\.,;:\s@\"]+((-|_|\.|\+)[^-\+=_#!$%^&*{}'`~?|/<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^-\+_=#!$%^&*{}'`~?|/<>()[\]\.,;:\s@\"]+(\.|_|-|\+))+[^-\+_=#!$%^&*{}'`~?|/<>()[\]\.,;:\s@\"]{2,})$/i;
   if (
  (input.val().length > 0 && !input.val().match(regxMatch)) ||
  input.val().indexOf('++') >= 0 ||
  input.val().indexOf('+_') >= 0 ||
  input.val().indexOf('+.') >= 0 ||
  input.val().indexOf('+@') >= 0 ||
  input.val().indexOf('+-') >= 0
   ) {
  input
    .closest('.form-fieldgroup')
    .find('.invalid-feedback')
    .text('有効なメールアドレスを入力してください');
  error = true;
   } else {
  input.closest('.form-fieldgroup').find('.invalid-feedback').text('');
   }
   return error;
 }
   </script>
</html>