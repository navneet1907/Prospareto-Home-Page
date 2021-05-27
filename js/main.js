const dev = false;
const developer = {
  customerUrl: "https://customer.itmplayground.in",
  expertUrl: "https://expert.itmplayground.in",
  getApp: "https://i33sstzhz5.execute-api.ap-south-1.amazonaws.com/emailLink",
};
const production = {
  customerUrl: "https://customer.prospareto.com",
  expertUrl: "https://expert.prospareto.com",
  getApp: "https://i33sstzhz5.execute-api.ap-south-1.amazonaws.com/emailLink",
};
const getAppUrl = dev ? developer.getApp : production.getApp;
function openLogins(){
  document.getElementById("drop-down").style.display = "flex";
}
function closeLogins(){
  document.getElementById("drop-down").style.display = "none";
}
function openServices(){
  document.getElementById("Services").style.display = "flex";
}
function closeServices(){
  document.getElementById("Services").style.display = "none";
}


function goToExplore() {
  window.location.href = dev
    ? `${developer.customerUrl}/explore`
    : `${production.customerUrl}/explore`;
}
function goToFeeds() {
  window.open('https://blog.prospareto.com/','_blank');
}
function goToLearn(){
  window.open('https://edu.prospareto.com/','_blank');
}

function goToContact() {
  window.location.href = dev
    ? `${developer.customerUrl}/contact`
    : `${production.customerUrl}/contact`;
}
function goToCustomerLogin() {
  window.location.href = dev
    ? `${developer.customerUrl}/login`
    : `${production.customerUrl}/login`;
}
function goToExpertLogin() {
  window.location.href = dev
    ? `${developer.expertUrl}/login`
    : `${production.expertUrl}/login`;
}
function goToFaq() {
  window.location.href = dev
    ? `${developer.customerUrl}/faq`
    : `${production.customerUrl}/faq`;
}
function goToTermsExpl() {
  window.location.href = dev
    ? `${developer.customerUrl}/terms`
    : `${production.customerUrl}/terms`;
}
function goToDisclouse() {
  window.location.href = dev
    ? `${developer.customerUrl}/disclosure`
    : `${production.customerUrl}/disclosure`;
}
function goToSignup() {
  window.location.href = dev
    ? `${developer.customerUrl}/signup`
    : `${production.customerUrl}/signup`;
}
function removeVedio(){
  const vedioCon = document.getElementById('video-cont');
  const videoFrame = document.getElementById('ifarme');
  videoFrame.src='';
  vedioCon.style.display = 'none';
}
function loadVideo(){
  const vedioCon = document.getElementById('video-cont');
  const videoFrame = document.getElementById('ifarme');
  videoFrame.src='https://www.youtube.com/embed/Z2LAmmWSKXM?autoplay=1;rel=0';
  vedioCon.style.display = 'flex';
}
function gotoconsulting(){
  window.location.href = dev
  ? `${developer.customerUrl}/consulting`
  : `${production.customerUrl}/consulting`;
}
function gotoriskprofiler(){
  window.location.href = dev
  ? `${developer.customerUrl}/productMatching`
  : `${production.customerUrl}/productMatching`;
}
// const somegreenFunction = (color,btn) =>{
//   const btnSubScreen = document.querySelectorAll("#btn-sub-screen")
//   const ArrBtnSubScreen = Array.from(btnSubScreen);
//   for(let i=0;i<ArrBtnSubScreen.length;i++){
//     if(i==btn-1){
//       ArrBtnSubScreen[i].classList.add(color);
//     }else{
//       ArrBtnSubScreen[i].classList.remove('text-green');
//       ArrBtnSubScreen[i].classList.remove('text-purple');
//       ArrBtnSubScreen[i].classList.remove('text-darkgreen');
//       ArrBtnSubScreen[i].classList.remove('text-orange');
//     }
//   }
//   // var element = document.getElementById(btn);

// }

// var divs = ["Div1", "Div2", "Div3", "Div4","Div5"];
//     var visibleDivId = null;
// function divVisibility(divId,color,btn) {
//   if(visibleDivId == divId) {
//     visibleDivId = 'Div1';
//   } else {
//     visibleDivId = divId;
//     somegreenFunction(color,btn);
//   }
//   hideNonVisibleDivs();
  
// }
//     function hideNonVisibleDivs() {
//       var i, divId, div;
//       for(i = 0; i < divs.length; i++) {
//         divId = divs[i];
//         div = document.getElementById(divId);
//         if(visibleDivId === divId) {
//           div.style.display = "flex";
//         } else {
//           div.style.display = "none";
//         }
//       }
//     }


let fabCont = document.getElementsByClassName("fab-cont")[0];
let fabCloseBtn = document.getElementsByClassName("fab-close-btn")[0];
let fabBtn = document.getElementsByClassName("fab-contact")[0];
let fabContactIcon = document.getElementById("fab-contact-ico");
let footer = document.getElementsByClassName("footer")[0];
function contactFab() {
  fabCont.classList.toggle("hidden");
  fabCloseBtn.classList.toggle("hidden");
  fabContactIcon.classList.toggle("hidden");
}
document.addEventListener("click", function (event) {
  if (event.target.id === "mob-menu") {
    document.getElementById("drop-down-mob").style.display = "flex";
  } else {
    document.getElementById("drop-down-mob").style.display = "none";
  }
});
window.addEventListener('load', function() {
  for (i = 0; i < document.querySelectorAll('a[href*="tel:"]').length; i++) {
    document.querySelectorAll('a[href*="tel:"]')[i].onclick = function() {
    gtag('event', 'conversion', {'send_to': 'AW-451279500/PUH8CNHjt_YBEIz1l9cB'});
    
    }
  }
  for (j = 0; j < document.querySelectorAll('a[href*="mailto:"]').length; j++) {
    document.querySelectorAll('a[href*="mailto:"]')[j].onclick = function() {
    gtag('event', 'conversion', {'send_to': 'AW-451279500/1KoZCO7Fw_YBEIz1l9cB'});
    }
  }
  for (k = 0; k < document.querySelectorAll('[id="try"]').length; k++) {
    document.querySelectorAll('[id="try"]')[k].onclick = function() {
    goToExplore()
    }
  }
  for (k = 0; k < document.querySelectorAll('[id="letcons"]').length; k++) {
    document.querySelectorAll('[id="letcons"]')[k].onclick = function() {
      gotoconsulting();
    }
  }
  for (k = 0; k < document.querySelectorAll('[id="explore"]').length; k++) {
    document.querySelectorAll('[id="explore"]')[k].onclick = function() {
    // gtag('event', 'conversion', {'send_to': 'AW-451279500/ymuUCLG3o_YBEIz1l9cB'});
    goToExplore()
    }
  }
})