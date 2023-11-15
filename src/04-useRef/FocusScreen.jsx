import React, { useRef, useEffect } from 'react';

export const FocusScreen = () => {
    // Crear una referencia para el elemento input
    const inputRef = useRef(null);

    // Función para establecer el enfoque
    const handleFocus = () => {
        // current es la referencia al elemento input actual
        inputRef.current.focus();
    };

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            {/* Asignar la referencia al elemento input */}
            <input 
                ref={inputRef}
                className="form-control" 
                placeholder="Ingrese su nombre" 
                type="text" 
            />

            {/* Llamar a handleFocus cuando se hace clic en el botón */}
            <button 
                onClick={handleFocus}
                className="btn btn-outline-primary mt-5">
                    Focus
            </button>
        </>
    );
};
