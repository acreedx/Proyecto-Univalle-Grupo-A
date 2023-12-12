import Image from "next/image";
import HeaderTitle from "@/app/components/header-title";

function Novedades() {
    return (
        <>
            <HeaderTitle direction="/servicios/campusDeportivo" title="Novedades"></HeaderTitle>
            <main className="p-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-white">
                    {/* Publicación 1 */}
                    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-md">
                        <Image src="/Images/campusDemo/1.jpg" alt="Publicación 1" className="w-full h-80 object-cover" width={400} height={400} />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Creatividad Univalle</h3>
                            <p className="mb-4">¡Inspiración en cada rincón de la Universidad Univalle sede La Paz! 🎨 Este talentoso estudiante plasmó un mensaje poderoso en nuestro campus deportivo: La igualdad nos hace libres. ¡El arte que nos motiva a reflexionar y trabajar juntos por un mundo más inclusivo! 🌍✨</p>
                            
                        </div>
                    </div>

                    {/* Publicación 2 */}
                    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-md">
                    <Image src="/Images/campusDemo/2.jpg" alt="Publicación 2" className="w-full h-80 object-cover" width={400} height={400} />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Experimentacion en el campus</h3>
                            <p className="mb-4">Explorando el sonido y la ciencia en acción en la Universidad Univalle sede La Paz 🔬🎶 ¡Este estudiante de Ingeniería lleva la experimentación al siguiente nivel! 🔊💡 Descubre el fascinante mundo de las ondas sonoras y el metal en este emocionante proyecto. 🤯🔨 </p>
                            
                        </div>
                    </div>

                    {/* Publicación 3 */}
                    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-md">
                    <Image src="/Images/campusDemo/3.jpg" alt="Publicación 3" className="w-full h-80 object-cover" width={400} height={400} />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Staff Aniversario Univalle</h3>
                            <p className="mb-4">Celebrando con corazón y dedicación el aniversario de nuestra querida Universidad en el campus deportivo! 🎉🎓 Un enorme agradecimiento a este increíble equipo de organizadores, cuyo arduo trabajo y pasión hicieron posible este evento inolvidable. 🙌💙 ¡Brindemos juntos por más años de éxito y crecimiento académico! 🥂📚</p>
                           
                        </div>
                    </div>

                    {/* Continuar con más publicaciones */}
                    {/* Publicación 4 */}
                    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-md">
                    <Image src="/Images/campusDemo/4.jpg" alt="Publicación 3" className="w-full h-80 object-cover" width={400} height={400} />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Creatividad Univalle</h3>
                            <p className="mb-4">¡Un derroche de creatividad en nuestro evento de aniversario! 🎭🌟 Nuestros alumnos se lucieron con disfraces únicos y originales, demostrando que la creatividad no tiene límites. Desde personajes históricos hasta seres mágicos, cada disfraz es una obra de arte que refleja el espíritu vibrante de nuestra comunidad universitaria. 🚀👏 ¡Aplausos para la imaginación desbordante de nuestros estudiantes! 🎉👩‍🎨👨‍🎤</p>
                            
                        </div>
                    </div>
                    {/* Publicación 5 */}
                    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-md">
                    <Image src="/Images/campusDemo/5.jpg" alt="Publicación 3" className="w-full h-80 object-cover" width={400} height={400} />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Gran Matador en nuestro Aniversario</h3>
                            <p className="mb-4">Una tarde llena de ritmo y alegría gracias a la increíble presentación de Gran Matador en nuestro evento de aniversario! 🎶🌟 La energía contagiosa de su música hizo que todos bailáramos y disfrutáramos al máximo. 🕺💃 Un agradecimiento especial a Gran Matador por ser parte de esta celebración inolvidable. ¡La música une y eleva el espíritu universitario! 🙌🎉</p>
                            
                        </div>
                    </div>
                </div>
            </main>


        </>
    )
}

export default Novedades;