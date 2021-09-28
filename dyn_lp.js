%%[
  SET @url = Concat('https://cloud.amgenmail.com/FORM1_test?ee=true&email_name=',@EmailAddress_E,'&gender=',@Gender_E,'&age=',@Age_E,'&residence=',@Residence_E,'&event_name=',@Q5_E,'&headache_freq=',@Q6_E,'&doctor_diagnose=',@Q7_E,'&headache_specialist=',@Q8_E,'&questions_textarea=',@Q9_E)
       Redirect(@url)

]%%