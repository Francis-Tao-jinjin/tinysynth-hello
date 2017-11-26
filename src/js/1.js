synth = new WebAudioTinySynth({voices:64});

for(var i=0;i<128;++i){
  var o=document.createElement("option");
  o.innerHTML=synth.getTimbreName(0,i);
  document.getElementById("prog").appendChild(o);
}
setInterval(function(){
  var st=synth.getPlayStatus();
  document.getElementById("status").innerHTML="Play:"+st.play+"  Pos:"+st.curTick+"/"+st.maxTick;
},100);