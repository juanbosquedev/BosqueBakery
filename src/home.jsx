import Style from './home.module.css'
export default function Home (){
    return(
        <div className={Style.homeMain}>
            <h1>principal<br/>
            aca puede ir una imagen de fondo y luego se va a mostrar informacion que se seleccione<br/>
            ej: productos y sus fotos</h1>
        </div>
    )
}