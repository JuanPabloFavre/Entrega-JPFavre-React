import React from 'react';
import nosotrosfoto from '../../assets/nosotros/nosotros.jpg'
import superfoto from '../../assets/nosotros/super.jpg'


const nosotros = () => {
    return (
        <div className='container'>
               <p>
                Hace mas de 60 años abrimos nuestras puertas en Uruguay, impulsados por mejorar la calidad de vida de todas las familias uruguayas.
                Gracias a nuestro propósito que nos inspira y un equipo comprometido, con lideres serviciales siempre dispuestos a ir por mas,
                logramos que nuestro negocio crezca con bases sólidas. Hoy estamos presentes en los 19 departamentos del país con nuestras unidades de negocio: Ta-Ta Supermercados,
                que busca bajar el costo de vida del Uruguay, garantizando el mejor servicio y precios bajos siempre. Multi Ahorro Hogar, con los mejores electrodomésticos para
                vivir mejor. BAS Básico & Simple, una marca de diseño uruguayo con prendas básicas y funcionales, para disfrutar de lo simple. woOw, nuestra plataforma de
                e-commerce que ofrece lo mejor en productos, viajes y experiencias para nuestros clientes. Y Frontoy 75 años atendiendo a todo el canal minorista del país.
                Creemos en la innovación, la atención a los detalles y la mejora continua para brindar a nuestros clientes una experiencia
                que exceda sus expectativas y así nos prefieran toda la vida. Nuestro compromiso es con todo el país, siendo el mejor lugar para comprar,
                para trabajar e invertir, impactando de manera positiva en todas las comunidades donde estamos presentes.
                ¡Hay un lugar para que vos también seas parte de esta Cultura única!
            </p>
            <img src={nosotrosfoto} className="img-fluid" alt="..."></img>
            


         

            <h3>NUESTRO PROPÓSITO</h3>
            <p>"Bajar el costo de vida del Uruguay"
                Para lograrlo brindamos productos y servicios al menor precio posible,
                impactando de forma positiva en la vida de las personas. Ayudamos a ahorrar dinero y tiempo.
            </p>

            <h3>NUESTRA CULTURA</h3>
            <p>Nuestra Cultura es la personalidad de nuestra Compañía, como un sello diferenciador y se materializa en la forma en la que nos relacionamos como equipo,
                en cómo atendemos a nuestros clientes, cómo impactamos en nuestra comunidad y en la manera en que operamos nuestro negocio.</p>

            <h3>NUESTRO CÓDIGO:</h3>
            <p>
            Compromiso: Siento orgullo y pertenencia por la compañía.<br/>
        •	Orientación al cliente: Coloco al cliente en el centro y excedo sus expectativas.<br/>
        •	Desarrollo personal y profesional:Tengo una actitud personal de aprendizaje continuo y superación y lo contagio.<br/>
        •	Integridad: Actúo de manera ética, sin tomar atajos, siendo coherente entre lo que digo y hago.<br/>
        •	Gestión del cambio e innovación: Abrazo el cambio, lo impulso y promuevo la eficiencia.<br/>
        •	Orientación al resultado: Hago foco en el cumplimiento de las metas.

            </p>

            <img src={superfoto} className="img-fluid" alt="..."></img>
        </div>
    );
};

export default nosotros;