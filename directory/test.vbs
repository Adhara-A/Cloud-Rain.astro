dim str
str=msgbox("是否关掉电脑？", vbYesNo, "No")
if str=vbNo then
	msgbox("null")
else
	msgbox"关机中"
	set sh=wscript.createobject("wscript.shell")
	sh.run"shutdown -s -t 300"
end if
