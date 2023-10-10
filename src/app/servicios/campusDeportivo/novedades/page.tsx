import Image from "next/image";
import HeaderTitle from "@/app/components/header-title";

function Novedades() {
    return (
        <>
            <HeaderTitle direction="/servicios/campusDeportivo" title="Novedades"></HeaderTitle>
            <main className="p-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Publicación 1 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <Image src="/Images/reservas.jpg" alt="Publicación 1" className="w-full h-80 object-cover" width={400} height={400} />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Título de la Publicación 1</h3>
                            <p className="text-gray-700 mb-4">Descripción breve de la publicación 1. Puede ser un resumen o un extracto del contenido.</p>
                            <a href="#" className="text-blue-600 hover:underline">Leer más</a>
                        </div>
                    </div>

                    {/* Publicación 2 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <Image src="/Images/reservas.jpg" alt="Publicación 2" className="w-full h-80 object-cover" width={100} height={400} />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Título de la Publicación 2</h3>
                            <p className="text-gray-700 mb-4">Descripción breve de la publicación 2. Puede ser un resumen o un extracto del contenido.</p>
                            <a href="#" className="text-blue-600 hover:underline">Leer más</a>
                        </div>
                    </div>

                    {/* Publicación 3 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <Image src="/Images/reservas.jpg" alt="Publicación 3" className="w-full h-80 object-cover" width={100} height={400} />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Título de la Publicación 3</h3>
                            <p className="text-gray-700 mb-4">Descripción breve de la publicación 3. Puede ser un resumen o un extracto del contenido.</p>
                            <a href="#" className="text-blue-600 hover:underline">Leer más</a>
                        </div>
                    </div>

                    {/* Continuar con más publicaciones */}
                </div>
            </main>


        </>
    )
}

export default Novedades;