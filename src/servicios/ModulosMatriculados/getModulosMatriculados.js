export default function getModulosMatriculados() {

    return fetch('https://mocki.io/v1/648ed09c-8180-425a-aca7-6c82eaf63760')
        .then((response) => {
            return (response.json())
        })
        .catch((error) => {
            console.log(error);
            return [];
        });

}