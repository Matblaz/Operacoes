    import { useState } from "react";
    import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
    export default function FormCadcategoria(props) {
        const categoriaVazio = {
            nomeCategoria: '',
            descricao: '',
            catprod: 'Smartphones e Tablets',
            marca: '',
        }
        const estadoInicialcategoria = props.categoriaParaEdicao;
        const [categoria, setcategoria] = useState(estadoInicialcategoria);
        const [formValidado, setFormValidado] = useState(false);

        function manipularMudancas(e){
            const componente = e.currentTarget;
            console.log(componente.value)
            setcategoria({...categoria,[componente.name]:componente.value});
        }

        function manipularSubmissao(e){
            const form = e.currentTarget; 
            if (form.checkValidity()){
                if(!props.modoEdicao){
                    props.setListaCategoria([...props.listaCategoria,categoria]);
                    props.setMensagem('Categoria incluída com sucesso');
                    props.setTipoMensagem('success');
                    props.setMostrarMensagem(true);
                }
                else{
                    props.setListaCategoria([...props.listaCategoria.filter((itemcategoria)=>itemcategoria.cpf !== categoria.cpf),categoria]);
                    props.setModoEdicao(false);
                    props.setCategoriaParaEdicao(categoriaVazio);             
                }
                setcategoria(categoriaVazio);
                setFormValidado(false);
            }
            else{
                setFormValidado(true);
            }

            e.stopPropagation();
            e.preventDefault();
        }

        return (
            <Container>
                <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <FloatingLabel
                                    label="Nome do Produto:"
                                    className="mb-3"
                                >

                                    <Form.Control 
                                        type="text"  
                                        id="nomeCategoria" 
                                        name="nomeCategoria" 
                                        value={categoria.nomeCategoria}
                                        onChange={manipularMudancas}
                                        required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o nome do Produto!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <FloatingLabel
                                    label="Descrição:"
                                    className="mb-3"
                                >
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Informe a descrição da categoria" 
                                        id="descricao" 
                                        name="descricao" 
                                        value={categoria.descricao}
                                        onChange={manipularMudancas}
                                        required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe a descrição</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <FloatingLabel controlId="floatingSelect" label="Categorias:">
                                <Form.Select 
                                    id='catprod'
                                    name='catprod'
                                    onChange={manipularMudancas}
                                    value={categoria.catprod}>
                                    <option value="Smartphones e tablets">Smartphones e tablets</option>
                                    <option value="TVs e monitores">TVs e monitores</option>
                                    <option value="Câmeras digitais e filmadoras">Câmeras digitais e filmadoras</option>
                                    <option value="Fones de ouvido e alto-falantes sem fio">Fones de ouvido e alto-falantes sem fio</option>
                                    <option value="Joias e bijuterias">Joias e bijuterias</option>
                                    <option value="Roupas esportivas e de atividade ao ar livre">Roupas esportivas</option>
                                    <option value="Cosméticos (maquiagem, produtos para pele, etc.)">Cosméticos (maquiagem, produtos para pele, etc.)</option>
                                    <option value="Perfumes">Perfumes</option>
                                    <option value="Suplementos nutricionais">Suplementos nutricionais</option>
                                    <option value="Refrigerante">Refrigerante</option>
                                    <option value="Suco">Suco</option>
                                    <option value="Bebidas alcoólicas">Bebidas alcoólicas</option>
                                    <option value="TVs e monitores">Produtos orgânicos e saudáveis</option>        
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <FloatingLabel
                                    label="Marca:"
                                    className="mb-3"
                                >
                                    <Form.Control 
                                        type="text" 
                                        id="marca" 
                                        name="marca"
                                        onChange={manipularMudancas}
                                        value={categoria.marca}
                                        required
                                        />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe a marca!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} offset={5} className="d-flex justify-content-end">
                            <Button type="submit" variant={"primary"}>{props.modoEdicao ? "Alterar":"Cadastrar"}</Button>
                        </Col>
                        <Col md={6} offset={5}>
                            <Button type="button" variant={"secondary"} onClick={() => {
                                    props.exibirFormulario(false)
                                }
                            }>Voltar</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }

