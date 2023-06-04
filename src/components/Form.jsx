import React, { useState } from 'react';

const Form = (props) => {
    const { total, compras } = props

    const [validarForm, setValidarForm] = useState({
        buyer: {
            email: '',
            nombre: '',
            apellido: '',
            telefono: '',
            comentarios: ''
        },
        total,
        items: compras
    })

    const validar = (c) => {
        const { name, value } = c.target
        setValidarForm({
            ...validarForm,
            buyer: {
                ...validarForm.buyer,
                [name]: value
            }

        })
    }


    return (
        <div className='container'>
            <h2>Ingresar informacion de comprador</h2>
            <form action="">

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                    <input onChange={validar} type="text" name='nombre' class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Apellidos</label>
                    <input onChange={validar} type="text" name='apellido' class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Correo electronico</label>
                    <input onChange={validar} type="email" name='email' class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Telefono</label>
                    <input onChange={validar} type="number" name='telefono' class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Comentarios</label>
                    <textarea onChange={validar} name='comentarios' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type='submit' className='btn btn-success btn-lg'>Confirmar Compra</button>
            </form>


        </div>
    );
};

export default Form;