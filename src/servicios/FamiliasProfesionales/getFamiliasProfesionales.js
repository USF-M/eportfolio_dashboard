export default function getFamiliasProfesionales() {

    return fetch('https://mocki.io/v1/ff9f38d6-7995-437f-9bab-82a42fdd7ae7')
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
            return [];
        });

}