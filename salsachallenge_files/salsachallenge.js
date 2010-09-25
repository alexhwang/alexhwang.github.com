// Created by iWeb 3.0.1 local-build-20100925

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_4:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_2:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_5:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_3:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,20),url:'salsachallenge_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'salsachallenge_files/stroke_1.png'},{rect:new IWRect(1,-1,151,2),url:'salsachallenge_files/stroke_2.png'},{rect:new IWRect(152,-1,2,2),url:'salsachallenge_files/stroke_3.png'},{rect:new IWRect(152,1,2,20),url:'salsachallenge_files/stroke_4.png'},{rect:new IWRect(152,21,2,2),url:'salsachallenge_files/stroke_5.png'},{rect:new IWRect(1,21,151,2),url:'salsachallenge_files/stroke_6.png'},{rect:new IWRect(-1,21,2,2),url:'salsachallenge_files/stroke_7.png'}],new IWSize(153,22)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('salsachallenge_files/salsachallengeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
