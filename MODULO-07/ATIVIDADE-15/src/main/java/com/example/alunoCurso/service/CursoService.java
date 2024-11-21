package com.example.alunoCurso.service;


import com.example.alunoCurso.model.Curso;
import com.example.alunoCurso.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CursoService {
    @Autowired
    private CursoRepository cursoRepository;

    public Curso salvarCursoComAlunos(Curso curso){
        //Curso.getAlunos().forEach(p -> p.setCurso(curso));
        return cursoRepository.save(curso);
    }

    public List<Curso> listarCursos(){
        return cursoRepository.findAll();
    }

    public Curso buscarCurso(Long id){
        return cursoRepository.findById(id).orElse(null);
    }
}
