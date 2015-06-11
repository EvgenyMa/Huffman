function BinaryHeap(scoreFunction){
    this.content = [];
    this.scoreFunction = scoreFunction;
}

BinaryHeap.prototype = {
    push: function(element) {
        // The new element to the end of the array
        this.content.push(element);
        // Allow to bubble up
        this.bubbleUp(this.content.length - 1);
    },

    pop: function() {
        // Store the first element
        var result = this.content[0];
        // Get the element from the end of array
        var end = this.content.pop();
        // If we have any elements, put the last element in the beginning and give down
        if (this.content.length > 0) {
            this.content[0] = end;
            this.sinkDown(0);
        }
        return result;
    },

    size: function() {
        return this.content.length;
    },

    bubbleUp: function(n) {
        // Take element, which mast move
        var element = this.content[n], score = this.scoreFunction(element);
        // If we have 0, element can't move
        while (n > 0) {
            // Calculate parents index and take it
            var parentN = Math.floor((n + 1) / 2) - 1,
                parent = this.content[parentN];
            // if parent score less, then queue is OK
            if (score >= this.scoreFunction(parent))
                break;

            // Otherwise, change the current and parent element and continue
            this.content[parentN] = element;
            this.content[n] = parent;
            n = parentN;
        }
    },

    sinkDown: function(n) {
        // Watch target element and his score
        var length = this.content.length,
            element = this.content[n],
            elemScore = this.scoreFunction(element);

        while(true) {
            // Calculate children's index
            var child2N = (n + 1) * 2, child1N = child2N - 1;
            // Use to store position of new element, if we have it
            var swap = null;
            // if the first exist in the massive
            if (child1N < length) {
                // Watch him and calculate his score
                var child1 = this.content[child1N],
                    child1Score = this.scoreFunction(child1);
                // If childScore less then element score, change they positions
                if (child1Score < elemScore)
                    swap = child1N;
            }
            // the same checks for another child
            if (child2N < length) {
                var child2 = this.content[child2N],
                    child2Score = this.scoreFunction(child2);
                if (child2Score < (swap == null ? elemScore : child1Score))
                    swap = child2N;
            }

            // no need to change,  it's ok
            if (swap == null) break;

            // otherwise change ang continue
            this.content[n] = this.content[swap];
            this.content[swap] = element;
            n = swap;
        }
    }
};