// const cargarUsuarios = (username) => {
//     return fetch(`https://arktoart.es/api/usuarios?username=${encodeURIComponent(username)}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Usuario no encontrado');
//             }
//             return response.json();
//         });
// }


async function page({ params }) {
    const { username} = params;
    try {
        const datos = await cargarUsuarios(username);
        return (
            <>
                {/* Aquí puedes utilizar los datos obtenidos, como por ejemplo: */}
                {/* <div>Hola soy {datos.user.username} */}

                </div>

            </>
        );
    } catch (error) {
        return (
            <>
                <div>Ocurrió un error al cargar los datos del usuario: {error.message}</div>
            </>
        );
    }
}


export default page;
