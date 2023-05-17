import React from 'react';

const form = () => {
    return (
        <form className='container'>

            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="formGroupExampleInput" />
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Apellido</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" />
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Direccion</label>
                <input type="text" class="form-control" id="formGroupExampleInput3"/>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Telefono</label>
                <input type="text" class="form-control" id="formGroupExampleInput4"  />
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Correo Electronico</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>

            <select class="form-select" aria-label="Default select example">
                <option selected>Genero</option>
                <option value="1">Masculino</option>
                <option value="2">Femenino</option>
                <option value="3">Otro</option>
            </select>

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Cuentanos brevemente</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div class="mb-3 form-check d-flex justify-content-center">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Deseas recibir promociones</label>
            </div>

            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    );
};

export default form;