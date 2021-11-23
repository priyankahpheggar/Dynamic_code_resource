%%[
/* SET @cars = Lookup("DE_name", "cars", "Email", _subscriberkey) */
SET @cars = "Alto   Tiago   Swift   Duster"
SET @query = "Swift"
IF (IndexOf(@cars,@query)) THEN
Output(concat("Already exist"))
ELSE
Output(concat("Not exist"))
ENDIF
]%%