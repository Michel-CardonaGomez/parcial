function changeColor() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
       
        paragraph.style.color = paragraph.style.color === 'red' ? 'black' : 'red';
    });
}

function changeText() {
    const para1 = document.getElementById('parrafo1');
    const para2 = document.getElementById('parrafo2');
    para1.textContent = para1.textContent.includes('Lorem') ? 'Bienvenidos, un lugar donde la educación se convierte en una aventura emocionante y enriquecedora. Aquí, nos dedicamos a ofrecer un entorno de aprendizaje inclusivo y dinámico, donde cada estudiante tiene la oportunidad de explorar sus talentos y desarrollar habilidades esenciales para su futuro. Nuestro equipo de docentes apasionados trabaja con el compromiso de inspirar y guiar a cada uno de nuestros alumnos, fomentando el pensamiento crítico, la creatividad y el respeto mutuo. Creemos que cada día es una oportunidad para crecer, aprender y construir un futuro brillante. ¡Estamos emocionados de que se unan a nuestra comunidad y sean parte de esta maravillosa jornada educativa!' : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus possimus adipisci laudantium cum sit culpa, impedit reprehenderit quae. Impedit repellendus adipisci obcaecati dolorum nemo nam cum? Architecto quae assumenda illo.';
    para2.textContent = para2.textContent.includes('Lorem') ? ' un centro educativo donde cada día se construye una comunidad de aprendizaje vibrante y solidaria. En nuestra escuela, valoramos la colaboración y el respeto mutuo, creando un entorno en el que estudiantes, padres y profesores trabajan juntos para alcanzar metas comunes.' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam corporis molestias. Pariatur, exercitationem. Similique laborum optio culpa modi dicta numquam pariatur, eum omnis aut maxime veritatis. Obcaecati, officia ipsa.';
}