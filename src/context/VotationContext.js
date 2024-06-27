import React, { createContext, useState } from 'react';

export const VotationContext = createContext();

export const VotationProvider = ({ children }) => {
    const [votationData, setVotationData] = useState({
        Users: '',  // Cantidad de Usuarios
        Title: '',  // Título
        Status: '',  // Estado
        TypeVote: '',  // Modo de Voto
        UserCredentialId: '',  // ID de Credencial de Usuario
        EnterpriseId: '',  // ID de Empresa
        TypeVotation: '',  // Tipo de Votación
        IsWeight: false,  // Peso
        TypeConfirmation: '',  // Tipo de Confirmación
        IsProgram: false,  // Es Programado
        ISAuthenticated: false,  // Autentificar Votación
        LogoName: '',  // Nombre del Logo
        LogoBinary: null,  // Logo en Binario
        TextClosed: '',  // Texto de Votación Cerrada
        TextFinish: '',  // Texto de Votación Finalizada
        TextVoteSend: '',  // Texto de Voto Emitido
        TextInfo: '',  // Texto Informativo
        IsFusion: false,  // Fusionar Votación
        FusionVotationId: '',  // ID de Votación Fusionada
        IsQuestionLive: false,  // Pregunta en Vivo
        TypeVoteMail: '',  // Tipo de Correo de Voto
        IsOptionMultiple: false,  // Opción Múltiple
        IsSegment: false,  // Votación Segmentada
        IsSmsConfirm: false,  // Confirmación por SMS
        PositionInfo: '',  // Posición
        TypeLogin: '',  // Tipo de Login
        IsConfirmPopUp: false,  // Confirmación Pop-up
        IsPrintResult: false,  // Imprimir Resultados
        DateRegister: '',  // Fecha de Registro
        ConfigSecurity: false,  // Configuración de Seguridad
        TypePrintResult: '',  // Tipo de Resultado Impreso
        IsDelegate: false,  // Delegar
        IsMultiAnswer: false  // Respuesta Múltiple
    });

    return (
        <VotationContext.Provider value={{ votationData, setVotationData }}>
            {children}
        </VotationContext.Provider>
    );
};