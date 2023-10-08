import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import Menu from "./Menu";

export default function Pagina(props) {
    return (
        <>
            <Cabecalho conteudo='Sistema de Gestão Comercial' />
            <Menu />
            <div>
                {
                    // filhos da página
                }
                {props.children} 
            </div>
        </>
    )
}

