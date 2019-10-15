import data from './data/data.json';
import { readFile } from 'fs';

let dadosUsuario = {};
let pData = {};
export const carregaDados = (usuario) => { 
  pData = JSON.stringify(data);
  dadosUsuario = data[usuario] };
export const getNomeUsuario = () => dadosUsuario.nome;
export const getSenhaUsuario = () => dadosUsuario.senha;
export const getDtNascimento = () => dadosUsuario.dt_nascimento;
export const getEndereco = () => dadosUsuario.endereco;
export const getMateriasCursadas = () => dadosUsuario.materias.cursadas;
export const getMateriasPendentes = () => dadosUsuario.materias.pendentes;
export const getMateriasAprovadas = () => dadosUsuario.materias.aprovadas;
export const getMateriasReprovadas = () => dadosUsuario.materias.reprovadas;
export const getMensalidadeValor = () => dadosUsuario.mensalidade.valor;
export const getMensalidadeVenc = () => dadosUsuario.mensalidade.vencimento;
export const getTurmaCodigo = () => dadosUsuario.turma.codigo;
export const getTurmaCurso = () => dadosUsuario.turma.curso;
export const getPeriodo = () => dadosUsuario.periodo;
export const getEventosUsuario = () => dadosUsuario.eventos;