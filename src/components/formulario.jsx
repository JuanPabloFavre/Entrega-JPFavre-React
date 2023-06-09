import React, { useState } from 'react';
import { db } from '../firebase.config'
import { addDoc, collection } from 'firebase/firestore';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {

    const navigate = useNavigate()
    
    const [consultaForm, setConsultaForm] = useState({
        buyer: {
            email: '',
            nombre: '',
            apellido: '',
            telefono: '',
            direccion: '',
            comentarios: ''
        }  ,
      
    })

    const validar = (f) => {
        const { name, value } = f.target

               
        setConsultaForm({
            ...consultaForm,
            buyer: {
                ...consultaForm.buyer,
                [name]: value
            },
            
        })
    
    }

    const mostrarAlerta = () => {
    
        Swal.fire({
            title: '¿Quieres confirmar en envio?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            denyButtonText: `No enviar`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Formulario enviado!')
              navigate('/')  
            } else if (result.isDenied) {
                navigate(-1)
            }
          })
         
        }

    const confirmarForm = async (cc) => {
        cc.preventDefault()



        const col = collection(db, 'Consultas')
        const consultas = await addDoc(col, consultaForm)
        cc.target.reset()

    }


    return (
        <div className='container'>
        <h2>Ingresar informacion de comprador</h2>
        <form onSubmit={confirmarForm} action="">

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
                <label htmlFor="exampleFormControlInput1" className="form-label">Direccion</label>
                <input onChange={validar} type="text" name='direccion' className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Comentarios(Opcional)</label>
                <textarea onChange={validar} name='comentarios' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type='submit' className='btn btn-success btn-lg'  onClick={mostrarAlerta}>Enviar Consulta</button>
        </form>
        </div>
    );
};

export default Formulario;