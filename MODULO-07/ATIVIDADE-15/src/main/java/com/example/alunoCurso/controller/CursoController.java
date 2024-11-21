package com.example.alunoCurso.controller;


import com.example.alunoCurso.model.Curso;
import com.example.alunoCurso.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/cursos") //http://localhost:8080/cursos/
public class CursoController {
    @Autowired
    private CursoService cursoService;

    @PostMapping
    public ResponseEntity<Curso> criarCurso(@RequestBody Curso curso) {
        Curso cursoSalvo = cursoService.salvarCursoComAlunos(curso);
        return ResponseEntity.ok(cursoSalvo);
    }

    @GetMapping
    public ResponseEntity<List<Curso>> listarCursos() {
        List<Curso> cursos = cursoService.listarCursos();
        return ResponseEntity.ok(cursos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Curso> buscarCursoPorId(@PathVariable Long id) {
        Curso curso = cursoService.buscarCurso(id);
        if(curso != null){
            return ResponseEntity.ok(curso);
        }else{
            return ResponseEntity.notFound().build();
        }
    }
}
