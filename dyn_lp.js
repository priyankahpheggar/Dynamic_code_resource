<script runat="server">
Platform.Load("Core","1.1");
Write("Hurray \n");
</script>

%%[
    SET @s1 = "I am a AMPscript var"
]%%
<script runat="server">
var s = Variable.GetValue("@s1");
Write(s);

</script>
