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

  else if (['Sorry', 'sorry'].includes(transcript)) {
    console.log('sorry');
    console.log(handModel);
    handModel.setAttribute('visible', true);
    handModel.setAttribute('animation-mixer', 'clip: sorry; timeScale: -1; loop: infinite; clampWhenFinished: true');
  } 

  else if (['Yes', 'yes'].includes(transcript)) {
    console.log('yes');
    console.log(handModel);
    handModel.setAttribute('visible', true);
    handModel.setAttribute('animation-mixer', 'clip: yes; timeScale: -1; loop: infinite; clampWhenFinished: true');
  } 
}