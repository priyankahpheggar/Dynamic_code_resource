%%[

var @dateString, @timeString, @dateISO, @dateRFC, @dateLong, @dateShort, @frFRDate, @monthYear, @yearShort, @yearFull, @monthNameDay, @monthNumber, @monthShortName, @monthFullName, @dayNumber, @dayShortName, @dayFullName, @hour, @minute, @seconds, @milliseconds, @AMPM, @offsetHours, @offsetHoursMinutes

set @dateString = "2017-09-15T06:07:08.1230000-06:00"
set @timeString = "06:08:07.123 AM"

set @dateISO  = FormatDate(@dateString,"iso")
set @dateRFC  = FormatDate(@dateString,"rfc")
set @dateLong  = FormatDate(@dateString,"l")
set @dateShort  = FormatDate(@dateString,"s")
set @frFRDate = properCase(FormatDate(@dateString,"l","","fr-FR"))

set @monthYear = FormatDate(@dateString,"Y")
set @yearShort = FormatDate(@dateString,"YY")
set @yearFull = FormatDate(@dateString,"YYYY")
set @monthNameDay = FormatDate(@dateString,"M")
set @monthNumber = FormatDate(@dateString,"MM")
set @monthShortName = FormatDate(@dateString,"MMM")
set @monthFullName = FormatDate(@dateString,"MMMM")
set @dayNumber = FormatDate(@dateString,"dd")
set @dayShortName = FormatDate(@dateString,"dddd")
set @dayFullName = FormatDate(@dateString,"ddddd")

set @hour = FormatDate(@timeString,"","hh")
set @minute = FormatDate(@timeString,"","mm")
set @seconds = FormatDate(@timeString,"","ss")
set @milliseconds = FormatDate(@timeString,"","MMM")
set @AMPM = FormatDate(@timeString,"","tt")
set @offsetHours = FormatDate(@dateString,"zz")
set @offsetHoursMinutes = FormatDate(@dateString,"zzz")

]%%
dateString: %%=v(@dateString)=%%
<br>dateISO: %%=v(@dateISO)=%%
<br>dateRFC: %%=v(@dateRFC)=%%
<br>dateLong: %%=v(@dateLong)=%%
<br>dateShort: %%=v(@dateShort)=%%
<br>frFRDate: %%=v(@frFRDate)=%%
<br><br>monthYear: %%=v(@monthYear)=%%
<br>yearShort: %%=v(@yearShort)=%%
<br>yearFull: %%=v(@yearFull)=%%
<br>monthNameDay: %%=v(@monthNameDay)=%%
<br>monthNumber: %%=v(@monthNumber)=%%
<br>monthShortName: %%=v(@monthShortName)=%%
<br>monthFullName: %%=v(@monthFullName)=%%
<br>dayNumber: %%=v(@dayNumber)=%%
<br>dayShortName: %%=v(@dayShortName)=%%
<br>dayFullName: %%=v(@dayFullName)=%%
<br><br>timeString: %%=v(@timeString)=%%
<br>hour: %%=v(@hour)=%%
<br>minute: %%=v(@minute)=%%
<br>seconds: %%=v(@seconds)=%%
<br>milliseconds: %%=v(@milliseconds)=%%
<br>AMPM: %%=v(@AMPM)=%%
<br>offsetHours: %%=v(@offsetHours)=%%
<br>offsetHoursMinutes: %%=v(@offsetHoursMinutes)=%%