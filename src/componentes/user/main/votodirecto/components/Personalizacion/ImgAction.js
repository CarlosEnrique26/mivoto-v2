export const getDataImg = (imagen) => {
    return new Promise((resolve, eject) => {
        const name = imagen.name;
        const extension = imagen.name.split(".").pop();

        const lector = new FileReader();
        lector.readAsDataURL(imagen);

        lector.onload = () => resolve(
            {
                data: lector.result.split(",")[1],
                name: name,
                extension: extension
            }
        );
        lector.onerror = error => PromiseRejectionEvent(error);
    })
}