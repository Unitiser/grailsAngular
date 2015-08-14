import helloangular.Citation
class BootStrap {

    def init = { servletContext ->
        new Citation(author: "Uncle Ben", citation: "With great power comes great responsibility.", reference: "Marvel", dateCreated : new Date()).save();
        new Citation(author: "Uncle Ben's", citation: "It really does make a difference.", reference: "Converted Rice Inc.", dateCreated : new Date()).save();
    }
    def destroy = {
    }
}
