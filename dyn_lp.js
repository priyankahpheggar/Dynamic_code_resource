%%[
set @guid = Replace(GUID(),'-','0')
set @charString = Substring(@guid,1,7)
]%%

string: %%=v(@charString)=%%