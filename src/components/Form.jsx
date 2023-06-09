import React, { useState } from 'react';
import { db } from '../firebase.config'
import { addDoc, collection } from 'firebase/firestore';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const Form = (props) => {

    const { total, compras } = props
    const navigate = useNavigate()

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

const mostrarAlerta = () => {
    
    Swal.fire({
        title: '¿Quieres confirmar la compra?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        denyButtonText: `Seguir Comprando`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Compra Confirmada!')
          navigate('/')  
        } else if (result.isDenied) {
            navigate(-1)
        }
      })
     
    }


    const confirmarCompra = async (cc) => {
        cc.preventDefault()



        const col = collection(db, 'Ordenes')
        const ordenes = await addDoc(col, validarForm)
        cc.target.reset()


    }
    return (
        <div className='container'>
            <h2>Ingresar informacion de comprador</h2>
            <form onSubmit={confirmarCompra} action="">

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                    <input onChange={validar} type="text" name='nombre' className="form-control" id="exampleFormControlInput1"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Apellidos</label>
                    <input onChange={validar} type="text" name='apellido' className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Correo electronico</label>
                    <input onChange={validar} type="email" name='email' className="form-control" id="exampleFormControlInput1"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Telefono</label>
                    <input onChange={validar} type="number" name='telefono' className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Comentarios(Opcional)</label>
                    <textarea onChange={validar} name='comentarios' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type='submit' className='btn btn-success btn-lg' onClick={mostrarAlerta}>Confirmar Compra</button>
            </form>



        </div>
    );
};

export default Form;