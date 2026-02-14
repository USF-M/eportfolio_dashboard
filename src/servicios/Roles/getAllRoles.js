export default function getAllRoles() {

    return fetch('https://mocki.io/v1/78faa413-0027-4667-b384-7d9994c62a45')
        .then((response) => {
            return (response.json())
        })
        .catch((error) => {
            console.log(error);
            return [];
        });

}