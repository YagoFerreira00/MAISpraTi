package com.example.alunoCurso.repository;

import com.example.alunoCurso.model.Curso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CursoRepository extends JpaRepository<Curso,Long> {

}
