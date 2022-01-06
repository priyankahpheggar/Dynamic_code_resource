%%[
    SET @today = DateAdd(Now(), '-4','h')

    OutputLine(FormatDate(@today,'YYYY-MM-DD','HH:MM:SS.MMM','en-US'))
]%%