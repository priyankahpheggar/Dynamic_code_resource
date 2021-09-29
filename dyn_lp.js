%%[
    SET @url = Concat('https://cloud.amgenmail.com/Migraine_ControlCollege_Application?ee=true&Q1=',@EmailAddress_E,'&Q2=',@Gender_E,'&Q3=',@Age_E,'&Q4=',@Residence_E,'&Q5=',@Q5_E,'&Q6=',@Q6_E,'&Q7=',@Q7_E,'&Q8=',@Q8_E,'&Q9=',@Q9_E)
       SET @Eurl = URLEncode(@url)
       Redirect(@Eurl)
]%%