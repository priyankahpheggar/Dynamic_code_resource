<script runat="server">
Platform.Load("Core","1.1");
Write("Hurray");

try {
    var ssvar = "I am ssjs var";
</script>

%%[
    SET @s1 = "I am a AMPscript var"
]%%
<script runat="server">
var s = Variable.GetValue("@s1");
Write(s);
}

Write("")
 catch (error) {
    Write(Stringify(error));
}
</script>
