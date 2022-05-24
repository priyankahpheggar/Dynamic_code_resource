%%[

    set @dateString = "May 25 2022 12:00AM"
    set @monthNumber = FormatDate(@dateString,"MM")
    set @dayNumber = FormatDate(@dateString,"dd")
    set @yearFull = FormatDate(@dateString,"YYYY")
    set @hour = FormatDate(@timeString,"","hh")
    set @minute = FormatDate(@timeString,"","mm")
    set @seconds = FormatDate(@timeString,"","ss")
    set @AMPM = FormatDate(@timeString,"","tt")
    output(concat(@monthNumber,'/',@dayNumber,'/',@yearFull,' ',@hour,':',@minute,':',@seconds,' ',@AMPM))
     ]%%
