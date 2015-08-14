<div class="content">
    <div class="citations">
        <div class="item" ng-repeat="citation in citations">
            <button ng-click="removeCitation(citation)">Remove</button>
            <div class="attribute">
                <b>Author :</b> {{citation.author}}
            </div>
            <div class="attribute">
                <b>Citation : </b> {{citation.citation}}
            </div>
            <div class="attribute">
                <b>Reference : </b> {{citation.reference}}
            </div>
            <div class="attribute">
                <b>Created on :</b> {{citation.dateCreated}}
            </div>
        </div>
    </div>
    <div class="newCitation">
        <label for="">Author : </label>
        <input type="text" ng-model="newCitation.author"/> <br>
        <label for="">Citation : </label>
        <textarea ng-model="newCitation.citation"></textarea> <br>
        <label for="">Reference : </label>
        <input type="text" ng-model="newCitation.reference"/> <br>
        <button ng-click="addCitation(newCitation)">Add</button>
    </div>
</div>