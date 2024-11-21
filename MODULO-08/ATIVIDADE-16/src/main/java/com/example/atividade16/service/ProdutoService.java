package com.example.atividade16.service;

import com.example.atividade16.model.Produto;
import com.example.atividade16.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository produtoRepository;

    public Produto createProduto(Produto produto) {
        return produtoRepository.save(produto);
    }

    public List<Produto> getAllProdutos() {
        return produtoRepository.findAll();
    }

    public Optional<Produto> getProdutoById(Long id) {
        return produtoRepository.findById(id);
    }

    public Produto updateProduto(Long id, Produto produtoDetails) {
        Produto produto = produtoRepository.findById(id).orElseThrow(() -> new RuntimeException("Produto not found"));
        produto.setName(produtoDetails.getName());
        produto.setDescription(produtoDetails.getDescription());
        produto.setPrice(produtoDetails.getPrice());
        produto.setStockQuantity(produtoDetails.getStockQuantity());
        return produtoRepository.save(produto);
    }

    public void deleteProduto(Long id) {
        produtoRepository.deleteById(id);
    }
}





