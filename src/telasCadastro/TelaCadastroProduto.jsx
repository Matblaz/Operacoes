import { Container, Button } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadprodutos from "./formularios/FormCadProduto";
import TabelaProdutos from "./tabelas/TabelaProdutos";
import { useState } from "react";
import TelaMensagem from "./TelaMensagem";

export default function TelaCadastroProdutos(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaProduto, setListaProdutos] = useState([]);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");
    const [produtoParaEdicao, setProdutoParaEdicao] = useState({
        nomeprod: '',
        valor: '',
        descricao: '',
        qtde: '',
        country: 'Brazil',
        codigo: '',
        marca: '',
    });
    const [modoEdicao, setModoEdicao] = useState(false);
    const [ordemProdutos, setOrdemProdutos] = useState("asc");

    function alternarOrdemProduto() {
        setOrdemProdutos(ordemProdutos === "asc" ? "desc" : "asc");
      }

    function ordenarProdutosPorNome() {
        setListaProdutos([...listaProduto].sort((a, b) => {
          if (ordemProdutos === "asc") {
            return a.nomeprod.localeCompare(b.nomeprod);
          } else {
            return b.nomeprod.localeCompare(a.nomeprod);
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
                    ordenarProdutosPorNome();
                    }}
                >
                    Ordenar Produtos
                </Button>
                {
                    exibirFormulario ? <FormCadprodutos exibirFormulario={setExibirFormulario} 
                                                       listaProduto={listaProduto}
                                                       setListaProdutos={setListaProdutos}
                                                       produtoParaEdicao={produtoParaEdicao}
                                                       setProdutoParaEdicao={setProdutoParaEdicao}
                                                       modoEdicao={modoEdicao}
                                                       setModoEdicao={setModoEdicao}
                                                       setMostrarMensagem={setMostrarMensagem}
                                                       setMensagem={setMensagem}
                                                       setTipoMensagem={setTipoMensagem}
                                                       /> 
                                     : 
                                      <TabelaProdutos
                                                        exibirFormulario={setExibirFormulario} 
                                                        listaProduto={listaProduto}
                                                        setListaProdutos={setListaProdutos}
                                                        produtoParaEdicao={produtoParaEdicao}
                                                        setProdutoParaEdicao={setProdutoParaEdicao}
                                                        modoEdicao={modoEdicao}
                                                        setModoEdicao={setModoEdicao}
                                                      />
                }
            </Pagina>
        </Container>
         )
    } 
    
}