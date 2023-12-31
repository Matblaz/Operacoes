import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import TelaMensagem from "./TelaMensagem";

export default function TelaCadastroCliente(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [listaClientes, setListaClientes] = useState([]);  
  const [mostrarMensagem, setMostrarMensagem] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");
  const [clienteParaEdicao, setClienteParaEdicao] = useState({
    cpf: "",
    nome: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "SP",
    cep: "",
  });
  const [modoEdicao, setModoEdicao] = useState(false);
  const [ordemClientes, setOrdemClientes] = useState("asc");

  function alternarOrdemClientes() {
    setOrdemClientes(ordemClientes === "asc" ? "desc" : "asc");
  }

  function ordenarClientesPorNome() {
    setListaClientes([...listaClientes].sort((a, b) => {
      if (ordemClientes === "asc") {
        return a.nome.localeCompare(b.nome);
      } else {
        return b.nome.localeCompare(a.nome);
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
              ordenarClientesPorNome();
            }}
          >
            Ordenar por Nome
          </Button>
          {exibirFormulario ? (
            <FormCadCliente
              exibirFormulario={setExibirFormulario}
              listaClientes={listaClientes}
              setListaClientes={setListaClientes}
              clienteParaEdicao={clienteParaEdicao}
              setClienteParaEdicao={setClienteParaEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
              setMostrarMensagem={setMostrarMensagem}
              setMensagem={setMensagem}
              setTipoMensagem={setTipoMensagem}
            />
          ) : (
            <TabelaClientes
              exibirFormulario={setExibirFormulario}
              listaClientes={listaClientes}
              setListaClientes={setListaClientes}
              clienteParaEdicao={clienteParaEdicao}
              setClienteParaEdicao={setClienteParaEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
            />
          )}
        </Pagina>
      </Container>
    );
  }
}
