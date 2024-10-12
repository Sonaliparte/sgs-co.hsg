function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
     $("#name").text(profile.getName());
     $("#email").text(profile.getEmail());
     $("#image").attr('src', profile.getImageUrl());
     $(".data").css("display","block");
     $(".g-signin2").css("display","none");
}

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("You have been signed out successfully");
      $(".g-signin2").css("display","block");
      $(".data").css("display","none");
    });
  }

  document.addEventListener('DOMContentLoaded', init);
  function init(){
    let query = window.matchMedia("(max-width:980px)");

 if(query.matches){
  document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".dropdown").style.display = "flex";
  })

  document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".dropdown").style.display = "none";
  })
}
else{
  document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".dropdown").style.display = "none";
  })

  document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".dropdown").style.display = "none";
  })
}
}
  