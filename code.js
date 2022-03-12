var password;
setScreen("LockedScreen");
onEvent("UnlockButton", "click", function( ) {
  setScreen("PasswordTyping");
});
onEvent("Enterbutton", "click", function( ) {
  password = getText("typehere");
  if (password == "Piyush Landge") {
    setScreen("UnlockScreen");
    playSound("assets/category_female_voiceover/you_win_female.mp3", false);
  } else {
    setText("typehere", "Wrong Password");
    setProperty("typehere", "text", "Wrong Password");
    setProperty("typehere", "text-color", "red");
    playSound("assets/category_female_voiceover/you_lose_female.mp3", false);
  }
});
onEvent("LockButton", "click", function( ) {
  setScreen("LockedScreen");
});
