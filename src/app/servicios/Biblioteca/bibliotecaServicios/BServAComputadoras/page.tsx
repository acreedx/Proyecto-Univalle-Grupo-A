import HeaderTitle from "@/app/components/header-title";

function aComputadoras() {
    return(
        <section className="text-gray-700 body-font overflow-hidden">
            <HeaderTitle direction="/servicios/Biblioteca/bibliotecaServicios" title="" />
            <div className="container px-5 py-24 mx-auto ">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://libapps.s3.amazonaws.com/accounts/2130/images/4.jpg"/>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-white bg-opacity-75 rounded-lg">

                    <h2 className="text-sm title-font text-gray-500 tracking-widest">BIBLIOTECA UNIVALLE</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Acceso a computadoras e internet</h1>
                    <div className="flex mb-4">
                    <span className="flex items-center">
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span className="text-gray-600 ml-3">4 Reviews</span> */}
                    </span>  
                    </div>
                    <p className="leading-relaxed">La biblioteca le ofrece una amplia gama de recursos electrónicos accesibles desde nuestras computadoras en los espacios de la Biblioteca. En la Sala Web de la Biblioteca encontrará computadores que le ofrecen software de investigación y productividad así como una conexión rápida a Internet. También puede traer su propio laptop o dispositivo móvil y conectarse a través de Wi-Fi gratuita.</p>
                    
                    
                </div>
                </div>
            </div>
        </section>
    );
}

export default aComputadoras;