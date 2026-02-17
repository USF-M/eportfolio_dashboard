const insertNuevaEvidencia = async (evidencia) => {

    try {
        const response = await fetch('https://eportfolio.free.beeceptor.com/', {
            method: 'POST',
            body: JSON.stringify(evidencia),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return await response.json();
    } catch (error) {
        console.log(error);
        return {};
    }
}
export default insertNuevaEvidencia;