%%[
set @guid = Replace(GUID(),'-','')
set @charString = Substring(@guid,1,7)
]%%

string: %%=v(@charString)=%%