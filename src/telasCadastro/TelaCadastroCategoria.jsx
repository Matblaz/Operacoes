import { Container, Button } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadCategoria from "./formularios/FormCadCategorias";
import TabelaCategoria from "./tabelas/TabelaCategorias";
import TelaMensagem from "./TelaMensagem";
import { useState } from "react";


export default function TelaCadastroCategoria(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaCategoria, setListaCategoria] = useState([]);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");
    const [categoriaParaEdicao, setCategoriaParaEdicao] = useState({
        nomeCategoria : '',
        descricao : '',
        catprod : "Smartphones e tablets",
        marca : '',
    });
    const [modoEdicao, setModoEdicao] = useState(false);
    const [ordemCategoria, setOrdemCategoria] = useState("asc");

    function alternarOrdemCategoria() {
        setOrdemCategoria(ordemCategoria === "asc" ? "desc" : "asc");
      }

      function ordenarCategoriaPorNome() {
        setListaCategoria([...listaCategoria].sort((a, b) => {
          if (ordemCategoria === "asc") {
            return a.nomeCategoria.localeCompare(b.nomeCategoria);
          } else {
            return b.nomeCategoria.localeCompare(a.nomeCategoria);
          }
        }));
      }
      
    
    if (mostrarMensagem) {
        return (
          <TelaMensagem
            mensagem={mensagem}
            tipo={tipoMensagem}
            setMostrarMensagem={setMostrarMensagem}
          />
        );
      }
    else{
        return (
        <Container>
            <Pagina>
                <br />
                <Button
                    type="button"
                    onClick={() => {
                    ordenarCategoriaPorNome();
                    }}
                >
                    Ordenar por Nome
                </Button>
                {
                    exibirFormulario ? <FormCadCategoria exibirFormulario={setExibirFormulario} 
                                                       listaCategoria={listaCategoria}
                                                       setListaCategoria={setListaCategoria}
                                                       categoriaParaEdicao={categoriaParaEdicao}
                                                       setCategoriaParaEdicao={setCategoriaParaEdicao}
                                                       modoEdicao={modoEdicao}
                                                       setModoEdicao={setModoEdicao}
                                                       setMostrarMensagem={setMostrarMensagem}
                                                       setMensagem={setMensagem}
                                                       setTipoMensagem={setTipoMensagem}
                                                       /> 
                                     : 
                                      <TabelaCategoria exibirFormulario={setExibirFormulario}
                                                       listaCategoria={listaCategoria}
                                                       setListaCategoria={setListaCategoria}
                                                       categoriaParaEdicao={categoriaParaEdicao}
                                                       setCategoriaParaEdicao={setCategoriaParaEdicao}
                                                       modoEdicao={modoEdicao}
                                                       setModoEdicao={setModoEdicao}
                                                      />
                }
            </Pagina>
        </Container>
    )
    }
    
}