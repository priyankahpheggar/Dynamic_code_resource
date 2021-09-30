<script runat="server">
Platform.Load("Core","1.1");
try{
</script>

%%[
set @upsertCount = upsertData("QWR",1,"Email","raja.karuppaiya@indegene.com","FirstName","raja","LastName","Karuppaiya")
]%%
UpsertCount: %%=v(@upsertCount)=%%

<script runat="server">
} catch(Error) { Write(Stringify(Error)); }
</script>