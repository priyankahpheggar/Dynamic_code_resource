%%[
SET @guid = Replace(GUID(),'-','')
SET @Order_ID = Substring(@guid,1,6)
SET @Order_ID = Concat("AMV_",@Order_ID)
]%%
%%=v(@Order_ID)=%%