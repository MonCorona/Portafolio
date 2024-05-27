let app = document.getElementById('typewriter');
app.style.color = 'purple'; 

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web y escribo artículos sobre libros, viajes y entretenimiento.')
  .pauseFor(200)
  .deleteChars(10)
  .start();

  app.style.color = 'blue';