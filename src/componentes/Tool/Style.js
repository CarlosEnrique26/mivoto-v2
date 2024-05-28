const style = {
    paper: {
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "left"
    },
    stylecenter:{
        marginBottom: 20,
        marginTop: 20,
        textAlign: "center"
    },
    gridcontainer: {
        marginBottom: 20
    },
    gridcontainerWelcome: {
        marginBottom: 20,
        textAlign:"center"
    },
    barTitleWelcome:{
        textAlign:"center"
    },
    containerLogin: {
        marginTop: 80,
        backgroundColor: "white",
        border: '2px solid #C9C8C8',

    },
    containerRecovery: {
        marginTop: 10,
        backgroundColor: "white",
        border: '2px solid #C9C8C8',
        padding:40

    },
    containerRegister: {
        marginTop: 10,
        backgroundColor: "white"
    },
    barlogin: {
        display: "flex",
        flexDirection: "row"
    },
    dontrember: {
        padding: 20
    },
    grid1: {
        backgroundColor: "white",
        paddingTop: 10,
        paddingRight: 35,
        paddingLeft: 35,
        paddingBottom: 10
    },
    grid: {
        backgroundColor: "white",
        padding: 35
    },
    gridcolor: {
        backgroundColor: "#56c111",
        padding: 35,
        color: "white"
    },
    paperColor: {
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        backgroundColor: "green"
    },
    form: {
        width: "100%",
        marginTop: 2
    },
    submit: {
        marginTop: 15
    },
    submit1: {
        marginTop: 0
    },
    avatar: {
        margin: 5,
        backgroundColor: "#1976d2",
        width: 60,
        height: 60
    },
    previ: {
        backgroundColor: "#1976d2",
        width: 500,
        height: 250
    },
    icon: {
        fontSize: 40
    },
    barSup: {
        width: "100%",
        height: 300,
        backgroundColor: "#56c111",
        textAlign: "center"
    },
    barSupPrincipal: {
        width: "100%",
        height: 300,
        backgroundColor: "#56c111",
        textAlign: "center"
    },
    barSupWelcome: {
        width: "100%",
        height: 200,
        backgroundColor: "#56c111",
        textAlign: "center"
    },
    barContain: {
        backgroundColor: "white",
        width: "80%",
        minHeight: 500,
        height: "auto",
        margin: "auto",
        marginTop: 45,
        border: '2px solid #C9C8C8',
        borderRadius: '10px 10px 10px 10px',
        textAlign: "left"
    },
    barContainer: {
        backgroundColor: "white",
        width: "90%",
        minHeight: 500,
        height: "auto",
        margin: "auto",
        marginTop: 45,
        border: '2px solid #C9C8C8',
        borderRadius: '10px 10px 10px 10px',
        textAlign: "left"
    },
    barContainProfileUser: {
        backgroundColor: "white",
        width: "100%",
        minHeight: 500,
        height: "auto",
        margin: "auto",
        marginTop: 45,
        border: '2px solid #C9C8C8',
        borderRadius: '10px 10px 10px 10px',
        padding:20
    },
    barContainWelcome:{
        backgroundColor: "white",
        width: "80%",
        minHeight: 150,
        height: "auto",
        margin: "auto",
        marginTop: 45,
        border: '2px solid #C9C8C8',
        borderRadius: '10px 10px 10px 10px',
        textAlign: "left"
    },

    barContainPlan:{ 
        width: "80%",
        minHeight: 150,
        height: "auto",
        margin: "auto",
        marginTop: 45,
        border: '2px solid #C9C8C8',
        borderRadius: '10px 10px 10px 10px',
        textAlign: "left",
        backgroundColor: "white", 
    },
    boxPlan:{  
        backgroundColor:"#F1EFEF",
        marginRight:10,
        border: '2px solid #C9C8C8',
        borderRadius: '0px 60px 0px 60px',
        textAlign:"center"
    },
    barTitle: {
        width: "80%",
        margin: "auto",
        textAlign: "left",
    },
    title: {
        fontSize: 40,
        color: "white",
        fontFamily: "arial",
        fontWeight: 10,
        marginBottom: 2
    },
    titleWelcome: {
        fontSize: 60,
        color: "white",
        fontFamily: "arial",
        fontWeight: 10,
        marginBottom: 2, 
    },
    titleinfo: {
        fontSize: 25,
        color: "#DCDADA",
    },
    titleinfoWelcome: {
        fontSize: 25,
        color: "#000",
        fontWeight: 500,
    },
    avatarcontainer:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
    },
    successMessage: {
        color: "#155724",
        backgroundColor: "#d4edda",
        borderColor: "#c3e6cb",
        padding: "0.75rem 1.25rem",
        border: "1px solid #c3e6cb",  // Hacer el borde visible
        borderRadius: "0.25rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontSize: "20px",
        width: "90%",  // Ajustar el ancho para centrar en la pantalla
        position: 'fixed',  // Posición fija respecto a la ventana del navegador
        top: "150px",  // Espacio desde la parte superior
        left: "50%",  // Centrar horizontalmente
        transform: "translateX(-50%)",  // Ajuste para centrar exactamente
        zIndex: 9999,  // Asegurar que el mensaje esté por encima de otros elementos
        animation: "slideDown 0.3s ease-out forwards"
    },
    updateMessage: {
        color: '#0c5460',
        backgroundColor: '#d1ecf1',
        border: '1px solid #bee5eb',
        padding: "0.75rem 1.25rem",
        marginTop: "20px",
        marginBottom: "20px",
        border: "1px solid transparent",
        borderRadius: "0.25rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontSize: "20px",
        width: "100%",
        animation: "slideDown 0.3s ease-out forwards"
    },
    deleteMessage: {
        color: '#721c24',
        backgroundColor: '#f8d7da',
        border: '1px solid #f5c6cb',
        padding: "0.75rem 1.25rem",
        marginTop: "20px",
        marginBottom: "20px",
        border: "1px solid transparent",
        borderRadius: "0.25rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontSize: "20px",
        width: "100%",
        animation: "slideDown 0.3s ease-out forwards"
    },
    customAlert: {
        fontSize: '1.25rem',
    },
    customAlertTitle: {
        fontSize: '1.5rem',
    }
}
export default style;

;