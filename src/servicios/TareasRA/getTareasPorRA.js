
export default function getTareasPorRA() {

    return fetch('https://mocki.io/v1/8ab1b1e3-78f3-478a-a927-5db551040c44')
        .then((response) => {
            return (response.json())
        })
        .catch((error) => {
            console.log(error);
            return [];
        });

}