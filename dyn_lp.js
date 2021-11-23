%%[
/* SET @cars = Lookup("DE_name", "cars", "Email", _subscriberkey) */
SET @cars = "Alto   Tiago   Swift   Duster"
SET @query = "Swift"
IF (IndexOf(@cars,@query) > 0) THEN
Output(concat("Already exist ",IndexOf(@cars,@query)))
ELSE
Output(concat("Not exist"))
ENDIF
]%%