
export const getImagen = async () => {

    try {

        const resp = await fetch(`http://20.100.177.59:5000/UNIGRASAS/api/lista_usuarios`);
        const data = await resp.json();

        // console.log(data);

        const url = data[0].avatar;
        // console.log(url);
        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se encontro la imagen';
    }



}