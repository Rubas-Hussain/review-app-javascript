const employeeData = [
    {
        'name': 'Mickey Aurthur',
        'profession': 'Web Developer',
        'description': "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione expedita tenetur autem sapiente quibusdam, voluptatem illum nostrum optio inventore neque animi iure dolorem, molestiae ipsa error perspiciatis facilis voluptates exercitationem in. Asperiores.",
        'url': "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        'name': 'Wade Warren',
        'profession': 'Graphic Designer',
        'description': "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione expedita tenetur autem sapiente quibusdam, voluptatem illum nostrum optio inventore neque animi iure dolorem, molestiae ipsa error perspiciatis facilis voluptates exercitationem in. Asperiores.",
        'url': "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        'name': 'Emma Johnson',
        'profession': 'Project Manager',
        'description': "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione expedita tenetur autem sapiente quibusdam, voluptatem illum nostrum optio inventore neque animi iure dolorem, molestiae ipsa error perspiciatis facilis voluptates exercitationem in. Asperiores.",
        'url': "https://images.pexels.com/photos/1239300/pexels-photo-1239300.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        'name': 'James Smith',
        'profession': 'Software Engineer',
        'description': "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione expedita tenetur autem sapiente quibusdam, voluptatem illum nostrum optio inventore neque animi iure dolorem, molestiae ipsa error perspiciatis facilis voluptates exercitationem in. Asperiores.",
        'url': "https://images.pexels.com/photos/1239311/pexels-photo-1239311.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        'name': 'Olivia Brown',
        'profession': 'UX Designer',
        'description': "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione expedita tenetur autem sapiente quibusdam, voluptatem illum nostrum optio inventore neque animi iure dolorem, molestiae ipsa error perspiciatis facilis voluptates exercitationem in. Asperiores.",
        'url': "https://images.pexels.com/photos/1239322/pexels-photo-1239322.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

const subMainContainer = document.querySelector('.sub-MainCont');
const backBtn = document.querySelector('.fa-angle-left');
const forwardBtn = document.querySelector('.fa-angle-right');

let selectedIndex = 0;

function showEmployee(index) {
    const employee = employeeData[index];

    subMainContainer.innerHTML = '';

    const data = document.createElement('div');
    data.classList.add('employeeDataCont');
    data.innerHTML = `
        <div class="imgCont">
            <img id="pic" src="${employee.url}" alt="${employee.name}">
        </div>
        <div class="nameCont">
            ${employee.name}
        </div>
        <div class="professionCont">
            ${employee.profession}
        </div>
        <div class="descriptionCont">
            ${employee.description}
        </div>`;
    
    subMainContainer.prepend(data);
}

showEmployee(selectedIndex);

forwardBtn.addEventListener('click', () => {
    if (selectedIndex < employeeData.length - 1) {
        selectedIndex++;
        showEmployee(selectedIndex);
    }
});

backBtn.addEventListener('click', () => {
    if (selectedIndex > 0) {
        selectedIndex--;
        showEmployee(selectedIndex);
    }
});
