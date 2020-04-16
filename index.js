addEventListener('fetch', event => {
  var myurl = event.request.url;
  if(myurl == 'https://assignment.anamika.workers.dev/'){
  event.respondWith(handleRequest(event.request));
} 
  
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */

async function handleRequest(request) {
  let response = await fetch('http://cfw-takehome.developers.workers.dev/api/variants');
  let resp =  await response.json();
  let randomIndex = Math.floor(Math.random() * 2) ;
  let finalResponse = resp.variants[randomIndex];
  return Response.redirect(finalResponse);
 
}