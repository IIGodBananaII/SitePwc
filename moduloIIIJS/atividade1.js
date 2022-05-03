function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Samuel', 'Admin');
usuarios.set('Mãe', 'User');
usuarios.set('Pai', 'User');
usuarios.set('Irmã', 'Admin');

console.log(getAdmins(usuarios));