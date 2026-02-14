export default function getModulosImpartidos() {

    return fetch('https://mocki.io/v1/1d7b6bdc-cfd7-4902-b544-d0f6302205c2')
        .then((response) => {
            return (response.json())
        })
        .catch((error) => {
            console.log(error);
            return [];
        });

}