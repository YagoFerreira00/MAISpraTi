package com.example.alunoCurso.controller;


import com.example.alunoCurso.model.Aluno;
import com.example.alunoCurso.service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/alunos") //http://localhost:8080/alunos/
public class AlunoController {
    @Autowired
    private AlunoService alunoService;

    @PostMapping
    public ResponseEntity<Aluno> criarAluno(@RequestBody Aluno aluno)  {
        Aluno alunoSalvo = alunoService.salvarAluno(aluno);
        return ResponseEntity.ok(alunoSalvo);
    }
    @GetMapping
    public ResponseEntity<List<Aluno>> listarAlunos() {
        List<Aluno> alunos = alunoService.listarAlunos();
        return ResponseEntity.ok(alunos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Aluno> buscarAluno(@PathVariable Long id){
        Aluno alunoEncontado = alunoService.buscarAluno(id);
        if(alunoEncontado != null){
            return ResponseEntity.ok(alunoEncontado);
        }
        return ResponseEntity.notFound().build();

    }
}

