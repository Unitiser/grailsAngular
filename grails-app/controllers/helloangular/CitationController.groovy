package helloangular
import grails.converters.JSON

class CitationController {

    def index() { }

    def add() {
        def citationData = request.JSON

        def newCitation = new Citation();
        newCitation.author = citationData.author;
        newCitation.citation = citationData.citation;
        newCitation.reference = citationData.reference;
        newCitation.dateCreated = new Date();

        newCitation.save();

        render newCitation as JSON
    }

    def list(){
        render Citation.list() as JSON
    }

    def remove(){
        def data = request.JSON
        def citation = Citation.get(data.id)
        citation.delete()

        render 'true'
    }
}
