
document.querySelector('.titulo').addEventListener('click', () => {
    alert('¡Has hecho clic en el título!');
});


document.querySelector('.ani').addEventListener('mouseover', () => {
    document.querySelector('.ani').style.backgroundColor = '#f3b6f1';
});
document.querySelector('.ani').addEventListener('mouseout', () => {
    document.querySelector('.ani').style.backgroundColor = '';
});


const select = document.createElement('select');
select.innerHTML = '<option>Selecciona tu comida favorita</option><option>Alitas</option><option>Hamburguesa</option style="background-color: blue>';
document.querySelector('.comi').appendChild(select);
select.addEventListener('change', () => {
    alert(`¡Te encanta: ${select.value}!`);
});


document.body.addEventListener('keydown', (event) => {
    console.log(`Tecla presionada: ${event.key}`);
});


const boton = document.createElement('button');
boton.textContent = 'Agregar Canción';
boton.style.marginTop = '1rem';
document.querySelector('.canci').appendChild(boton);
boton.addEventListener('click', () => {
    alert('¡Canción agregada exitosamente!');
});

document.querySelector('.pais').addEventListener('mouseover', () => {
    document.querySelector('.pais').style.transform = 'scale(1.05)';
});
document.querySelector('.pais').addEventListener('mouseout', () => {
    document.querySelector('.pais').style.transform = 'scale(1)';
});
