(() => {
 const config=window.NAVE_ACCESS_CONFIG||{}, form=document.getElementById('access-form'), button=document.getElementById('access-submit'), message=document.getElementById('access-message'), note=document.getElementById('access-preview');
 form.addEventListener('submit',event=>event.preventDefault());
 let requestId=null,lastPayload=null;
 const showError=text=>{message.textContent=text;message.hidden=false;message.focus();};
 const route=()=>form.querySelector('input[name="setup"]:checked').value;
 const updatePath=()=>{
  const fresh=route()==='new';
  document.getElementById('existing-steps').hidden=fresh;
  document.getElementById('new-steps').hidden=!fresh;
  document.getElementById('next-title').innerHTML=fresh?'A home for your business.<br>A team for your content.':'A content department.<br>A familiar place to work.';
  document.getElementById('path-explanation').textContent=fresh?'Create your own private AI Workspace, set up your business, then add Nave as its content department.':'Keep your existing workspace. Install Nave into its own department folder and open that folder with your agent.';
 };
 for(const el of form.querySelectorAll('input[name="setup"]'))el.addEventListener('change',updatePath);
 updatePath();
 let endpoint;
 try {
  endpoint=new URL(config.endpoint,location.href);
  if(!config.endpoint||!(endpoint.protocol==='https:'||(endpoint.protocol==='http:'&&['127.0.0.1','localhost'].includes(endpoint.hostname))))throw Error();
 }catch{note.textContent=config.unavailableMessage||'Design preview. The hosted invitation service is not connected yet.';return;}
 note.textContent=config.local?'Local connected preview. Submitting sends a real GitHub invitation.': 'Your invitation is requested automatically when you submit.';
 button.disabled=false;
 form.addEventListener('submit',async event=>{
  event.preventDefault();if(button.disabled||!form.reportValidity())return;
  let github=document.getElementById('access-github').value.trim().replace(/^@/,'');
  if(/^(https?:\/\/)?(www\.)?github\.com\//i.test(github)){
   try{const u=new URL(github.startsWith('http')?github:`https://${github}`);github=u.pathname.replace(/^\/|\/$/g,'');}catch{github='';}
  }
  if(!/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(github))return showError('Enter your personal GitHub username or profile link.');
  message.hidden=true;
  const payload={formVersion:'repository-access-v2',github:github.toLowerCase(),setup:route(),website:document.getElementById('access-website').value};
  const fingerprint=JSON.stringify(payload);if(lastPayload!==fingerprint){requestId=crypto.randomUUID();lastPayload=fingerprint;}
  button.disabled=true;button.querySelector('span').textContent='Getting your invitation…';
  for(const input of form.querySelectorAll('input'))input.disabled=true;
  try{
   const response=await fetch(endpoint.href,{method:'POST',headers:{'Content-Type':'application/json',...(config.publicKey?{apikey:config.publicKey}:{}),...(config.csrf?{'X-Nave-Form':config.csrf}:{})},body:JSON.stringify({...payload,requestId}),signal:AbortSignal.timeout(45000)});
   const data=await response.json();
   if(!response.ok){const e=Error();e.memberMessage=data.error;throw e;}
   if(data.saved!==true||data.receipt!==requestId||!['invited','active'].includes(data.status))throw Error();
   form.hidden=true;
   const active=data.status==='active';
   document.getElementById('complete-title').textContent=active?'You’re already aboard.':'Your invitation is ready.';
   document.getElementById('complete-copy').textContent=active?`@${data.login} already has access. Follow your selected setup path below.`:`GitHub confirmed an invitation for @${data.login}. Accept it in GitHub or from the email sent to that account, then follow your setup path below.`;
   const link=document.querySelector('#access-complete a');
   link.href=active?'https://github.com/agentic-ai-content/nave':'https://github.com/orgs/agentic-ai-content/invitation';
   link.childNodes[0].textContent=active?'Open Nave on GitHub ':'Open GitHub invitation ';
   document.getElementById('access-receipt').textContent=`Reference ${data.receipt}`;
   const complete=document.getElementById('access-complete');complete.hidden=false;complete.focus();
  }catch(error){
   showError(typeof error.memberMessage==='string'?error.memberMessage:'We could not confirm your invitation. Your answers are still here. Retry safely with the same reference.');
   button.disabled=false;button.querySelector('span').textContent='Try again';for(const input of form.querySelectorAll('input'))input.disabled=false;
  }
 });
})();
