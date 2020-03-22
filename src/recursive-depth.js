module.exports = class DepthCalculator {
    calculateDepth( arr) {
        Array.prototype.max = function() {
            return Math.max.apply(null, this);
          };
        let level = 0;
        if (arr instanceof Array){
            return arr.map(function(value, index){
                return f1(value, level + 1)
            }).max() - (level > 0 ? 0 : 1)
        }
        return level;
    }
};