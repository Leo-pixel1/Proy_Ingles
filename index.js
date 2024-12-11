let lastInteractionTime = Date.now();
let activeDescription = null;

// Función para mostrar el efecto Matrix al inicio
function showMatrixEffect() {
  const matrixEffect = document.getElementById('matrix-effect');
  matrixEffect.style.display = 'block';
  setTimeout(() => {
    matrixEffect.style.display = 'none';
  }, 10000); // El efecto dura 10 segundos
}

// Activar el efecto Matrix al inicio
window.onload = () => {
  showMatrixEffect(); // Llama a la función cuando la página cargue
};

// Función que se activa cuando no hay interacción por 10 segundos
function startMatrixEffectOnIdle() {
  const now = Date.now();
  if (now - lastInteractionTime >= 10000) {
    showMatrixEffect();
  }
}

// Reiniciar el temporizador de interacción
function resetInteractionTimer() {
  lastInteractionTime = Date.now();
}

// Mostrar contenido de los botones
function mostrarTareas() {
  hideAllDescriptions();  // Ocultar todas las descripciones antes de mostrar la nueva
  document.getElementById('tareas-desc').style.display = 'block';
  document.getElementById('tareas-desc').innerHTML = `
    <h2>Engineer Tasks</h2>
    <p>The programming engineer is responsible for a number of key tasks in software development. Among its functions are the design, development and testing of systems, as well as the solution of complex problems through the use of programming languages ​​​​such as Python, Java, C++, among others. In addition, he stays up to date on new technologies to improve the performance of the applications he develops.</p>
  `;
  resetInteractionTimer();
}

function mostrarAptitudes() {
  hideAllDescriptions();  // Ocultar todas las descripciones antes de mostrar la nueva
  document.getElementById('aptitudes-desc').style.display = 'block';
  document.getElementById('aptitudes-desc').innerHTML = `
    <h2>Necessary skills</h2>
    <p>To study programming engineering, a solid foundation in mathematics and logic is required, as well as problem-solving skills. In addition, the ability to work as a team and the willingness to learn continuously are valued. A programming engineer must also be detail-oriented and able to perform extensive testing to ensure that the software works correctly.</p>
  `;
  resetInteractionTimer();
}

function mostrarSueldo() {
  hideAllDescriptions();  // Ocultar todas las descripciones antes de mostrar la nueva
  document.getElementById('sueldo-desc').style.display = 'block';
  document.getElementById('sueldo-desc').innerHTML = `
    <h2>Average Salary</h2>
    <p>The average salary for a programming engineer varies depending on their experience, geographic location, and the industry in which they work. In general, a newly graduated engineer can expect to earn between $2,500 and $4,000 per month, while more experienced ones can achieve salaries of up to $6,000 or more, especially if they work at reputable technology companies or as freelancers.</p>
  `;
  resetInteractionTimer();
}

function mostrarLugaresTrabajo() {
  hideAllDescriptions();  // Ocultar todas las descripciones antes de mostrar la nueva
  document.getElementById('lugares-desc').style.display = 'block';
  document.getElementById('lugares-desc').innerHTML = `
    <h2>Workplaces</h2>
    <p>A programming engineer can work in a wide variety of places, from large technology companies to startups. You can also work as a freelancer or in consultancies. The main industries that employ programming engineers include technology, telecommunications, banking, and consulting, among others.</p>
  `;
  resetInteractionTimer();
}

function mostrarHorarioTrabajo() {
  hideAllDescriptions();  // Ocultar todas las descripciones antes de mostrar la nueva
  document.getElementById('horario-desc').style.display = 'block';
  document.getElementById('horario-desc').innerHTML = `
    <h2>Work Schedule</h2>
    <p>A programming engineer's work schedule is generally flexible, with the ability to work remotely or in the office. Many developers follow traditional 9-to-6 schedules, but it's also common for them to work on a project or goal-based basis, which may involve working overtime if necessary to meet deadlines. Some prefer freer schedules or working in globally distributed teams.</p>
  `;
  resetInteractionTimer();
}

// Ocultar todas las descripciones al presionar un nuevo botón
function hideAllDescriptions() {
  document.getElementById('tareas-desc').style.display = 'none';
  document.getElementById('aptitudes-desc').style.display = 'none';
  document.getElementById('sueldo-desc').style.display = 'none';
  document.getElementById('lugares-desc').style.display = 'none';
  document.getElementById('horario-desc').style.display = 'none';
}

// Verificar la inactividad cada 10 segundos
setInterval(startMatrixEffectOnIdle, 10000);
