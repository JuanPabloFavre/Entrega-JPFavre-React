import React from 'react';

const formulario = () => {





    return (
        <form className='container'>

            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="formGroupExampleInput" />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Direccion</label>
                <input type="text" className="form-control" id="formGroupExampleInput3"/>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Telefono</label>
                <input type="text" className="form-control" id="formGroupExampleInput4"  />
            </div>

            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Correo Electronico</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>

            <select className="form-select" aria-label="Default select example">
                <option selected>Genero</option>
                <option value="1">Masculino</option>
                <option value="2">Femenino</option>
                <option value="3">Otro</option>
            </select>

            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Comentarios</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div className="mb-3 form-check d-flex justify-content-center">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Deseas recibir promociones</label>
            </div>

            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
};

export default formulario;