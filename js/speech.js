let SpeechRecognition = window.webkitSpeechRecognition;

/* instantiation speech recognition interface */
let recognition = new SpeechRecognition();
recognition.continuous = false;

/* text display */
let textBox = $('#text-box');
let instructions = $('.instructions');
let Content = '';

/* speech to text conversion = continuous */
recognition.continuous = true;

/* hold all values of speech converted to text */
recognition.onresult = function(event) {
  let current = event.resultIndex;
  let transcript = event.results[current][0].transcript;
    Content += transcript;
    textBox.val(Content);
    handAnimations(transcript);
  };

recognition.onstart = function() { 
  instructions.text('Voice recognition is ON.');
}

recognition.onspeechend = function() {
  instructions.text('No activity. Click play and start again.');
}

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    instructions.text('Try again.');  
  }
}

/* start listening on button click */
$('#start-btn').on('click', function(e) {
  if (Content.length) {
    Content += ' ';
  }
  recognition.start();
});

/* stop listening on button click */
$('#stop-btn').on('click', function(e) {
  recognition.stop();
  instructions.text('Voice recognition is stopped.');
})

function handAnimations(transcript) {
  let handModel = document.querySelector('#hand-model');

  if (['hello', 'hallo', 'Hello', 'Hallo'].includes(transcript)) {
    // console.log('hello');
    // console.log(handModel);
    handModel.setAttribute('visible', true);
    handModel.setAttribute('animation-mixer', 'clip: hello; timeScale: 1; loop: infinite; clampWhenFinished: true');
  } 
  
  else if (['goodbye', 'Goodbye', 'bye', 'Bye'].includes(transcript)) {
    // console.log('goodbye');
    // console.log(handModel);
    handModel.setAttribute('visible', true);
    handModel.setAttribute('animation-mixer', 'clip: goodbye; timeScale: -1; loop: infinite; clampWhenFinished: true');
  } 
  
  else if (['thank you', 'Thank you', 'thanks', 'Thanks'].includes(transcript)) {
    // console.log('thank you');
    // console.log(handModel);
    handModel.setAttribute('visible', true);
    handModel.setAttribute('animation-mixer', 'clip: thankyou; timeScale: -1; loop: infinite; clampWhenFinished: true');
  } 

  else if (['Peace', 'peace'].includes(transcript)) {
    console.log('peace');
    console.log(handModel);
    handModel.setAttribute('visible', true);
    handModel.setAttribute('animation-mixer', 'clip: peace; timeScale: -1; loop: infinite; clampWhenFinished: true');
  } 

  else if (['Rock', 'rock', 'rock on', 'rock you'].includes(transcript)) {
    console.log('rock');
    console.log(handModel);
    handModel.setAttribute('visible', true);
    handModel.setAttribute('animation-mixer', 'clip: rock; timeScale: -1; loop: infinite; clampWhenFinished: true');
  } 
}

/* copy text to clipboard with eventlistener on copy button */
let copyBtn = document.querySelector('#copy-btn');
copyBtn.addEventListener('click', function(event) {
  let copyText = document.querySelector('#text-box');
  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
});

/* clear text to clipboard with eventlistener on clear button */
let clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', function(event) {
  let clearText = document.querySelector('#text-box');
  clearText.value = "";
});


/* save text to file with eventlistener on save button */
// let saveBtn = document.querySelector('#save-btn');
// saveBtn.addEventListener('click', function(event) {
//   saveTextAsFile();
// });

/* save text to file */
// function saveTextAsFile() {
//   let textToWrite = document.getElementById("textbox").value;
//   let textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
//   let fileNameToSaveAs = "myNewFile.txt";

//   let downloadLink = document.createElement("a");
//   downloadLink.download = fileNameToSaveAs;
//   downloadLink.innerHTML = "Download File";
//   if (window.webkitURL != null)
//   {
//     // Chrome allows the link to be clicked
//     // without actually adding it to the DOM.
//     downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
//   }
//   else
//   {
//     // Firefox requires the link to be added to the DOM
//     // before it can be clicked.
//     downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
//     downloadLink.onclick = destroyClickedElement;
//     downloadLink.style.display = "none";
//     document.body.appendChild(downloadLink);
//   }

//   downloadLink.click();
// }