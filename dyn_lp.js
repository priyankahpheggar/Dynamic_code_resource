%%[
SET @today = DateAdd(Now(), '-21','h')
OutputLine(FormatDate(@today,'YYYY-MM-DD','HH:MM:SS','ja-JP'))
]%%