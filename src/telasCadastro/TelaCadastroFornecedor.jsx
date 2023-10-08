import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import TabelaFornecedores from "./tabelas/TabelaFornecedores";
import TelaMensagem from "./TelaMensagem";

export default function TelaCadastroFornecedor(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [listaFornecedors, setListaFornecedors] = useState([]);  
  const [mostrarMensagem, setMostrarMensagem] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");
  const [fornecedorParaEdicao, setFornecedorParaEdicao] = useState({
    nomeFornecedor:'',
        telefone:'',
        fax:'',
        email:'',
        cidade:'',
        uf:'SP',
        cod:'',
  });
  const [modoEdicao, setModoEdicao] = useState(false);
  const [ordemFornecedors, setOrdemFornecedors] = useState("asc");

  function alternarOrdemFornecedors() {
    setOrdemFornecedors(ordemFornecedors === "asc" ? "desc" : "asc");
  }

  function ordenarFornecedorsPorNome() {
    setListaFornecedors([...listaFornecedors].sort((a, b) => {
      if (ordemFornecedors === "asc") {
        return a.nomeFornecedor.localeCompare(b.nomeFornecedor);
      } else {
        return b.nomeFornecedor.localeCompare(a.nomeFornecedor);
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
  } else {
    return (
      <Container>
        <Pagina>
            <br />
          <Button
            type="button"
            onClick={() => {
              ordenarFornecedorsPorNome();
            }}
          >
            Ordenar por Nome
          </Button>
          {exibirFormulario ? (
            <FormCadFornecedor
              exibirFormulario={setExibirFormulario}
              listaFornecedors={listaFornecedors}
              setListaFornecedors={setListaFornecedors}
              FornecedorParaEdicao={fornecedorParaEdicao}
              setFornecedorParaEdicao={setFornecedorParaEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
              setMostrarMensagem={setMostrarMensagem}
              setMensagem={setMensagem}
              setTipoMensagem={setTipoMensagem}
            />
          ) : (
            <TabelaFornecedores
              exibirFormulario={setExibirFormulario}
              listaFornecedors={listaFornecedors}
              setListaFornecedors={setListaFornecedors}
              FornecedorParaEdicao={fornecedorParaEdicao}
              setFornecedorParaEdicao={setFornecedorParaEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
            />
          )}
        </Pagina>
      </Container>
    );
  }
}
