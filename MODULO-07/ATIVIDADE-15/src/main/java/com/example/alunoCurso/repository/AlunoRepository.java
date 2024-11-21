package com.example.alunoCurso.repository;

import com.example.alunoCurso.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoRepository extends JpaRepository<Aluno,Long> {

}

