<!DOCTYPE html>
<html>
  <head>
    <meta name="ROBOTS" content="INDEX,FOLLOW" />
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <title>ベーチェット病患者</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style>
      * {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue,
          "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
          "游ゴシック Medium", Yu Gothic Medium, "メイリオ", Meiryo, Osaka,
          "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
      }
      body {
        background-color: #f5f5f5;
      }
      .wrapper {
        background-color: #ffffff;
        border-radius: 0.35rem;
        border: none;
        background: #ffffff;
        border: #e0e0e0 solid 1px;
        box-sizing: border-box;
        box-shadow: 0 0 0.2rem rgb(0 0 0 / 25%);
        margin: 2rem auto;
        padding: 2rem;
        max-width: 720px;
        width: 100%;
      }
     
      .heading h3 {
      font-size: 1.5rem;
        text-align:center;
      }
      p.para {
        margin: 1.5rem 0 1rem;
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
      .order-list {
       padding-left:1rem;
      }
      ul.unorder-list li input {
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
        padding: 0.5rem;
        border-color: #d9d9d9;
        border-radius: 5px;
        width: 97%;
      }
      ol.order-list li {
        margin: 1.4rem 0;
      }
      .textarea {
        margin-top: 1rem;
      }
      input[type="checkbox"],
      input[type="radio"] {
        margin-right: 10px;
      }
      button {
        padding: 0.5rem 2.5rem;
        background: #0063c3;
        color: #ffffff;
        font-size: 1rem;
        border-radius: 10px;
        border: 1px solid #0063c3;
        cursor: pointer;
        width: 100%;
      }
      .error {
        background: #e53935;
        color: #ffffff;
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
      }
      @media screen and (max-width: 700px) {
        .order-list {
          padding-left: 1rem;
        }
      }
      @media screen and (max-width: 550px) {
        textarea {
          width: 94%;
        }
      }
    </style>
  </head>
  <body>
  %%[
IF RequestParameter("submitted") == true THEN
SET @q1 = RequestParameter("select_info")
SET @q1_text = RequestParameter("text")
SET @q2 = RequestParameter("online_event")
SET @q3 = RequestParameter("reason_answer2")
SET @q4 = RequestParameter("session")
SET @q5 = RequestParameter("themes_future")
SET @q6 = RequestParameter("Request_q6")


IF (@q1 == "Behcet_disease_patient_himself" OR @q1 == "Family_Behcet_disease_patients" OR @q1 == "Other")
AND (@q2 == "Very_helpful" OR @q2 == "Helpful" OR @q2 == "Normal" OR @q2 == "Not_so_helpful" OR @q2 == "Not_helpful") THEN
InsertDE("Behcets_Disease_Questionnaire","q1", @q1,"q1_text", @q1_text,"q2", @q2,"q3", @q3,"q4", @q4,"q5", @q5,"q6", @q6)
]%%
Thank you for submitting your response
%%[ELSE]%%
    <div class="wrapper">
      <form
        action="%%=RequestParameter('PAGEURL')=%%"
        method="get"
        accept-charset="utf-8"
        id="disease-form"
      >
        <input type="hidden" name="submitted" value="true">
        <div class="heading">
          <h3>ベーチェット病患者サミットに関するアンケート</h3>
        </div>
        <p class="para">
          本日はお忙しい中、オンラインイベントにご参加いただきありがとうございました。
          恐れ入りますが、本日のオンラインイベントについてご意見をお聞かせください。今後のイベント開催のための参考にさせていただきます
        </p>
        <hr />
        <ol class="order-list contains-other">
          <li>
            視聴された方について下記の中からご選択ください
            <span class="error">必須</span>
            <ul class="unorder-list unorder-radio">
              <li>
                <label for="Behcet_disease_patient_himself"
                  ><input
                    type="radio"
                    name="select_info"
                    value="Behcet_disease_patient_himself"
                    id="Behcet_disease_patient_himself"
                    data-text="others-text-1"
                  />
                   ベーチェット病患者さんご本人</label
                >
              </li>
              <li>
                <label for="Family_Behcet_disease_patients">
                  <input
                    type="radio"
                    name="select_info"
                    value="Family_Behcet_disease_patients"
                    id="Family_Behcet_disease_patients"
                    data-text="others-text-1"
                  />
                   ベーチェット病患者さんのご家族
                </label>
              </li>
              <li>
                <label for="Other">
                  <input
                    type="radio"
                    name="select_info"
                    value="Other"
                    id="Other"
                    class="radio-other"
                    data-text="others-text-1"
                  />
                  その他
                </label>
              </li>
            </ul>
            <div class="error-text" style="display: none" id="error-1">
              オプションを1つ選択してください
            </div>
          </li>
          <div class="others-text" style="display: none">
            <p>視聴される方：その他 <span class="optional">任意</span></p>
            <label for="">
              <input
                class="other-text-input"
                id="others-text-1"
                data-error="error-1"
                type="text" name="text"
            /></label>
          </div>
          <li>
            本日のオンラインイベントの内容はいかがでしたか？　（もっとも当てはまるものひとつを選択ください<span
              class="error"
              >必須</span
            >
            <ul class="unorder-list unorder-radio">
              <li>
                <label for="Very_helpful"
                  ><input
                    type="radio"
                    name="online_event"
                    value="Very_helpful"
                    id="Very_helpful"
                  />
                   とても参考になった
                </label>
              </li>
              <li>
                <label for="Helpful">
                  <input
                    type="radio"
                    name="online_event"
                    value="Helpful"
                    id="Helpful"
                  />
                  参考になった
                </label>
              </li>
              <li>
                <label for="Normal">
                  <input
                    type="radio"
                    name="online_event"
                    value="Normal"
                    id="Normal"
                  />
                   普通
                </label>
              </li>
              <li>
                <label for="Not_so_helpful">
                  <input
                    type="radio"
                    name="online_event"
                    value="Not_so_helpful"
                    id="Not_so_helpful"
                  />
                   あまり参考にならなかった
                </label>
              </li>
              <li>
                <label for="Not_helpful">
                  <input
                    type="radio"
                    name="online_event"
                    value="Not_helpful"
                    id="Not_helpful"
                  />
                   参考にならなかった
                </label>
              </li>
            </ul>
            <div class="error-text" style="display: none">
              オプションを1つ選択してください
            </div>
          </li>
          <li>
            質問2.の回答理由を教えてください。
            <div class="textarea">
              <textarea rows="2" style="resize: none" name="reason_answer2"></textarea>
            </div>
          </li>
          <li>
            本日のオンラインイベントで参考になった内容を教えてください。（いくつでも）
            <ul class="unorder-list">
              <li>
                <label for="session1">
                  <input
                    type="checkbox"
                    name="session"
                    value="session1"
                    id="session1"
                  />
                   講演1：ベーチェット病の治療の最近の進歩～内科学的観点から～
                </label>
              </li>
              <li>
                <label for="session2">
                  <input
                    type="checkbox"
                    name="session"
                    value="session2"
                    id="session2"
                  />
                  講演2：ベーチェット病の診断・治療～眼科学的観点から～
                </label>
              </li>
              <li>
                <label for="session3">
                  <input
                    type="checkbox"
                    name="session"
                    value="session3"
                    id="session3"
                  />
                   講演3：ベーチェット病とCOVID-19
                </label>
              </li>
              <li>
                <label for="session4">
                  <input
                    type="checkbox"
                    name="session"
                    value="session4"
                    id="session4"
                  />
                   Q&amp;Aパネルディスカッション
                </label>
              </li>
            </ul>
          </li>
          <li>
            今後、ベーチェット病に関するイベントで視聴してみたいテーマがありましたら教えてください。
            <div class="textarea">
              <textarea rows="2" style="resize: none" name="themes_future"></textarea>
            </div>
          </li>
          <li>
            その他、ご感想、ご要望などございましたらご記入ください。
            <div class="textarea">
              <textarea rows="2" style="resize: none" name="Request_q6"></textarea>
            </div>
          </li>
        </ol>
        <div class="submit-btn">
          <button type="submit">確認画面へ</button>
        </div>
      </form>
   

    </div>
%%[
ENDIF
ENDIF
]%%

    <script>
      (function (a, m, i, g, o, s) {
        o = a.createElement(g);
        s = a.getElementsByTagName(i)[0];
        o.src = m.origin + m.pathname + "/_t?eventType=CLOUDPAGESVISIT";
        o.width = 0;
        o.height = 0;
        o.style.display = "none";
        s.appendChild(o);
      })(document, window.location, "body", "img");
    </script>

    <script src="https:&#x2F;&#x2F;514009930.collect.igodigital.com&#x2F;collect.js"></script>
    <script>
      if (_etmc && typeof _etmc.push === "function") {
        _etmc.push(["setOrgId", "514009930"]);
        _etmc.push(["trackPageView"]);
      }
    </script>
  </body>
  <script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    crossorigin="anonymous"
  ></script>
  <script>
    //for showing and hiding the other option when checked;
    $(function () {
      $(".contains-other input[type='radio']").on("change", function () {
        var checkedElement = $(this);
        var otherSelector = checkedElement.data("text");
        if (otherSelector) {
          var othersTextArea = $("#" + otherSelector).closest(".others-text");

          if (checkedElement.hasClass("radio-other")) {
            //show the other container
            othersTextArea.css("display", "block");
          } else {
            //hide teh others container
            othersTextArea.css("display", "none");
          }
        }
      });

      var radioBtns = $("ol.order-list").find("input[type='radio']");
      var otherBtns = $("ol.contains-other").find("input.radio-other");

      $(".other-text-input").on("input", function () {
        var currentInputElm = $(this);
        var errorId = currentInputElm.data("error");
        if (currentInputElm.val()) {
          if (errorId) {
            $("#" + errorId).css("display", "none");
          }
        } else {
          if (errorId) {
            $("#" + errorId).css("display", "block");
          }
        }
      });

      //on change handler for radioBtns
      radioBtns.on("change", function () {
        validateRadio(this, "radio-other");
      });
      $("#disease-form").submit(function (e) {
        var isFormValid = true;

        $(".unorder-radio").each(function () {
          var currUnorderContainer = $(this);
          if (
            currUnorderContainer
              .find("input[type='radio']")
              .filter(function () {
                return this.checked;
              }).length === 0
          ) {
            isFormValid = false;
            currUnorderContainer.next(".error-text").css("display", "block");
          } else {
            currUnorderContainer.next(".error-text").css("display", "none");
          }
        });
        otherBtns.each(function () {
          var curBtn = $(this);
          if (curBtn.is(":checked")) {
            if (!validateOtherElm(curBtn)) {
              isFormValid = false;
            }
          }
        });
        if (!isFormValid) {
          e.preventDefault();
        }
      });
    });

    function validateRadio(currenRadio, excludClass) {
      try {
        currenRadio = $(currenRadio);
        if (!currenRadio.hasClass(excludClass)) {
          if (currenRadio.is(":checked")) {
            currenRadio
              .closest(".unorder-list")
              .next(".error-text")
              .css("display", "none");
            return true;
          } else {
            currenRadio
              .closest(".unorder-list")
              .next(".error-text")
              .css("display", "block");
            return false;
          }
        } else {
          return true;
        }
      } catch (err) {
        console.error(err);
        return false;
      }
    }

    function validateOtherElm(otherElm) {
      try {
        otherElm = $(otherElm);
        if (otherElm.is(":checked")) {
          var otherSelector = otherElm.data("text");
          if ($("#" + otherSelector).val()) {
            otherElm
              .closest(".unorder-list")
              .next(".error-text")
              .css("display", "none");
            return true;
          } else {
            otherElm
              .closest(".unorder-list")
              .next(".error-text")
              .css("display", "block");
            return false;
          }
        } else {
          otherElm
            .closest(".unorder-list")
            .next(".error-text")
            .css("display", "block");
          return false;
        }
      } catch (err) {
        console.log(err);
        return false;
      }
    }
  </script>
</html>
