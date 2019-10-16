class Postagens {
    constructor(postagemModel){
        this.Postagem = postagemModel;
    }

    async adicionar(postagemDT0){
        
        const Postagem = new this.Postagem(postagemDT0);
        await Postagem.save();
        return 'Adicionado com sucesso"';
    }

    async consultar() {
        
        const postagens = await this.Postagem.find({});
        return postagens;
    }
}

module.exports = Postagens;